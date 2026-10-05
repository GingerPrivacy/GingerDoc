---
doc_id: "learn-coinjoin.when-to-use"
title: "什么时候适合使用 CoinJoin？"
description: "评估 CoinJoin 是否能应对你的比特币隐私需求、需要哪些成本，以及如何规划后续花费。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

减少交易关联信息能应对你实际关切时，CoinJoin 有用。主要问题若是助记词被盗、电脑被入侵或即将直接向服务商披露的信息，它的帮助较小。

<span id="start-with-a-concrete-objective" data-ginger-heading="从具体目标开始" aria-hidden="true"></span>

## 从具体目标开始

例如，希望未来收款人更难直接看到一笔以前已识别收款的历史。记录谁已知道该收款，以及下一笔付款会披露什么。CoinJoin 可改变中间的交易关联问题，但不能撤回第一次披露或阻止第二次披露。

如果目标只是持有比特币时保护密钥，可恢复备份和合适硬件钱包流程更直接。如果关心每张账单都重复同一公开收款地址，先停止重复使用；之后 CoinJoin 不会让旧收款私密。

<span id="compare-the-tradeoffs" data-ginger-heading="比较取舍" aria-hidden="true"></span>

## 比较取舍

| 情况 | 应考虑的决定 |
| --- | --- |
| 高矿工手续费时有许多小额币 | 参与可能消耗较大相对金额；检查费率条件并考虑等待 |
| 必须立即付款 | CoinJoin 完成没有排期；避免依赖轮次满足准确期限 |
| 从已识别来源长期花费 | 考虑 CoinJoin、独立收款地址及之后选币如何配合 |
| 服务商要求身份和地址证明 | 直接披露仍存在；检查 CoinJoin 是否改变你关心的信息 |
| 目的地是硬件钱包 | 验证收款账户和已发布的目的地流程；不要将硬件助记词导入热钱包 |
| 无法让电脑持续可用 | 自动参与需要轮次期间保持联网，并保持签名能力处于解锁状态 |

这些是取舍，不是建议转移某个金额，也不保证财务结果。使用可承受的小额学习流程，核对费用后再增加投入。

<span id="set-a-cost-and-attention-budget" data-ginger-heading="设置成本与注意力预算" aria-hidden="true"></span>

## 设置成本与注意力预算

检查两类费用，以及重复轮次如何运行。决定为目标隐私改善愿意花多少，以及多久检查结果。本地匿名目标是控制参数，不是费用报价，也不是对对手能力的可量化保证。

Ginger 停止阈值可防止部分不经济的自动参与。时间偏好和费率阈值可减少昂贵条件下的参与。这些设置不是多个轮次总花费的通用上限。

<span id="plan-the-next-spend" data-ginger-heading="规划下一次花费" aria-hidden="true"></span>

## 规划下一次花费

请求新目的地址，保留有用本地标签，检查选中输入。不要仅为钱包看起来简单，就习惯性合并所有产生的输出。商家或交易所若会知道你的身份，付款前了解该披露。

不要把其他服务商宣传的接受政策视为永久。服务可以改变政策或询问转账。Ginger 无法认证交易未来会被接受，也无法保证 CoinJoin 消除所有历史关联。

<span id="try-the-released-workflow-deliberately" data-ginger-heading="有意识地尝试已发布流程" aria-hidden="true"></span>

## 有意识地尝试已发布流程

目标、备份和成本明确后，打开已同步软件钱包，检查 **Coinjoin Settings**，并选择手动启动或 **Automatically start coinjoin**。观察状态，在历史中检查已完成轮次。行为或余额变化与预期不符时暂停，调查后再继续。

关于决定背后的假设，阅读 [CoinJoin 时你信任什么](/zh-cn/learn-coinjoin/trust-and-limits/)。它区分密钥控制、交易隐私、服务可用性，以及对所运行软件的信心。
