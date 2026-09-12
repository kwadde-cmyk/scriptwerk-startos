import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'scriptwerk',
  title: 'Scriptwerk',
  license: 'MIT',
  packageRepo: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  upstreamRepo: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  marketingUrl: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          workdir: '../..',
          dockerfile: '../../Dockerfile',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    bitcoind: {
      description:
        'Optional JSON-RPC for getdescriptorinfo. Scriptwerk creates a unique scriptwerk_xxxxxxxx RPC user.',
      optional: true,
      metadata: {
        title: 'Bitcoin Core',
        icon: 'icon.svg',
      },
    },
    fulcrum: {
      description:
        'Preferred Electrum server on this device for UTXO lookup. Optional — Scriptwerk starts without it. Internal plaintext bridge, not the LAN SSL address.',
      optional: true,
      metadata: {
        title: 'Fulcrum',
        icon: 'icon.svg',
      },
    },
    electrs: {
      description:
        'Electrum server if Fulcrum is not installed. Optional. Used for UTXO lookup over the internal bridge.',
      optional: true,
      metadata: {
        title: 'Electrs',
        icon: 'icon.svg',
      },
    },
  },
})
