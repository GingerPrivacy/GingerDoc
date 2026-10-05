---
doc_id: "help.advanced-faq"
title: "Ginger Wallet 进阶常见问题"
description: "查找已发布 Ginger 关于恢复扫描、钱包元数据、xpub、币控制、隐私进展、完整 CoinJoin 成本、输出钱包和数据分享的回答。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。首次设置或使用钱包时，从基本常见问题开始。

这些问题涵盖自定义设置、更深入隐私选择和特殊恢复情况。常规首次使用问题，返回[基本常见问题](/zh-cn/help/)。

- [恢复与本地数据](#recovery-and-local-data)
- [选币与花费](#coin-selection-and-spending)
- [CoinJoin 成本与进展](#coinjoin-costs-and-progress)
- [硬件与隐私边界](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="恢复与本地数据" aria-hidden="true"></span>

## 恢复与本地数据

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="为什么相同助记词可产生不同钱包" aria-hidden="true"></span>

### 为什么相同助记词可产生不同钱包？

原始口令参与派生密钥，另一钱包应用可能使用不同账户或地址类型。有效助记词本身不能证明应用显示同一账户。先检查原始口令和扫描进度；常规恢复检查后再调查账户兼容性。

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="什么时候应增加恢复地址间隔限制" aria-hidden="true"></span>

### 什么时候应增加恢复地址间隔限制？

有证据表明收款地址之前有许多未使用地址时考虑，例如其他应用生成的地址。**Advanced Recovery Options** → **Minimum Gap Limit:** 扩大扫描，可能增加工作量和时间；v2.0.26 恢复页面初始值为 114。它不能修复错误助记词、错误口令或不兼容账户。

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="为什么恢复后标签或隐私信息改变" aria-hidden="true"></span>

### 为什么恢复后标签或隐私信息改变？

助记词恢复密钥，不恢复每个私人笔记或本地交易分析项目。钱包 JSON 和对应 ATTR 数据有不同作用；保留原始文件，调查时用副本。标签缺失或本地评分改变，本身不证明比特币交易或公开历史改变。

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="可以在两个钱包应用使用同一助记词吗" aria-hidden="true"></span>

### 可以在两个钱包应用使用同一助记词吗？

兼容应用可控制相同密钥，但不会创建新钱包，也不会撤销向旧应用分享的信息。第二款应用可能向其服务披露地址或扩展公钥，同时花费可混淆哪些币仍可用。不要仅为连接设备就将硬件助记词输入桌面电脑。

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="地址或-xpub-暴露后别人能做什么" aria-hidden="true"></span>

### 地址或 xpub 暴露后，别人能做什么？

地址指向公开交易历史特定部分。扩展公钥可透露许多地址，包括派生范围内的未来地址，但本身通常没有花费授权。同一已暴露分支的新地址不能撤销监控；签名秘密暴露需要用新密钥作不同应对。

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="2fa-文件可以在没有服务时恢复钱包吗" aria-hidden="true"></span>

### 2FA 文件可以在没有服务时恢复钱包吗？

不要把 `2fa_info.gws` 视为独立离线恢复密钥。正常 2FA 启动使用安装标识符，并通过服务验证身份验证器，以获取额外文件加密秘密。独立保存助记词和原始口令；启用 2FA 不会使被复制的密钥失效。

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="如何删除本地钱包并区分删除与撤销" aria-hidden="true"></span>

### 如何删除本地钱包，并区分删除与撤销？

先备份，再使用 **Wallet Settings** → **Tools** → **Delete Wallet**，阅读确认。移除本地数据不会抹去比特币交易，也不会使助记词副本失效。如果签名密钥暴露，仅删除钱包不能阻止别人使用它们花费。

<span id="coin-selection-and-spending" data-ginger-heading="选币与花费" aria-hidden="true"></span>

## 选币与花费

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="币地址和钱包有何区别" aria-hidden="true"></span>

### 币、地址和钱包有何区别？

币，即 UTXO，是先前比特币交易的一个未花费输出。一个地址可收到多个币，钱包可管理多个地址和币。花费及 CoinJoin 决策针对可用币，而非仅总余额；[术语表](/zh-cn/help/glossary/)说明这些词。

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="合并-coinjoin-币总会破坏全部隐私吗" aria-hidden="true"></span>

### 合并 CoinJoin 币总会破坏全部隐私吗？

没有单一规则能描述所有观察者或付款。普通共同花费可关联输入，尤其某个已经与身份关联时，但不会自动揭示所有以前所有权关系。检查实际所需付款的输入和找零，不要将总是合并或从不合并当作保证。

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="复用地址会自动公开整个钱包吗" aria-hidden="true"></span>

### 复用地址会自动公开整个钱包吗？

不会，但该地址收款可一起查看，并与公布或提供地址的人关联。后续共同花费和其他地方持有的信息可能透露更多。标签帮助本地决定，不会强制公开分离，也不能证明自动选币保留预期边界。

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-会强制最终付款恰好使用那些输入吗" aria-hidden="true"></span>

### Manual Control 会强制最终付款恰好使用那些输入吗？

**Manual Control** 为普通付款选择候选币。授权前查看最终预览实际使用的输入、收款金额、找零和手续费。它与 CoinJoin 输入选择分开，不为未来轮次设置准确名单。

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="低手续费时应合并许多小额币吗" aria-hidden="true"></span>

### 低手续费时应合并许多小额币吗？

合并可减少日后输入数量，但合并交易需要手续费，并可能关联原本分离活动。较低费率改变成本，不改变披露。合并前考虑币的用途、价值和已知历史。

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="为什么小额付款缺失exclude-coins-会冻结它吗" aria-hidden="true"></span>

### 为什么小额付款缺失，Exclude Coins 会冻结它吗？

认定小输出丢失前，检查同步和粉尘阈值。**Exclude Coins** 影响 CoinJoin 参与，不影响普通花费，不冻结币。意外小额收款不需要立即应对；付款纳入它们前，评估花费成本和可能关联。

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="可以设置任意自定义费率或保证确认时间吗" aria-hidden="true"></span>

### 可以设置任意自定义费率或保证确认时间吗？

不可以。已发布手动编辑器拒绝低于 1 sat/vByte 的费率，网络策略可能要求高于最低值。自定义费率仍与其他交易竞争，不能预留确认期限。确认前检查总手续费，不只费率。

<span id="coinjoin-costs-and-progress" data-ginger-heading="coinjoin-成本与进展" aria-hidden="true"></span>

## CoinJoin 成本与进展

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="为什么私密余额百分比与整体进度不同" aria-hidden="true"></span>

### 为什么私密余额百分比与整体进度不同？

它们是不同本地度量。整体进度按每个币价值加权计算评分向目标的进展，彩色私密余额则统计已达目标的价值。两者都不是外部观察者识别你的测量概率。即使两边余额正确，显示也可不同。

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="为什么进度会下降或调整目标后变化" aria-hidden="true"></span>

### 为什么进度会下降，或调整目标后变化？

收款、一起花费币、不带本地分析恢复或改变目标，都可改变显示。降低目标可重新分类币，却不改变公布历史。调查相关交易和设置，不要认为评分变化证明盗窃或保证新的隐私结果。

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="可以准确选择哪些币加入轮次吗" aria-hidden="true"></span>

### 可以准确选择哪些币加入轮次吗？

客户端使用已发布 CoinJoin 设置选择符合条件的输入。可以排除特定币并调整可用偏好，但普通发送的手动选择不能强制 CoinJoin 输入名单。排除附属于那些币，不是保留同一地址全部未来收款的规则。

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="币被拒绝或归责轮次是什么意思" aria-hidden="true"></span>

### 币被拒绝或归责轮次是什么意思？

归责轮次是上次尝试无法完成后的协议重试，不是要求识别或指责其他用户。拒绝或暂不可用需要检查准确原因和当前状态。任何一条消息本身都不会把资金控制权交给协调器；参阅[已发布状态表](/zh-cn/help/troubleshooting/#coinjoin-does-not-start)。

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="如何核对一轮完整成本" aria-hidden="true"></span>

### 如何核对一轮完整成本？

汇总花费输入的价值，减去该交易中你拥有的全部输出，包括发往不同钱包的输出。差额可包含协调器收费、矿工手续费和剩余输出分配差额。不要把其他参与者输出算作自己的，也不要认为一个费用标签必然涵盖全部差额。

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="再次参与豁免永久有效或适用于全部余额吗" aria-hidden="true"></span>

### 再次参与豁免永久有效或适用于全部余额吗？

不是。它是所提供轮次政策下的输入资格规则，不是钱包每笔交易永久享有的权利。Ginger 宣传政策包含符合条件的再次参与及通过一笔交易直接花费；矿工手续费仍需支付。重新检查当前条款，不要仅为追逐假定豁免拆分或移动币。

<span id="hardware-and-privacy-boundaries" data-ginger-heading="硬件与隐私边界" aria-hidden="true"></span>

## 硬件与隐私边界

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="coinjoin-可以直接发往硬件钱包吗" aria-hidden="true"></span>

### CoinJoin 可以直接发往硬件钱包吗？

符合条件的软件钱包可在 **Coinjoin to this wallet** 中选择提供的已加载硬件钱包。目的地接收该轮输出，不等待单独的达成目标事件；正常启动不会强制已私密候选币加入轮次。每次重启后检查目的地，因为选择会重置；切勿为此将硬件种子导入电脑。

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="自有节点替代全部-ginger-服务或让-tor-不再必要吗" aria-hidden="true"></span>

### 自有节点替代全部 Ginger 服务，或让 Tor 不再必要吗？

不会。配置节点可提供区块或手续费估算等特定功能，CoinJoin 和可选服务商或 2FA 流程仍可能联系服务。Tor 处理连接暴露，接收服务仍看到请求内容。检查具体数据流，不要认为节点设置意味着没有外部请求。

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-向收款人隐藏付款吗" aria-hidden="true"></span>

### PayJoin 向收款人隐藏付款吗？

不会。收款人本来知道付款请求，并能在协商时看见提议付款。成功协作可削弱外部观察者的所有权假设，但交易模式和其他信息可限制收益。构建失败时 Ginger 可回退普通付款，因此仅授权不保证最终交易用了 PayJoin。

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="如何不付款而证明控制地址" aria-hidden="true"></span>

### 如何不付款而证明控制地址？

对钱包中的地址使用 **Sign Message**，阅读准确声明，仅与目标验证方分享签名。设备、地址类型和验证方兼容性仍重要。签名不转移比特币，也不证明拥有每个钱包地址；可将签名地址与验证方知道的身份关联。

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="secret-hunt-和买卖服务收到什么信息" aria-hidden="true"></span>

### Secret Hunt 和买卖服务收到什么信息？

相关 Secret Hunt 检查可提交轮次和交易标识符、输入 outpoint 及控制证明。买卖地址验证和订单发送所需地址及订单详情；服务商网站有自己的身份与浏览器披露。这些是独立可选流程，所以普通同步的隐私不能概括到所有流程。
