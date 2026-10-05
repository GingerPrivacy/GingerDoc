---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin 与消息签名"
description: "发送 PayJoin 付款请求，了解收款人掌握的信息、钱包指纹和回退行为，并签署范围明确的地址所有权消息。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先理解常规发送预览、收款金额和手续费。

PayJoin 和消息签名是独立工具。PayJoin 改变付款交易的构建方式。消息签名针对特定声明证明对密钥的控制，而不进行付款。任何一项都不能成为披露助记词的理由。

<span id="send-a-payjoin-request" data-ginger-heading="发送-payjoin-请求" aria-hidden="true"></span>

## 发送 PayJoin 请求

PayJoin 是一种协作付款，收款方可以提供一个输入。这可削弱“外观普通的付款中的所有输入都属于同一发送方”的假设。收款方必须提供包含 PayJoin 端点的兼容比特币付款 URI；仅有普通地址不能启用它。协议见 [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)。

1. 使用有可花费资金的软件钱包。本版本拒绝硬件钱包发送 PayJoin 请求。
2. 将完整付款 URI 粘贴到 **Send**，不要只复制地址。通过普通付款同样使用的可信渠道核对目的地址和金额。
3. 检查交易预览及 PayJoin 指示，金额和手续费可接受时授权付款。
4. 在历史中检查最终交易。

已发布的实现可能在 PayJoin 构建失败时回退到普通付款交易。因此，授权此流程不保证广播的是 PayJoin。如果普通付款回退会违反隐私要求，不要使用该流程。

主网使用兼容的 HTTPS 端点。在 v2.0.26 中，启用 Tor 时端点检查拒绝 onion 端点；不要将仅提供 onion 的请求视为受支持路径。保持 Tor 开启，向收款人请求兼容替代方式，不要关闭网络隐私来强行处理请求。

本指南涵盖发送收款人提供的请求。Ginger 常规 **Receive** 流程不运行 PayJoin 接收服务器，本版本也没有用于配置这种服务器的用户流程。

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="收款人与观察者能知道什么" aria-hidden="true"></span>

## 收款人与观察者能知道什么

收款人本来就知道付款请求、其收款地址和目标金额。如果请求关联实名订单，PayJoin 不会抹去身份。协商期间，接收服务还会看到提议的付款交易，包括发送方提议的输入。不要认为付款本身对该服务隐藏。

外部观察者看到最终发布在比特币上的交易。成功 PayJoin 可以使通常“所有输入属于发送方”的假设不可靠。这取决于交易以及观察者掌握的其他信息，不保证交易与所有普通付款都无法区分。

区分这些观察对象。即使无关观察者不能可靠判断输入归属，收款人仍可能通过订单或协商了解细节。如果通过已识别身份的浏览器会话查询付款，公开区块浏览器可能成为另一次披露。

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="钱包指纹与普通付款回退" aria-hidden="true"></span>

## 钱包指纹与普通付款回退

钱包会选择输入地址类型、交易结构和签名方式。这些选择组合可能留下可识别模式。因此，即使 PayJoin 协议消息有效，交易仍可能失去部分归属不确定性。已发布的 [PayJoin 指纹示例](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/)展示了特定钱包组合中的这个问题；它们不能证明 Ginger 存在同样问题，也不能量化 Ginger 的隐私效果。

作为用户，选择已更新且兼容的接收服务，验证付款请求，并检查提议的手续费和金额。不要仅为模仿其他钱包而更改不熟悉的交易选项：外观看起来合理，不代表隐私效果好。

如果必须进行协作付款，在授权 Ginger 发送流程前，与收款人约定兼容方法。普通付款回退意味着协商失败后，仍可能产生有效付款。广播后，不要只因为结果不清楚就再次发送；先检查交易和收款人的付款状态。PayJoin 协商失败与比特币付款失败是不同情况。

<span id="sign-a-message-for-an-address" data-ginger-heading="为地址签署消息" aria-hidden="true"></span>

## 为地址签署消息

有些服务要求你证明控制某个收款地址。打开钱包菜单，选择 **Sign Message**。输入属于该钱包的地址，以及确实打算签署的完整声明。Ginger 会拒绝不属于它的地址。输入消息，选择 **Continue**，并将生成的签名复制给目标验证方。

硬件钱包应按照设备签名提示操作；可用性取决于设备和消息签名支持。没有签名设备的仅观察钱包无法生成签名。地址类型与验证方支持的签名格式也必须兼容。

像审阅授权声明一样仔细阅读消息。优先使用明确收件人、用途以及日期或质询的范围有限文本。不要签署空白声明，也不要签署不了解后果的内容。签名分享后可以被复制并展示给其他人。

消息签名不会转移比特币，也不能证明拥有钱包中的每个地址。它还会将签名地址与验证方认定的你的身份关联。如果交易所提出此要求，即使以后使用 CoinJoin，该披露仍存在。
