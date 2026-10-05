---
doc_id: "learn-privacy.habits"
title: "付款前后的比特币隐私习惯"
description: "使用 Ginger Wallet 时，围绕收款地址、标签、选币、浏览器和求助采用实用习惯。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

符合实际使用比特币方式的隐私改善最容易保持。更改设置前，确定想减少披露的信息，以及哪些人或服务可能看到它。

<span id="before-receiving" data-ginger-heading="收款之前" aria-hidden="true"></span>

## 收款之前

为特定付款生成新地址，并使用日后仍有意义的本地标签。能够提供单独付款请求时，避免用一个可重复使用的公开地址接收无关款项。在硬件设备上验证硬件钱包地址。

也考虑沟通渠道。如果从已关联身份的账户发送收款地址，即使区块链本身没有姓名字段，接收者仍能将地址与你联系。新地址减少重复使用，不会抹去分享它的对话。

<span id="before-sending" data-ginger-heading="发送之前" aria-hidden="true"></span>

## 发送之前

检查可用币来自哪里。合并不同活动的付款，可能披露其输入被一起花费。在 Ginger 中，**Manual Control** 帮助查看和选择币；自动选币及隐私建议辅助普通付款。始终检查最终预览。

索取新目的地址，并确认金额和地址。如果建议通过更改收款金额避免找零，确认收款人实际接受修改后的金额。发错人或少付账单不会改善隐私。

<span id="after-coinjoin" data-ginger-heading="coinjoin-之后" aria-hidden="true"></span>

## CoinJoin 之后

将产生的币视为后续处理仍重要的资金。把所有输出合并到一笔后续交易，可能建立新关联。复用已关联身份的地址，或通过已获知你身份的服务花费，都会产生额外信息，无论 Ginger 在付款前显示什么评分。

分析者也可能跨交易比较时间和金额。没有保证安全的通用等待期。规划如何花费，不要期待一轮或固定延时解决所有观察形式。

<span id="on-the-network-and-computer" data-ginger-heading="网络与电脑上" aria-hidden="true"></span>

## 网络与电脑上

保持 Tor 开启，用于钱包预期的私密网络连接。它通过中继路由连接，减少直接 IP 暴露；[Tor Project 的说明](https://support.torproject.org/about-tor/introduction/what-is-tor/)介绍其作用。Tor 不会向另一端服务隐藏你明确提交的内容。

检查服务商及区块浏览器链接使用的浏览器。日常浏览器可能携带已登录账户和识别性 Cookie。Ginger 浏览器偏好与自身 Tor 设置独立。优先使用本地钱包历史，不要反复在公开区块浏览器搜索自己的地址。

有人能看到屏幕时，用 **Discreet Mode** 隐藏受支持显示字段；离开时用操作系统锁屏。保护备份介质和本地标签。仅观察钱包即使不暴露签名密钥，也可能泄露金融活动。

<span id="when-asking-for-help" data-ginger-heading="求助时" aria-hidden="true"></span>

## 求助时

描述版本、操作系统、错误和不含秘密的复现步骤。只分享最少的相关且经过检查的日志片段。不要发布 xpub、整个钱包数据文件夹、助记词或身份验证器二维码。客服志愿者无法通过在公开渠道安全接收秘密来修复缺失口令。

<span id="choose-a-sustainable-routine" data-ginger-heading="选择可持续的习惯" aria-hidden="true"></span>

## 选择可持续的习惯

偶尔付款时，新地址、仔细预览、受保护备份和 Tor 可以是首先建立的改善。如果需要更强交易关联隐私，评估 CoinJoin 费用、服务条件和参与后的花费行为。无法恢复或不能持续遵守的复杂流程，可能产生与原先想降低的风险不同的风险。

捐款或分期付款参阅日常指南[重复付款](/zh-cn/learn-privacy/repeated-payments/)。可选进阶指南涵盖 [CoinJoin 后花费](/zh-cn/learn-privacy/spending-after-coinjoin/)、[钱包迁移](/zh-cn/learn-privacy/wallet-migration/)和[钱包信息流向何处](/zh-cn/learn-privacy/information-sharing/)。需要具体决定时选择相应指南；它们不是首次付款的必需步骤。
