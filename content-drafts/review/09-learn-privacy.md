# Review 09: Understanding Bitcoin privacy

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Bitcoin Privacy Habits Before and After a Payment](../en/learn-privacy/habits.md) — `learn-privacy.habits`
- [Where Your Wallet Information Goes](../en/learn-privacy/information-sharing.md) — `learn-privacy.information-sharing`
- [Receiving Donations and Repeated Payments](../en/learn-privacy/repeated-payments.md) — `learn-privacy.repeated-payments`
- [Spending After CoinJoin: Worked Examples](../en/learn-privacy/spending-after-coinjoin.md) — `learn-privacy.spending-after-coinjoin`
- [Moving to Ginger Without Exposing More Wallet History](../en/learn-privacy/wallet-migration.md) — `learn-privacy.wallet-migration`
- [Who Can See My Bitcoin Transactions?](../en/learn-privacy/who-can-see.md) — `learn-privacy.who-can-see`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| Fresh addresses and local labels | [ReceiveViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Receive/ViewModels/ReceiveViewModel.cs#L74) |
| Wallet privacy classification | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L147) |
| Tor settings and restrictions | [SecuritySettingsTabViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Settings/ViewModels/SecuritySettingsTabViewModel.cs#L23) |
| Browser is independently selected | [GeneralSettingsTabView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Settings/Views/GeneralSettingsTabView.axaml#L57) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Discreet Mode | [`DiscreetMode`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L274) |
| Manual Control | [`WalletManualControl`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L343) |

## Release differences and review limits

Educational text distinguishes public facts, probabilistic clustering, network metadata, local files and voluntary disclosures. No guaranteed anonymity or universally effective waiting interval. Public community questions are demand evidence in PR00, not technical authority.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Research expansion evidence

Added four complete pages: post-CoinJoin spending examples, wallet migration, information-sharing reference, and donations/repeated payments. Fictional transaction arithmetic is internally balanced. BIP32 scope is distinguished from account-wide or device-wide claims; migration does not revoke old disclosures. Data-flow claims identify specific requests rather than promising that no wallet data ever leaves the device. Buy/sell external IDs are freshly generated per order, unlike the installation identifier in 2FA. Secret Hunt can send an ownership proof and is enabled by default in wallet data. Provider and browser policies have not been independently audited.

| Claim reviewed | Pinned released source |
| --- | --- |
| Normal startup checks all-private wallet and candidate selection; output destination does not bypass them | [CoinJoinManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Manager/CoinJoinManager.cs#L208) |
| Output wallet is initialized to the current wallet on reopening; this choice is not persisted | [WalletSettingsModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L72) |
| Fresh address generation and local labels | [ReceiveViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Receive/ViewModels/ReceiveViewModel.cs#L74) |
| Public-filter synchronization request includes chain position, not an account xpub | [WasabiSynchronizer.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/WasabiSynchronizer.cs#L94) |
| Wallet script matching happens locally before full-block processing | [WalletFilterProcessor.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/WalletFilterProcessor.cs#L225) |
| Specific node, peer-network and optional RPC block-source composition | [Global.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Daemon/Global.cs#L126) |
| Example public fee-estimate request and Tor-specific endpoint selection | [MempoolSpaceFeeRateProvider.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Daemon/FeeRateProviders/MempoolSpaceFeeRateProvider.cs#L56) |
| Peer, RPC and backend transaction-broadcast paths | [TransactionBroadcaster.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/TransactionBroadcasting/TransactionBroadcaster.cs#L143) |
| Buy address validation precedes creating the provider order | [BuyOffersViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/BuySell/ViewModels/BuyOffersViewModel.cs#L35) |
| Sell refund address validation precedes creating the provider order | [SellOffersViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/BuySell/ViewModels/SellOffersViewModel.cs#L34) |
| Buy order transmits address and parameters; the external IDs here are new per order | [BuySellManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Daemon/BuySell/BuySellManager.cs#L211) |
| Sell order transmits the refund address and order parameters | [BuySellManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Daemon/BuySell/BuySellManager.cs#L272) |
| Startup verification exchanges the code and installation ID for the additional file-encryption secret | [TwoFactorAuthenticationService.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Services/TwoFactorAuthenticationService.cs#L78) |
| Event check submits round, transaction, outpoint and ownership proof | [SecretHuntUpdater.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/SecretHunt/SecretHuntUpdater.cs#L193) |
| Secret Hunt default enabled state in wallet data | [SecretHuntResults.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/SecretHunt/SecretHuntResults.cs#L10) |
| Local wallet attributes include labels, provider and Secret Hunt information | [WalletAttributes.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/Keys/WalletAttributes.cs#L12) |

### Additional UI labels used by the expansion

| Visible label | Released resource |
| --- | --- |
| Confirm | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1027) (`Confirm`) |
| Enable/disable the use of this wallet for Secret Hunt. | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2217) (`SecretHuntSettingsEnable`) |
| Exclude Coins | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L370) (`ExcludedCoinsViewModelTitle`) |
| Hardware Wallet | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1141) (`HardwareWallet`) |
| Receive | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L367) (`WalletReceive`) |
| Secret Hunt | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2196) (`SecretHuntViewModelTitle`) |
| Send | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L337) (`WalletSend`) |
| Show on the hardware wallet | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L730) (`ShowOnHardwareWallet`) |
| Wallet Coins | [Resources.resx](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L358) (`WalletCoinsViewModelTitle`) |

The literal fee-provider label and choices are in [BitcoinTabSettingsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Settings/Views/BitcoinTabSettingsView.axaml#L21).
