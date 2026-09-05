# Review 10: Understanding CoinJoin tradeoffs

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [What Is CoinJoin? Benefits, Costs, and Limitations](../en/learn-coinjoin/explained.md) — `learn-coinjoin.explained`
- [What Do You Trust When You CoinJoin?](../en/learn-coinjoin/trust-and-limits.md) — `learn-coinjoin.trust-and-limits`
- [When Does CoinJoin Make Sense?](../en/learn-coinjoin/when-to-use.md) — `learn-coinjoin.when-to-use`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| CoinJoin eligibility and wallet keys | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L132) |
| Client round processing | [CoinJoinClient.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Client/CoinJoinClient.cs#L1) |
| Preferences and destination constraints | [WalletCoinJoinSettingsViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/ViewModels/WalletCoinJoinSettingsViewModel.cs#L34) |
| Local score calculation | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L147) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Automatically start coinjoin | [`AutomaticallyStartCoinjoin`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L487) |
| Coinjoin Settings | [`CoinjoinSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L373) |

## Release differences and review limits

Protocol concepts are adapted to the released client and framed as conditional privacy benefits. No global count of independent participants is inferred from scores, no coordinator custody deposit, no guaranteed exchange acceptance or cost cap.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Research expansion evidence

Added a user-oriented trust model separating signing authority, privacy, availability and software integrity. WabiSabi assumptions and Sybil concerns are explained without operator setup instructions, a ranking of coordinators, or a claim that current attacks are impossible. Academic and interested-operator sources do not substitute for an audit of the current deployment.

| Claim reviewed | Pinned released source |
| --- | --- |
| Normal startup checks all-private wallet and candidate selection; output destination does not bypass them | [CoinJoinManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Manager/CoinJoinManager.cs#L208) |
| Input wallet needs a loaded signing path; watch-only hardware source cannot mix | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L132) |
| Startup verification exchanges the code and installation ID for the additional file-encryption secret | [TwoFactorAuthenticationService.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/TwoFactorAuthenticationService.cs#L78) |
| Peer, RPC and backend transaction-broadcast paths | [TransactionBroadcaster.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/TransactionBroadcasting/TransactionBroadcaster.cs#L143) |
