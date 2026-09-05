# Review 08: Troubleshooting, FAQ, and glossary

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Ginger Wallet FAQ: Start Here](../en/help/faq.md) — beginner; `help.faq`
- [Bitcoin and Ginger Wallet Glossary](../en/help/glossary.md) — everyday; `help.glossary`
- [Troubleshoot Ginger Wallet](../en/help/troubleshooting.md) — everyday; `help.troubleshooting`
- [Advanced Ginger Wallet FAQ](../en/help/advanced-faq.md) — advanced; `help.advanced-faq`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| CoinJoin status messages | [CoinjoinPlayerViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/CoinjoinPlayer/ViewModel/CoinjoinPlayerViewModel.cs#L1) |
| Data folder and logs actions | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L250) |
| Recovery input and checksum | [RecoverWalletViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/RecoverWalletViewModel.cs#L1) |
| Released network selector | [BitcoinTabSettingsViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Settings/ViewModels/BitcoinTabSettingsViewModel.cs#L67) |
| Wallet tools | [WalletToolsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/Views/WalletToolsView.axaml#L28) |
| Import support | [ImportWalletHelper.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Helpers/ImportWalletHelper.cs#L15) |
| Visible wallet actions | [WalletView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Wallets/Views/WalletView.axaml#L95) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Awaiting cheaper coinjoins | [`UneconomicalRoundMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L382) |
| Awaiting closure of send dialog | [`UserInSendWorkflowMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L427) |
| Awaiting connection | [`BackendNotConnected`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L433) |
| Awaiting the blame round | [`WaitingForBlameRoundMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L412) |
| Cancel Transaction | [`CancelTransaction`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L349) |
| Coinjoin may be uneconomical | [`PlebStopMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L418) |
| Coordination fee rate was too high | [`CoordinationFeeRateTooHighMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L454) |
| Data Folder | [`OpenDataFolderViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L238) |
| Delete Wallet | [`DeleteWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2097) |
| Exclude Coins | [`ExcludedCoinsViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L370) |
| Insufficient funds eligible for coinjoin | [`NoCoinsEligibleToMixMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L424) |
| Logs | [`OpenLogsViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L250) |
| Mining fee rate was too high | [`MiningFeeRateTooHighMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L451) |
| Only excluded funds are available | [`OnlyExcludedCoinsAvailableMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L448) |
| Only immature funds are available | [`OnlyImmatureCoinsAvailableMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L445) |
| Resync | [`Resync`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2094) |
| Send | [`WalletSend`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L337) |
| Some funds are rejected from coinjoining | [`CoinsRejectedMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L442) |
| Speed Up Transaction | [`SpeedUpTransaction`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L346) |
| Tools | [`Tools`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L478) |
| Verify Recovery Words | [`WalletToolsVerifyRecoveryWords`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L514) |
| Wallet Settings | [`WalletSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L355) |

## Release differences and review limits

All troubleshooting preserves original recovery data. Missing feature statements concern v2.0.26 user workflows, not all possible libraries or future releases. Glossary covers terms useful to users; programming reference and operator setup remain excluded.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Reader-level and FAQ revision

Every page now has a visible reading level and `reader_level` metadata. Beginner instructions keep recovery, recipient verification and fees in the ordinary flow; detailed reference is separate. No unrelated wallet-brand mention remains in the public manuscript. Exact code paths and original research names remain truthful editorial provenance.

The FAQ now has 34 basic and 25 advanced questions. All 25 historical question families map to at least one answer; forum material establishes demand only. The foundation contains the dated evidence and follow-up guide mapping, excluded from reader navigation. Answers were checked against released recovery, eligibility, fees, transaction actions, hardware and service behavior, not historical forum solutions.

| Answer boundary | Released evidence |
| --- | --- |
| Normal private-only start guard | [CoinJoinManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Manager/CoinJoinManager.cs#L208) |
| PayJoin ordinary-transaction fallback | [TransactionPreviewViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Send/ViewModels/TransactionPreviewViewModel.cs#L522) |
| Normal recovery scan default and options | [RecoverWalletViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/RecoverWalletViewModel.cs#L57) |
| Output destination initializes to the current wallet | [WalletSettingsModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L72) |
| Separate privacy percentage calculation | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L240) |
| 2FA code and installation-ID verification | [TwoFactorAuthenticationService.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/TwoFactorAuthenticationService.cs#L78) |
| Secret Hunt ownership-proof request | [SecretHuntUpdater.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/SecretHunt/SecretHuntUpdater.cs#L193) |

### Additional released UI labels

| Visible label | Released resource |
| --- | --- |
| Advanced Recovery Options | [`AdvancedRecoveryOptionsViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1183) |
| Automatically start coinjoin | [`AutomaticallyStartCoinjoin`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L487) |
| Buy | [`Buy`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1610) |
| Coinjoin Settings | [`CoinjoinSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L373) |
| Coinjoin to this wallet | [`CoinjoinToThisWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L490) |
| Manual Control | [`WalletManualControl`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L343) |
| Minimum Gap Limit: | [`AdvancedRecoveryOptionsViewModelMinimumGapLimit`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1186) |
| Receive | [`WalletReceive`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L367) |
| Sell | [`Sell`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1613) |
| Sign Message | [`SignMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2124) |
