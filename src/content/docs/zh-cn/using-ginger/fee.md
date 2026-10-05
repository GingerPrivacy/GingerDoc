---
doc_id: "payments.fees-and-change"
title: "交易手续费、自定义费率与找零"
description: "了解 Ginger 中按每字节聪数表示的手续费率、手动费率输入、找零输出和调整金额的隐私建议。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> 阅读级别：进阶指南。先理解常规发送预览、收款金额和手续费。

常规付款步骤从[发送比特币](/zh-cn/payments/send/)开始。本参考详细说明手续费控件和找零；每笔付款不必都选择自定义费率。

<span id="understand-the-fee" data-ginger-heading="了解手续费" aria-hidden="true"></span>

## 了解手续费

手续费率以每虚拟字节的聪数计量，显示为 **Fee Rate (sat/vByte)**。总矿工手续费等于费率乘以交易虚拟大小，不是付款金额的百分比。花费多个小额币，可能比花费一个总价值相同的大额币更贵。

使用预览中的手续费控件更改期望确认偏好，或输入 **Custom Fee Rate**。预计时间不是保证：新交易竞争区块空间，区块也以不规则间隔产生。已发布的手动输入控件拒绝低于 1 sat/vByte 的费率；节点策略可能要求高于输入控件最低值的费率。

自动估算不可用时，Ginger 仍可能提供手动输入手续费率。如果不确定合适的费率，等待估算恢复比猜测一个很高的数值更好。普通交易手续费和 CoinJoin 协调器费用是两类不同费用。

<span id="change-is-still-your-bitcoin" data-ginger-heading="找零仍然是你的比特币" aria-hidden="true"></span>

## 找零仍然是你的比特币

比特币以完整的币为单位花费，也称 UTXO。若选中输入超过收款金额加手续费，多出的部分通常返回钱包中的新找零地址。例如，用 100 000 聪的输入支付 60 000 聪，加上 1 000 聪手续费，会留下 39 000 聪找零。

找零地址可能与已经展示给别人的收款地址不同。无需将其复制出来或手动转回。交易分析可以将找零与付款关联；之后将它与其他资金合并时，需要考虑这一点。

Ginger 的隐私建议可能通过调整选币或收款金额，提供无找零付款。仔细检查结果。不要仅为去掉找零就少付固定金额的账单。

关于选择特定币或处理待确认交易，参阅[币控制与历史记录](/zh-cn/payments/coin-control-history/)。
