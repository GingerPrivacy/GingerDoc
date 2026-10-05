---
title: "Ginger Wallet 与 Wasabi Wallet：设置、费用与取舍"
description: "比较 Ginger 和 Wasabi 的协调器设置、CoinJoin 成本、硬件钱包流程及隐私局限，选择合适工具。"
doc_id: "compare.ginger-vs-wasabi"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet 和 Wasabi Wallet 都是让你自行持有密钥并使用 CoinJoin 的开源比特币桌面钱包。开始 CoinJoin 时，主要实际区别在于协调器设置和协调器费用。

**Ginger 已配置协调器连接。Wasabi 需要你在 CoinJoin 前配置协调器。** Ginger 协调器通常对超过 0.03 BTC 的符合条件输入收取 0.3%，豁免见下文。当前 Wasabi 只接受无协调器费用的轮次。两者都有矿工手续费。

最后核查：**2026 年 9 月 7 日**。版本范围：[Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) 与 [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2)。比较涵盖已记录流程，不是速度、可靠性或匿名性的基准测试。

<span id="at-a-glance" data-ginger-heading="一览" aria-hidden="true"></span>

## 一览

| 问题 | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| 谁控制签名密钥？ | 你；协调器不为你持有托管钱包余额。 | 你；CoinJoin 是自行保管流程。 |
| CoinJoin 需要设置什么？ | 已包含协调器连接；开始前检查钱包设置。 | 选择并配置兼容协调器，再检查钱包设置。 |
| 有协调器费用吗？ | 通常按每个应收费输入完整价值收取 0.3%；0.03 BTC 或更低输入及符合条件再次参与豁免。 | 当前客户端接受无协调器费用轮次。 |
| 仍可能有其他成本吗？ | 有：矿工手续费及可能不返还的小额余数。 | 有：矿工手续费及可能不返还的小额余数。 |
| 硬件持有密钥能签署 CoinJoin 输入吗？ | 本版本常规硬件钱包流程不支持。 | 当前硬件钱包流程不支持。 |
| CoinJoin 输出能进入硬件存储吗？ | 可以，使用受支持且已加载为输出目的地的硬件钱包。 | 可以，通过 CoinJoin-to-wallet 功能使用受支持已加载钱包。 |

下文解释区别成立的条件，并提供相关文档链接。

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="协调器设置ginger-少一项决定" aria-hidden="true"></span>

## 协调器设置：Ginger 少一项决定

协调器组织参与钱包之间的 CoinJoin 轮次。它是独立于钱包应用的服务，不需要助记词或私钥。

Ginger [已发布配置](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs)提供协调器连接。创建并备份软件钱包后，可检查设置并开始，无须先寻找协调器地址。参阅[在 Ginger 使用 CoinJoin](/zh-cn/using-ginger/coinjoin/)。

Wasabi [CoinJoin 指南](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html)要求参与前配置协调器，支持手动和可选自动参与。选择协调器也意味着检查操作者可用性和政策。

Ginger 在此的实际优势是配置路径较短。提供连接不保证立即有轮次：仍需已确认资金、可接受费用、可用服务和足够参与输入。

<span id="privacy-with-future-use-in-mind" data-ginger-heading="为未来使用考虑隐私" aria-hidden="true"></span>

## 为未来使用考虑隐私

你可能希望现在改善比特币隐私，之后使用交易所。CoinJoin 中，你的币与其他参与者输入共享交易。托管服务审核存款时，这些联系可能有影响。

Ginger 协调器筛查参与输入，排除未通过风险检查的输入。目的是限制接触其他参与者被标记输入的情况——这可能是日后使用比特币时额外审查的一个来源。

Wasabi 是否采用类似筛查取决于所选协调器。各接收服务仍自行决定是否接受。

<span id="fees-compare-the-complete-cost" data-ginger-heading="费用比较完整成本" aria-hidden="true"></span>

## 费用：比较完整成本

<span id="gingers-coordinator-fee" data-ginger-heading="ginger-协调器费用" aria-hidden="true"></span>

### Ginger 协调器费用

豁免阈值**逐输入**适用，输入也称币或 UTXO。不是钱包余额或注册总金额限制。

当前协调器设置下：

- **0.03 BTC 或更低**的输入不支付协调器费用。
- 较大输入通常按**完整价值的 0.3%**收费。
- 符合条件的再次参与也可豁免，取决于输入资格及提供轮次。

没有其他豁免的输入：

| 输入价值 | 协调器费用 | 矿工手续费 |
| --- | --- | --- |
| 0.03 BTC | 0 聪 | 另计 |
| 0.10 BTC | 0.0003 BTC，即 30 000 聪 | 另计 |

示例说明计算方式，不是未来轮次报价。完整规则及更多例子见 [CoinJoin 费用与隐私进展](/zh-cn/using-ginger/annonset/)。

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="wasabi-协调器费用政策" aria-hidden="true"></span>

### Wasabi 协调器费用政策

Wasabi 自 2.2.0.0 起只接受无协调器费用轮次。矿工手续费仍需支付。文档也描述少见的输出分配余数，每次 CoinJoin 最多 10 000 聪，归协调器。参阅 [Wasabi 费用说明](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees)。

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="不只看宣传百分比" aria-hidden="true"></span>

### 不只看宣传百分比

Ginger 分配输出金额时，也可留下小额余数。对于任一钱包，比较参与输入价值与已完成交易中**你拥有的全部输出**，包括其他钱包收到的输出。重复轮次和之后转账可增加成本。

协调器费用为零只是比较的一部分。交易大小、矿工费率、输出分配和完成轮次数会影响最终花费。Ginger [成本指南](/zh-cn/using-ginger/annonset/)说明如何核对金额。

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="硬件钱包签署输入与接收输出不同" aria-hidden="true"></span>

## 硬件钱包：签署输入与接收输出不同

两款应用都支持硬件钱包普通收款和签署付款。其文档中的 CoinJoin 流程要求软件钱包签署参与输入；硬件设备不能作为该签名来源。参阅 [Ginger 硬件钱包支持](/zh-cn/using-ginger/hardware-wallet/)和 [Wasabi 硬件钱包指南](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html)。

接收产生的币是另一操作。两者都允许将另一个受支持且已加载钱包作为 CoinJoin 输出目的地，包括硬件钱包。这可以避免轮次后的单独转账。**不代表**硬件设备签署输入，也不代表输出到达前一定达到目标隐私评分。

Ginger 重启后重新检查目的地，因为选择重置。分别备份软件源钱包和硬件目的钱包。切勿为启用 CoinJoin 在桌面应用输入硬件助记词。

受支持流程及条件，参阅 [Ginger 冷存储指南](/zh-cn/hardware-wallets/exchange-to-cold-storage/)或 [Wasabi CoinJoin-to-wallet 说明](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet)。

<span id="privacy-and-service-policies" data-ginger-heading="隐私与服务政策" aria-hidden="true"></span>

## 隐私与服务政策

自行保管回答谁能授权花费，不解决全部隐私或服务可用性问题。CoinJoin 增加推断部分所有权关联的难度，但交易仍公开。交易所保留自身记录；之后合并币、地址复用或向收款人披露可建立新关联。钱包评分不保证匿名或交易所接受。参阅 [CoinJoin 信任与局限](/zh-cn/learn-coinjoin/trust-and-limits/)。

Ginger 操作者 InvisibleBit LLC 公布服务限制，包括美国所在地和国籍相关限制。条款也允许第三方检查和拒绝特定输入。使用前阅读[当前 Ginger 条款](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt)。Wasabi 应检查配置的协调器政策；钱包费用政策不决定操作者准入或数据处理行为。

<span id="which-fits-your-needs" data-ginger-heading="哪个适合你" aria-hidden="true"></span>

## 哪个适合你？

**如果希望自带协调器连接，且费用结构和服务政策适合你，可以考虑 Ginger。** 从[入门](/zh-cn/getting-started/)开始，建立备份，并在参与前检查 [CoinJoin 控件](/zh-cn/using-ginger/coinjoin/)。

**如果更愿意自己选择协调器，并要求无协调器费用的轮次，可以考虑 Wasabi。** 开始前检查操作者及完整交易成本。

主要需求是用硬件钱包收取、持有和发送比特币时，先比较受支持设备和普通付款流程。CoinJoin 可选；是否有帮助取决于想保护的信息，以及如何花费产生的币。
