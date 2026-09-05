# Review 05: Hardware wallets and PSBT

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Connect and Use a Hardware Wallet](../en/hardware-wallets/connect.md) — `hardware-wallets.connect`
- [From an Exchange to Cold Storage with Ginger](../en/hardware-wallets/exchange-to-cold-storage.md) — `hardware-wallets.exchange-to-cold-storage`
- [Use the PSBT Workflow](../en/hardware-wallets/psbt.md) — `hardware-wallets.psbt`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| Recognized model names, not device QA | [HardwareWalletModels.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Hwi/Models/HardwareWalletModels.cs#L1) |
| HWI device detection and SegWit-only normal import | [HardwareWalletInterface.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/HardwareWalletInterface.cs#L71) |
| On-device connection prompts | [ConnectHardwareWalletViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/HardwareWallet/ConnectHardwareWalletViewModel.cs#L169) |
| Coldcard JSON shape and account import | [ImportWalletHelper.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Helpers/ImportWalletHelper.cs#L26) |
| PSBT switch only shown for hardware wallets | [WalletGeneralSettingsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/Views/WalletGeneralSettingsView.axaml#L32) |
| Save PSBT and Send Now | [TransactionPreviewViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Send/ViewModels/TransactionPreviewViewModel.cs#L79) |
| Signed-file import | [HardwareWalletViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Wallets/ViewModels/HardwareWalletViewModel.cs#L22) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Broadcast | [`BroadcasterViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L193) |
| General | [`General`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L136) |
| Hardware Wallet | [`HardwareWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1141) |
| Import File | [`ImportWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L568) |
| Import Transaction | [`ImportTransactionFileDialogTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1859) |
| PSBT workflow | [`PSBTworkflow`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L484) |
| Receive | [`WalletReceive`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L367) |
| Save PSBT file | [`SavePSBTFile`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1024) |
| Send | [`WalletSend`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L337) |
| Send Now | [`SendNow`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L922) |
| Show on the hardware wallet | [`ShowOnHardwareWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L730) |
| Wallet Settings | [`WalletSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L355) |

## Release differences and review limits

Source review is not a physical-device compatibility test. Recognized models and HWI capabilities are separated from verified graphical flows. Normal USB account import is native SegWit. PSBT setting is hardware-specific. No cold seed is entered on the desktop. Coldcard firmware instructions remain with its manufacturer.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Research expansion evidence

Added a complete exchange-to-cold-storage walkthrough with two routes, source/destination backups, address verification, fee reconciliation and later spending. The June 2026 podcast suggested a private-only forwarding routine; normal v2.0.26 startup can reject it. The manuscript explicitly limits direct-to-hardware output selection to eligible participation. That selection does not wait for a target-achievement event, and it resets on reopening. No physical device or transaction was tested.

| Claim reviewed | Pinned released source |
| --- | --- |
| Normal startup checks all-private wallet and candidate selection; output destination does not bypass them | [CoinJoinManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Manager/CoinJoinManager.cs#L208) |
| Manual play visibility when the wallet is already private | [CoinjoinPlayerViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/CoinjoinPlayer/ViewModel/CoinjoinPlayerViewModel.cs#L299) |
| Output wallet is initialized to the current wallet on reopening; this choice is not persisted | [WalletSettingsModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L72) |
| Loaded output wallets are offered by the released selector | [WalletCoinJoinSettingsViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/ViewModels/WalletCoinJoinSettingsViewModel.cs#L221) |
| Starting participation passes the selected destination directly to the CoinJoin manager | [WalletCoinjoinModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletCoinjoinModel.cs#L96) |
| Input wallet needs a loaded signing path; watch-only hardware source cannot mix | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L132) |

### Additional UI labels used by the expansion

| Visible label | Released resource |
| --- | --- |
| Coinjoin Settings | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L373) (`CoinjoinSettings`) |
| Coinjoin to this wallet | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L490) (`CoinjoinToThisWallet`) |
| Exclude Coins | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L370) (`ExcludedCoinsViewModelTitle`) |
| Manual Control | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L343) (`WalletManualControl`) |
