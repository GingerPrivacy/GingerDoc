---
doc_id: "payments.send"
title: "发送比特币与核对手续费"
description: "准备 Ginger 付款，核对收款人和金额，了解手续费率及找零，并授权交易。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

Ginger 无法撤回已确认的比特币付款。确认前，通过可信渠道核实收款人，并核对完整目的地址、金额和手续费。学习新流程时，先使用小额付款。

<span id="prepare-a-payment" data-ginger-heading="准备付款" aria-hidden="true"></span>

## 准备付款

1. 打开持有资金的钱包，选择 **Send**。常规付款流程选择 **Automatic**。需要时可另行学习手动选币。
2. 将收款人的比特币地址或付款 URI 放入 **To:**。付款请求可能包含金额；粘贴后检查。如果平台提供 **Scan QR Code**，可以使用摄像头，然后核对解码后的目的地址。
3. 输入金额和有用的收款人标签。检查显示的是 BTC 还是法币。法币估值随汇率变化，不是比特币网络转移的金额。
4. 选择 **Continue**，检查交易预览、所选资金、隐私建议及预计找零。调整金额的建议，只有在仍满足收款人请求时才合适。
5. 检查手续费和预计确认时间。详情正确时选择 **Confirm**，然后完成可能要求的口令或硬件设备授权。
6. 在历史中检查广播的交易。网络错误后结果不确定时，在开始另一笔付款前先查看历史。

发送全部可用资金时，手续费可能从收款人收到的金额中扣除。固定金额请求和 PayJoin 有不同限制。应在预览中检查实际收款金额，不要假设钱包余额能全部到达目的地址。

<span id="check-the-fee-without-custom-settings" data-ginger-heading="不使用自定义设置检查手续费" aria-hidden="true"></span>

## 不使用自定义设置检查手续费

在预览中检查总手续费和预计确认偏好。手续费支付交易空间，并非简单按付款金额的百分比收取。时间估计可能变化，不是保证。

使用自己理解的可用手续费估算。如果估算不可用，又不确定如何选择，先等待并调查，不要猜测很高的自定义手续费。

<span id="the-leftover-money-is-change" data-ginger-heading="剩余资金是找零" aria-hidden="true"></span>

## 剩余资金是找零

付款可能使用一份大于收款金额加手续费的比特币。剩余价值作为找零返回钱包，有时在你没见过的地址上。你仍然控制它；无须手动转回。

隐私建议可能改变提议的收款金额。仅在仍符合收款人请求时接受。尤其不要为避免找零而少付固定账单。

可选进阶参考：[自定义手续费率与找零](/zh-cn/using-ginger/fee/)，或[手动币控制与交易历史](/zh-cn/payments/coin-control-history/)。

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="无法准备付款时" aria-hidden="true"></span>

## 无法准备付款时

资金不足可能意味着扣除手续费后，可花费价值不够，即使显示的总余额看起来足够。资金也可能未确认、处于 CoinJoin 关键阶段，或属于目前无法延长的未确认交易链。

恢复期间缺少发送操作是预期行为。仅观察钱包不能独立签名。本版本不支持闪电网络地址和发票；请索取比特币链上付款地址。
