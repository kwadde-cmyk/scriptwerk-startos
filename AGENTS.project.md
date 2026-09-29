# Scriptwerk

Before every GitHub update, check the docs against the current UI and fix them in the same commit:

- [README.md](README.md) (English and German)
- [deploy/startos/instructions.md](deploy/startos/instructions.md)
- StartOS long description in [deploy/startos/startos/manifest/i18n.ts](deploy/startos/startos/manifest/i18n.ts)
- In-app blurbs in [src/lib/i18n.ts](src/lib/i18n.ts)

Do not leave “does not sign” or “does not broadcast” if the transaction tab builds, finalizes, and sends.
