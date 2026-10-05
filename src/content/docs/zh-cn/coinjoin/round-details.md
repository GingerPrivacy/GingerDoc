---
doc_id: "coinjoin.round-details"
title: "CoinJoin 轮次与输入资格"
description: "当常规启动、暂停和等待状态检查无法解释结果时，了解 Ginger CoinJoin 阶段、输入资格与重试行为。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先了解常规启动和暂停控件，以及完成轮次会产生费用这一事实。

从[常规 CoinJoin 指南](/zh-cn/using-ginger/coinjoin/)开始。Ginger 自动管理协议；本参考用于理解具体状态或限制。

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="为什么余额可能不符合资格" aria-hidden="true"></span>

## 为什么余额可能不符合资格

没有保证参与的固定等待时间或通用最低余额。资格取决于轮次参数、币的金额、确认状态、手续费、排除项和钱包设置。即使余额大于最小输入金额，也可能没有经济上适合且符合条件的币。

<span id="what-happens-during-a-round" data-ginger-heading="轮次中发生什么" aria-hidden="true"></span>

## 轮次中发生什么

| 阶段 | 钱包在等待什么 |
| --- | --- |
| 输入注册 | 为共享交易提出符合条件的币。 |
| 连接确认 | 已注册参与者确认仍可参与。 |
| 输出注册 | 参与者通过协议安排应收到的输出。 |
| 签名 | 钱包检查提议并签署自己的输入。关键阶段保持 Ginger 可用。 |
| 必要时的归责轮次 | 重试会排除未完成必要步骤的参与者。 |
| 广播 | 完成的交易提交给比特币节点，然后等待确认。 |

这些阶段由应用管理；不需要交换密钥或与陌生人手动协调。接受的输入和产生的输出数量由轮次及选币决定。不能为每个钱包预期固定输入或输出数量，钱包总余额也不保证能全部加入同一轮次。

<span id="private-coins-and-another-output-wallet" data-ginger-heading="私密币与另一个输出钱包" aria-hidden="true"></span>

## 私密币与另一个输出钱包

v2.0.26 的正常启动会拒绝币已经达到隐私目标的钱包或可用候选币集合。选择另一个输出钱包不会强制仅含私密币的轮次开始。依赖资金转送流程前，检查[输出钱包设置](/zh-cn/coinjoin/settings/)。

关于评分计算与完整价值核对，参阅[费用与隐私进展](/zh-cn/using-ginger/annonset/)。
