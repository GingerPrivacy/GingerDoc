# Review 11: Understanding self-custody and recovery

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Bitcoin Self-Custody: Backups, Passphrases, and Hardware Wallets](../en/learn-self-custody/basics.md) — beginner; `learn-self-custody.basics`
- [Build a Recoverable Bitcoin Security Routine](../en/learn-self-custody/security-routine.md) — advanced; `learn-self-custody.security-routine`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| Recovery material and passphrase | [KeyManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/Keys/KeyManager.cs#L241) |
| Software-wallet generation | [WalletCreationOptions.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/Models/WalletCreationOptions.cs#L12) |
| Hardware public account import | [HardwareWalletInterface.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/HardwareWalletInterface.cs#L71) |
| 2FA startup service dependency | [TwoFactorAuthenticationService.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/TwoFactorAuthenticationService.cs#L78) |
| Metadata cannot be recovered from words | [WalletAttributes.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/Keys/WalletAttributes.cs#L35) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Verify Recovery Words | [`WalletToolsVerifyRecoveryWords`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L514) |

## Release differences and review limits

Educational self-custody guidance complements the operational recovery chapter. External listings are context, not security endorsements or proof of this release being audited. Hardware seed import into desktop is explicitly a change to the custody arrangement.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Research expansion evidence

Expanded the security routine with a disclosure decision table and separate responses to privacy-only and signing-key exposure. Recovery words, passphrase, xpub scope and application files are distinguished. Fresh keys are required to leave compromised keys behind; changing 2FA or an application password is not revocation. This is a practical fund-control response, not individualized legal, incident-response or investment advice.

| Claim reviewed | Pinned released source |
| --- | --- |
| Startup verification exchanges the code and installation ID for the additional file-encryption secret | [TwoFactorAuthenticationService.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/TwoFactorAuthenticationService.cs#L78) |
| Local wallet attributes include labels, provider and Secret Hunt information | [WalletAttributes.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/Keys/WalletAttributes.cs#L12) |

## Reader-level and FAQ revision

Every page now has a visible reading level and `reader_level` metadata. Beginner instructions keep recovery, recipient verification and fees in the ordinary flow; detailed reference is separate. No unrelated wallet-brand mention remains in the public manuscript. Exact code paths and original research names remain truthful editorial provenance.
