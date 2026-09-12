import { generateRpcUserDependent } from './bitcoindRpc'
import { serviceInstalled } from './electrum'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { isGeneratedRpcUser, randomRpcPassword, randomRpcUsername } from './utils'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  let store = await storeJson.read().once()
  const stale = !store?.rpcUser || !store.rpcPassword || !isGeneratedRpcUser(store.rpcUser)
  if (stale) {
    store = {
      rpcUser: randomRpcUsername(),
      rpcPassword: randomRpcPassword(),
    }
    await storeJson.write(effects, store)
  }
  const creds = store!

  /*
   * generate-rpc-dependent does not keep username/password as action input,
   * so input-not-matches never clears. once:false + critical blocked start
   * after the user already existed. Drop the leftover task; only re-issue
   * once when we just minted new creds.
   */
  try {
    await sdk.action.clearTask(
      effects,
      'scriptwerk-rpc-user',
      'bitcoind:generate-rpc-dependent',
      'bitcoind:delete-rpcauth',
    )
  } catch {
    /* ignore */
  }

  const hasCore = await serviceInstalled(effects, 'bitcoind')
  const hasFulcrum = await serviceInstalled(effects, 'fulcrum')
  const hasElectrs = await serviceInstalled(effects, 'electrs')

  if (stale && hasCore) {
    try {
      await sdk.action.createTask(effects, 'bitcoind', generateRpcUserDependent, 'important', {
        input: {
          kind: 'partial',
          accept: [{ username: creds.rpcUser, password: creds.rpcPassword }],
          set: { username: creds.rpcUser, password: creds.rpcPassword },
        },
        when: { condition: 'input-not-matches', once: true },
        reason: i18n('Scriptwerk needs an RPC user on Bitcoin Core'),
        replayId: 'scriptwerk-rpc-user',
      })
    } catch {
      /* Bitcoin Core not installed yet — optional dependency. */
    }
  }

  return {
    ...(hasCore
      ? {
          bitcoind: {
            kind: 'running' as const,
            versionRange: '>=26.0.0',
            healthChecks: ['bitcoind'],
          },
        }
      : {}),
    ...(hasFulcrum
      ? {
          fulcrum: {
            kind: 'exists' as const,
            versionRange: '>=0.1.0',
          },
        }
      : hasElectrs
        ? {
            electrs: {
              kind: 'exists' as const,
              versionRange: '>=0.1.0',
            },
          }
        : {}),
  }
})
