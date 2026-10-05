---
title: "Ginger Wallet 与 Sparrow Wallet：隐私、控制与取舍"
description: "比较 Ginger 和 Sparrow 的 CoinJoin、网络隐私、硬件钱包、多重签名、交易控制和费用，选择合适工具。"
doc_id: "compare.ginger-vs-sparrow"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet 和 Sparrow Wallet 都是允许你自行持有密钥的开源比特币桌面钱包。两者都支持普通付款、硬件钱包和有意识选币。

**Ginger 提供已配置协调器连接的 CoinJoin。Sparrow 提供更广泛的钱包配置，以及查看和签署交易的工具，包括多重签名。** 选择取决于所需流程及愿意承担的责任。

最后核查：**2026 年 9 月 14 日**。版本范围：[Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) 与 [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4)。比较涵盖这些版本已记录流程，不测量速度、可靠性或匿名性。

<span id="at-a-glance" data-ginger-heading="一览" aria-hidden="true"></span>

## 一览

| 问题 | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| 谁控制签名密钥？ | 你，在软件钱包或受支持硬件设备中。 | 你，通过配置的软件或硬件签名器。 |
| 内置协调式 CoinJoin 混币吗？ | 有，自带协调器连接。 | 当前没有 Whirlpool 混币集成；其他隐私工具仍存在。 |
| 如何取得钱包历史？ | 紧凑过滤器及本地处理区块；Tor 默认开启。 | 公开 Electrum 服务器、自有 Bitcoin Core 节点或私人 Electrum 服务器；支持 Tor。 |
| 可以用硬件钱包吗？ | 可以，支持部分设备及文件 PSBT 流程。 | 可以，支持部分 USB、二维码和 SD 卡流程。 |
| 可以设置多重签名吗？ | 文档界面没有通用多重签名设置。 | 可以，使用多个签名器和所选签名阈值。 |
| 可以选择单个币吗？ | 可以，通过 Manual Control。 | 可以，提供详细交易检查和编辑。 |
| 应预期哪些费用？ | 矿工手续费；CoinJoin 也可能有协调器费用和小额余数。 | 矿工手续费；额外输入或输出可增加成本。 |

下文解释这些区别，并链接相关指南。

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="隐私与-coinjoin不同工具处理不同关联" aria-hidden="true"></span>

## 隐私与 CoinJoin：不同工具处理不同关联

个人比特币余额由独立币组成，也称 UTXO。一起花费可关联其历史。CoinJoin 将不同参与者输入组合为一笔交易，增加推断部分所有权联系的难度。

Ginger [已发布配置](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs)包含协调器连接。软件钱包备份并收到已确认资金后，可检查 [CoinJoin 控件](/zh-cn/using-ginger/coinjoin/)并开始。协调器组织轮次而不持有签名密钥。可用性、合格资金、费用及足够参与仍影响是否完成。

Sparrow 在 [1.9.0 版本](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0)移除 Whirlpool 客户端。旧版在 Sparrow 内通过 Whirlpool 混币的说明不适用于当前版本。

Sparrow 仍提供减少花费披露的方法。**Privacy** 交易选项可构建 Stonewall 交易，添加与付款金额相同的额外输出。所有输入属于你的钱包，因此它在不混合其他参与者资金的情况下增加归属不确定性。需要适合的币、充足资金和匹配地址类型；额外输入输出可增加矿工手续费。Sparrow 也支持 BIP47 付款代码，用于派生新付款地址。参阅[私密花费](https://sparrowwallet.com/docs/spending-privately.html)。

两者在兼容流程中都支持 PayJoin 发送。PayJoin 让兼容收款人参与构建付款，与协调器混币轮次分开。Ginger 为此要求软件钱包。参阅 [Ginger PayJoin 指南](/zh-cn/payments/payjoin-message-signing/)与 [Sparrow PayJoin 更新](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4)。

这些工具都不抹去交易所记录，也不使区块链私密。之后合并币、复用地址或向收款人分享信息，可暴露新关联。参阅 [CoinJoin 信任与局限](/zh-cn/learn-coinjoin/trust-and-limits/)。

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="网络隐私谁了解钱包" aria-hidden="true"></span>

## 网络隐私：谁了解钱包？

Ginger 使用紧凑区块过滤器识别可能相关区块，再本地处理下载数据。这减少了向公开钱包服务器披露地址列表的需要。Tor 内置且默认用于常规网络连接。Ginger 也提供[可选 Bitcoin Core 节点](/zh-cn/settings-network/full-node-fees/)。连接模型和局限见 [Tor 与同步](/zh-cn/using-ginger/tor/)。

Sparrow 允许选择公开 Electrum 服务器、自有 Bitcoin Core 节点或私人 Electrum 服务器。公开服务器方便，但操作者可关联收到的钱包查询并了解活动。[快速入门](https://sparrowwallet.com/docs/quick-start.html)解释此取舍；[Bitcoin Core 指南](https://sparrowwallet.com/docs/connect-node.html)说明连接自有节点。

使用自己控制的基础设施，避免向无关公开服务器操作者披露这些查询。Sparrow 也支持 Tor 连接，包括私人服务器 onion 地址。[最佳实践指南](https://sparrowwallet.com/docs/best-practices.html)讨论这些安排。

Tor 帮助保护 IP 等连接元数据，不会向接收服务隐藏请求内容。运行自有节点也不会移除已上链交易的所有权线索。应一起选择网络设置和花费习惯。

<span id="hardware-wallets-and-multisig" data-ginger-heading="硬件钱包与多重签名" aria-hidden="true"></span>

## 硬件钱包与多重签名

两款应用可准备付款，同时让受支持硬件保留签名密钥。Sparrow 记录了 [USB 硬件钱包](https://sparrowwallet.com/docs/connected-wallet.html)、[二维码签名](https://sparrowwallet.com/docs/airgapped-wallet-qr.html)和 [SD 卡签名](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html)。可用方法取决于设备和固件。

Ginger 支持普通硬件付款和 [PSBT 文件流程](/zh-cn/hardware-wallets/psbt/)。PSBT 包含提议交易及独立签名所需信息。存在此功能不证明支持所有钱包配置：[硬件钱包指南](/zh-cn/using-ginger/hardware-wallet/)描述已发布界面局限。

Sparrow 可创建多重签名钱包，花费需要所选数量签名，例如三签名中的两个。这增加分配签名权的灵活性，也增加设置和备份责任。Ginger 不提供类似通用设置。Sparrow 钱包策略选择见[钱包创建指南](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet)。

Ginger CoinJoin 使用软件钱包签署参与输入。Ginger 中加载的受支持硬件钱包可改为接收输出。不意味着设备签署输入，也不意味着输出达到目标隐私。目的地选择在重启后重置。条件见 [Ginger 冷存储指南](/zh-cn/hardware-wallets/exchange-to-cold-storage/)；切勿为 CoinJoin 将硬件助记词输入桌面。

<span id="transaction-control-and-everyday-use" data-ginger-heading="交易控制与日常使用" aria-hidden="true"></span>

## 交易控制与日常使用

两款钱包都可标注资金并选择特定币付款。Ginger 的 **Wallet Coins** 显示单个币，**Send** → **Manual Control** 可选择资金并检查最终付款。参阅[币控制与历史](/zh-cn/payments/coin-control-history/)。

Sparrow 交易图和编辑器显示输入、输出、费用及签名细节，并提供广播前检查工具。[功能指南](https://sparrowwallet.com/features/)说明这种控制程度。适合经常操作 PSBT 或希望查看付款如何组成的人。

任一钱包中，授权前都检查收款人、选中输入、找零和手续费。即使手动选择，一起花费也可关联无关资金。

<span id="fees-and-service-conditions" data-ginger-heading="费用与服务条件" aria-hidden="true"></span>

## 费用与服务条件

两款钱包普通链上付款都有矿工手续费。交易大小和费率影响成本；使用 Sparrow 额外隐私输出可增大付款交易。

按 Ginger [已记录协调器设置](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs)，**0.03 BTC 或更低**输入豁免协调器费用。较大输入通常按**完整价值的 0.3%**收费，符合条件再次参与有豁免。阈值逐输入适用，不针对钱包总余额。

例如，应收费 0.10 BTC 输入产生 30 000 聪协调器费用，另加矿工手续费。CoinJoin 输出分配也可留下小额未返还余数。检查实际轮次条件及[完整成本说明](/zh-cn/using-ginger/annonset/)；这些设置不是未来报价。Sparrow 普通付款不购买等价协调混币服务，所以仅矿工手续费不是同类 CoinJoin 价格比较。

Ginger 协调器操作者 InvisibleBit LLC 公布美国所在地和国籍相关限制。条款也允许第三方输入检查和拒绝特定币。阅读[当前服务条款](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt)。持有密钥不保证获准参加轮次。Sparrow 应考虑所用节点或服务器隐私和可用性。

<span id="which-fits-your-needs" data-ginger-heading="哪个适合你" aria-hidden="true"></span>

## 哪个适合你？

**如果优先考虑自带协调器连接的 CoinJoin，且费用和服务条件适合你，可以考虑 Ginger。** 从[入门](/zh-cn/getting-started/)开始，建立备份后检查 CoinJoin 设置。

**如果优先考虑多重签名、特定硬件签名流程或详细交易控制，可以考虑 Sparrow。** 有意识地选择服务器连接，检查具体钱包配置支持。

两者也可承担不同角色。例如 Ginger 用于 CoinJoin，Sparrow 管理独立硬件钱包。两者之间普通转账需要矿工手续费并留下可见交易；合并输出可重新关联。Ginger 直接 CoinJoin 输出目的地必须是已在 Ginger 加载的受支持钱包，不是只在 Sparrow 打开的钱包。保持独立备份，合并前检查 [CoinJoin 后花费](/zh-cn/learn-privacy/spending-after-coinjoin/)。
