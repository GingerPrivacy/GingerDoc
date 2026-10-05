---
title: "为什么使用 Ginger Wallet？"
description: "根据想保护的信息选择 Ginger 的比特币隐私工具，并了解其局限。"
doc_id: "learn-privacy.why-ginger"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger 是一款用于比特币链上交易的开源桌面钱包。你掌握密钥，可以使用新地址收款，并在签名前核对付款。可选的 CoinJoin 增加推断交易所有权关系的难度；内置 Tor 则帮助减少经过它路由的连接直接暴露 IP 的情况。

<span id="start-with-what-you-want-to-protect" data-ginger-heading="从想保护的内容开始" aria-hidden="true"></span>

## 从想保护的内容开始

- **花费密钥：**保留完整恢复备份，保护用于签名的电脑。受支持的硬件钱包可以将签名密钥保留在独立设备上。
- **付款历史：**使用新的收款地址，保留有用的本地标签，并检查付款会花费哪些币。[了解比特币交易会透露什么](/zh-cn/using-ginger/privacy/)。
- **网络连接：**保持 Ginger 常规 Tor 保护开启。外部浏览器有自己的网络行为、Cookie 和账户。

接收、发送和 CoinJoin 是独立操作。可以先学习普通付款，再判断 CoinJoin 是否能应对你的隐私需求。完成的轮次需要费用，完成时间没有保证。

<span id="understand-the-limits" data-ginger-heading="了解局限" aria-hidden="true"></span>

## 了解局限

比特币交易仍然公开。Tor 不会向接收信息的服务隐藏你提交的内容。购买服务商可以将订单与你的身份关联，钱包的隐私评分也无法保证匿名性或交易所会接受资金。

可选服务还有各自的数据流：买卖订单会披露所需详情，2FA 在正常启动时使用服务，Secret Hunt 可以提交交易引用和所有权证明。[钱包信息流向何处](/zh-cn/learn-privacy/information-sharing/)是针对这些选择的可选进阶参考。

从[日常隐私习惯](/zh-cn/using-ginger/address-reuse/)开始，保持自己能够理解并可恢复的使用方式。开源允许审查代码，但不能保证每次安装都没有缺陷，也不能保证被入侵的电脑安全。
