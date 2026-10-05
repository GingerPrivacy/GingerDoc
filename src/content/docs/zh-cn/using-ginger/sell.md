---
doc_id: "buy-sell.sell-and-orders"
title: "卖出比特币与处理服务商订单"
description: "使用服务商准确金额和地址完成 Ginger 卖出订单，跟踪状态，并联系正确的支持服务。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

卖出将比特币兑换为服务商提供的付款方式。Ginger 帮助获取报价并准备链上付款，但法币支付和订单审核由服务商控制。投入资金前阅读服务商要求。

<span id="create-and-fund-a-sale" data-ginger-heading="创建并支付卖出订单" aria-hidden="true"></span>

## 创建并支付卖出订单

1. 打开已同步且有可花费比特币的钱包，选择 **Sell**。操作缺失时，检查恢复进度及钱包能否发送。
2. 按要求选择国家或地区。输入卖出金额和希望收款的货币。检查显示单位及限额。
3. 选择 **Continue**，按付款方式筛选 **Offers**，比较服务商净支付金额和收费。
4. 选择 **Accept**。完成服务商浏览器步骤，直到收到准确比特币目的地址、金额和付款期限。
5. 返回 Ginger 卖出对话框，选择 **Send**。输入或核对服务商提供的目的地址和准确金额。不要假定浏览器自动正确填写了所有字段。
6. 确认前检查交易手续费和收款金额。扣除可能的手续费后，必须到达服务商请求的金额；不要意外将“全部发送”当作支付固定账单。
7. 检查交易历史和 **Previous Orders** 中的进度。保留服务商订单 ID 和交易 ID。

卖出对话框保留服务商背景，但不会免除比对付款请求与预览的责任。发送前报价过期时，获取服务商更新指示，不要试探性支付旧地址。

<span id="understand-status" data-ginger-heading="了解状态" aria-hidden="true"></span>

## 了解状态

| 订单详情中的状态 | 应如何处理 |
| --- | --- |
| **Created** | 订单已存在；再次付款前检查还需完成哪些服务商步骤。 |
| **Pending** | 仍在处理。比较服务商状态和钱包历史。 |
| **Your transaction is on hold. Please contact Support.** | 使用订单 ID 联系所选服务商。Ginger 无法解除其审核。 |
| **Expired** | 不要假定旧报价或付款地址仍可用。已发送资金时询问服务商。 |
| **Failed** | 尝试新订单前检查付款或比特币是否已转移。 |
| **Refunded** | 向服务商确认退款方式、目的地和结算。 |
| **Completed** | 通过相应钱包或付款账户，验证预期比特币收款或法币支付。 |

状态标签反映服务商集成的最新信息，可能滞后。**Buy** 或 **Sell** 的暂停指示表示订单需要处理，不表示钱包密钥丢失。

<span id="which-support-channel-to-use" data-ginger-heading="使用哪个支持渠道" aria-hidden="true"></span>

## 使用哪个支持渠道

身份检查、付款延误、接受的付款方式、退款条款或订单暂停问题，通过服务商已验证网站联系。提供订单 ID，以及该具体问题必要的交易信息。不要在公开 GitHub 问题中放入私人账户详情。

Ginger 崩溃、浏览器打不开或订单显示错误时，通过 Ginger 官方支持链接报告应用版本、操作系统、错误文本及步骤。不要提供助记词、口令、2FA 秘密、钱包文件，或未经检查的完整日志。

<span id="privacy-and-fees" data-ginger-heading="隐私与费用" aria-hidden="true"></span>

## 隐私与费用

服务商可将付款请求与你提供的身份或付款方式关联。花费 CoinJoin 资金不会消除该记录，服务商也可实施自己的接受政策。Ginger 无法保证每个交易所接受每种交易历史。

比较报价支付金额、比特币金额、服务商显示费用及付款独立的矿工手续费。保留足够可花费价值支付后者。余额低、费率突升或币在 CoinJoin 关键阶段，可能阻止立即支付原本有效的订单。
