---
doc_id: "buy-sell.buy"
title: "通过 Ginger Wallet 买入比特币"
description: "在 Ginger 中比较服务商报价，在浏览器的服务商流程中完成购买，并跟踪比特币交付到钱包。"
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
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-purchase-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-purchasing-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-purchase"></span>
<span id="are-there-minimum-and-maximum-limits-for-purchases"></span>
<span id="can-i-view-my-past-purchases"></span>
<span id="what-happens-if-i-started-a-transaction-but-did-not-complete-it"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="how-do-i-choose-the-best-offer-for-my-purchase"></span>
<span id="are-there-additional-fees-when-purchasing-bitcoin"></span>
<span id="how-do-i-proceed-with-a-selected-offer"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

**Buy** 将你连接到第三方比特币购买报价。Ginger 提供钱包界面和收款地址；所选服务商处理付款、使用资格、身份检查和交付。使用非托管钱包不会让服务商购买匿名。

<span id="request-and-compare-offers" data-ginger-heading="请求并比较报价" aria-hidden="true"></span>

## 请求并比较报价

1. 打开应接收比特币的钱包，并完成恢复扫描。选择 **Buy**。即使钱包没有余额，该操作也可能可用，硬件钱包也包括在内。
2. 选择国家，按要求选择州或地区。可用性由服务决定，所以使用准确资料，不要认为国家选择只是货币偏好。
3. 在 **Buy Bitcoin** 中以所选货币输入购买金额。检查货币符号，以及实际报价显示的最低和最高限额。
4. 选择 **Continue** 查看 **Offers**。需要时按付款方式筛选。比较预计收到的比特币、法币总成本、费用、服务商和付款方式。
5. 对计划使用的报价选择 **Accept**。Ginger 使用所选钱包的收款地址创建订单，并在配置的浏览器中打开服务商页面。

报价和限额是实时服务信息，不是某个版本永久固定的功能。旧文章里的固定最高限额可能不再适用。位置显眼的报价不保证最适合你的情况。

<span id="complete-the-provider-steps" data-ginger-heading="完成服务商步骤" aria-hidden="true"></span>

## 完成服务商步骤

检查浏览器页面是否属于所选服务商。付款前阅读最终金额、汇率、收费、交付条款和身份要求。Ginger 显示的估算在订单最终确定前可能改变。

Ginger 报价提示说明显示的费用已包含在总报价中。检查服务商最终结账页面和付款机构条款中有无其他收费；不要认为钱包能保证所有银行或卡费用。

服务商收到购买目的地址和订单信息，可能将它们与你的付款工具或身份关联。即使报价标为无需上传证件，也不代表服务商不收集数据，或绝不会要求验证。该订单以实际结账政策为准。

不要为完成购买而发送助记词、私钥或钱包口令。服务商交付比特币只需要收款地址，不需要访问接收钱包。

<span id="track-the-result" data-ginger-heading="跟踪结果" aria-hidden="true"></span>

## 跟踪结果

打开 **Buy** → **Previous Orders** 查看订单状态。可用操作取决于状态。需要帮助时，使用 **Order Details** 记录服务商及 **Order ID**。

银行账户付款完成与比特币确认是不同事件。服务商发送交易后，让 Ginger 同步并检查钱包历史。核对收到金额和交易状态，不要只依赖浏览器成功页面。

如果订单被暂停、过期、失败或退款，参阅[订单状态与卖出](/zh-cn/using-ginger/sell/)。不要只因更新慢就再次购买；先确定原付款是否已收取。

<span id="browser-privacy" data-ginger-heading="浏览器隐私" aria-hidden="true"></span>

## 浏览器隐私

**Settings** → **General** → **Browser used by Ginger** 控制外部链接如何打开。浏览器有自己的 Cookie、IP 暴露和账户登录。Ginger 的 Tor 设置不会自动让普通浏览器私密。Tor 也无法隐藏你直接提交给服务商的身份详情。
