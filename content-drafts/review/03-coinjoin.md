# Review 03: Using and configuring CoinJoin

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Use CoinJoin in Ginger Wallet](../en/coinjoin/use-coinjoin.md) — `coinjoin.use-coinjoin`
- [Configure CoinJoin and Output Wallets](../en/coinjoin/settings.md) — `coinjoin.settings`
- [CoinJoin Fees and Privacy Progress](../en/coinjoin/fees-and-progress.md) — `coinjoin.fees-and-progress`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| Player states and commands | [CoinjoinPlayerViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/CoinjoinPlayer/ViewModel/CoinjoinPlayerViewModel.cs#L1) |
| Visible settings and output-wallet warning | [WalletCoinJoinSettingsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/Views/WalletCoinJoinSettingsView.axaml#L25) |
| Validation, loaded destinations, selection controls | [WalletCoinJoinSettingsViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/ViewModels/WalletCoinJoinSettingsViewModel.cs#L91) |
| Output selection resets | [WalletSettingsModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L127) |
| Source signing eligibility and weighted progress | [Wallet.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L132) |
| Experimental controls | [CoinjoinCoinSelectorSettingsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/Views/CoinjoinCoinSelectorSettingsView.axaml#L18) |
| Backend defaults are not live quotes | [WabiSabiConfig.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs#L143) |
| Default per-wallet attributes | [WalletAttributes.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Blockchain/Keys/WalletAttributes.cs#L14) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| (EXPERIMENTAL) Improved Coin Selection | [`ExperimentalCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1574) |
| Amount loss normalization for score calculation | [`ValueLossRateNormalInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1589) |
| Anonymity score target | [`AnonTargetText`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L538) |
| Automatically start coinjoin | [`AutomaticallyStartCoinjoin`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L487) |
| Awaiting auto-start of coinjoin | [`CountDownMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L376) |
| Awaiting cheaper coinjoins | [`UneconomicalRoundMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L382) |
| Awaiting closure of send dialog | [`UserInSendWorkflowMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L427) |
| Awaiting confirmed funds | [`WaitingForConfirmedFunds`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L439) |
| Awaiting other participants | [`InputRegistrationMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L409) |
| Awaiting the blame round | [`WaitingForBlameRoundMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L412) |
| Can select already private coins | [`CanSelectPrivateCoinsInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L2190) |
| Coin privacy difference normalization for score calculation | [`WeightedAnonymityLossNormalInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1583) |
| Coinjoin Settings | [`CoinjoinSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L373) |
| Coinjoin may be uneconomical | [`PlebStopMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L418) |
| Coinjoin successful! Continuing... | [`RoundSucceedMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L397) |
| Coinjoin time preference | [`CoinJoinTimePrefText`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L550) |
| Coinjoin to this wallet | [`CoinjoinToThisWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L490) |
| Coordination fee rate was too high | [`CoordinationFeeRateTooHighMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L454) |
| Disabled | [`DisabledEnum`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1508) |
| Exclude Coins | [`ExcludedCoinsViewModelTitle`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L370) |
| Force to use low privacy coins | [`ForceUsingLowPrivacyCoinsInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1577) |
| Hurray! All your funds are private! | [`AllPrivateMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L430) |
| Ignore coinjoin time preference below | [`SafeFeeText`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L544) |
| Insufficient participants, retrying... | [`AbortedNotEnoughAlicesMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L403) |
| Min input count was too low | [`MinInputCountTooLowMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L457) |
| Mining fee rate was too high | [`MiningFeeRateTooHighMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L451) |
| Often | [`Often`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1544) |
| Only excluded funds are available | [`OnlyExcludedCoinsAvailableMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L448) |
| Press Play to start | [`PressPlayToStartMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L394) |
| Random Skip | [`RandomSkip`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1538) |
| Rarely | [`Rarely`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1550) |
| Server did not give remix fee exemption | [`ServerDidNotGiveFeeExemptionMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L460) |
| Single non-private coin restriction | [`RedcoinText`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L532) |
| Skipping a round for better privacy | [`RandomlySkippedRoundMessage`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L385) |
| Sometimes | [`Sometimes`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1547) |
| Stop coinjoin threshold | [`PlebStopThreshold`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L505) |
| Target coin number per wallet bucket | [`TargetCoinCountPerBucketInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1595) |
| Use the Old Coin Selector for fallback | [`UseOldCoinSelectorAsFallbackInCoinJoinCoinSelector`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1601) |

## Release differences and review limits

Website hardware-to/from-CoinJoin statement is too broad for released destination selection. Source wallet must be mixable; loaded hardware destination can be offered. Destination resets after restart. Fee text is the advertised policy, not a query to production round state. Progress calculation is weighted score; colored categories are amount fractions. Experimental selection remains explicitly experimental.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.
