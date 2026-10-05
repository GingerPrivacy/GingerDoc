---
doc_id: "learn-coinjoin.explained"
title: "什么是 CoinJoin？简单说明"
description: "用通俗语言了解共享比特币交易如何帮助保护隐私、需要哪些费用，以及无法隐藏什么。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

CoinJoin 将多人的比特币活动放入同一笔共享交易。这可能让查看公开交易历史的人更难判断交易产生的币分别属于谁。

可以想象多人向一笔共享交易提供资金，并收到新的比特币。公众看得到金额流动，但可能不容易确定哪个人的资金变成了哪一份币。这只是示意：实际轮次金额不同，细节更复杂。

<span id="do-i-hand-my-bitcoin-to-someone-else" data-ginger-heading="需要把比特币交给别人吗" aria-hidden="true"></span>

## 需要把比特币交给别人吗？

Ginger 钱包保留用于批准花费的信息，并在签名前检查提议的交易。你不需要先将资金存入混币服务控制的余额。

仍然需要可信安装、受保护的电脑和恢复备份。组织轮次的服务也必须可用。掌握密钥不意味着其他所有问题都消失。

<span id="why-might-i-use-it" data-ginger-heading="为什么可能需要它" aria-hidden="true"></span>

## 为什么可能需要它？

你可能希望收款人少了解你的其他付款，或希望未来花费不再与先前公开过的地址直接关联。

CoinJoin 可以帮助减弱这些关联。它不能删除交易所的提现记录，也不能让商家忘记谁下了订单。区块链仍公开，后续付款也可能暴露新的关联。

<span id="what-will-it-cost" data-ginger-heading="需要多少费用" aria-hidden="true"></span>

## 需要多少费用？

成功的轮次支付比特币矿工手续费，也可能收取协调器费用。免除协调器费用不代表免除矿工手续费。多个轮次可能产生多次费用。

完成时间没有固定值。Ginger 可能等待确认、合适的手续费或其他参与者。查看状态、核对结果，再决定是否让重复参与无人值守运行。

<span id="do-i-need-it-before-my-first-payment" data-ginger-heading="第一笔付款之前必须使用它吗" aria-hidden="true"></span>

## 第一笔付款之前必须使用它吗？

不必。接收、发送和 CoinJoin 是独立操作。可以先学习普通付款，再决定想解决什么隐私问题。

为作出决定，阅读 [CoinJoin 何时有用](/zh-cn/learn-coinjoin/when-to-use/)。可选进阶阅读：[信任与局限](/zh-cn/learn-coinjoin/trust-and-limits/)，包括不同观察者能知道什么。使用常规启动和暂停控件，不需要先研究协议。
