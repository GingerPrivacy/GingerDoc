---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "CoinJoin 后花费：实例说明"
description: "通过实际比特币付款示例，理解选币、找零、合并以及 CoinJoin 后可能暴露的信息。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先理解新收款地址和常规付款核对。

CoinJoin 改变输入输出关联的不确定性。下一笔交易可增加新信息。付款前，判断收款人或其他观察者已经能将哪些币与你联系，以及提议付款会透露什么。

下面例子使用虚构的聪数金额。手续费为方便算术设定，不是网络报价。一个币是一个未花费交易输出，即 UTXO；不等于钱包或比特币地址。

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="从实际要付的款开始" aria-hidden="true"></span>

## 从实际要付的款开始

在 Ginger 打开 **Wallet Coins** 查看金额、标签和隐私信息。普通付款中，**Send** → **Manual Control** 可选择候选币。选择候选币不能替代最终交易检查：**Confirm** 前核对实际使用的输入、发送金额、找零和手续费。

自动选币和 Ginger 建议也有帮助。知道钱包不知道的背景时，手动控制有用，例如哪个客户已经认识某笔收款。它并非每笔付款天然更好的选择。

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="示例-1一个币足以支付购买" aria-hidden="true"></span>

## 示例 1：一个币足以支付购买

Alex 有一个 CoinJoin 产生的 120 000 聪币，想支付 70 000 聪。假设手续费 1 000 聪。

| 交易部分 | 金额 |
| --- | --- |
| 花费的输入 | 120 000 聪 |
| 商家收到 | 70 000 聪 |
| 返回 Alex 的找零 | 49 000 聪 |
| 矿工手续费 | 1 000 聪 |

商家知道自己的付款地址和金额，可以查看交易，可能推断另一个输出是 Alex 找零。商家不能仅从该交易得知 Alex 全部钱包余额，但能看见输入，并可能跟踪疑似找零的后续花费。

Alex 无须手动转回找零：它已属于钱包。有用的检查点是下一次涉及该找零的付款。

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="示例-2两笔无关收款被合并" aria-hidden="true"></span>

## 示例 2：两笔无关收款被合并

Blair 有一个与自由职业收入关联的 90 000 聪币，及一个与公开捐款地址关联的 80 000 聪币。支付 150 000 聪加 2 000 聪手续费，超出任一单币价值；同时使用两者会返回 18 000 聪找零。

普通共同花费可能暗示两个输入同属一人。已经认出捐款币的人，可能得到自由职业币的新线索。这是基于交易和其他知识的推断，不是自动证明个人身份。

如果 Blair 有另一个足够且已与同类活动关联的币，可能透露更少新信息。如果完成必要付款的唯一实际办法是使用两个输入，这就是成本与隐私决定。不要少付账单，也不要把“绝不合并币”当成绝对规则。

CoinJoin 与 PayJoin 本身涉及协作，因此所有输入属于同一人的假设并非普遍有效。解释交易时保留此区别。

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="示例-3找零延续关联" aria-hidden="true"></span>

## 示例 3：找零延续关联

Alex 之后将示例 1 的 49 000 聪找零，与无关的 60 000 聪币合并支付 100 000 聪。假设手续费 1 000 聪，将返回 8 000 聪新找零。

第一位商家可以观察疑似找零输出与 60 000 聪输入一起花费。即使新收款地址是新的，输入侧关联仍存在。新输出地址不能撤销同时花费两个输入的选择。

用标签保留背景，供未来决定。标签是本地笔记；不会在区块链公布姓名，也不会阻止观察者推断。

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="示例-4将全部余额移到硬件" aria-hidden="true"></span>

## 示例 4：将全部余额移到硬件

Casey 有四个币，每个 200 000 聪。全部发往一个硬件收款地址，会在同一交易花费 800 000 聪输入。假设手续费 2 000 聪，硬件钱包收到 798 000 聪。

硬件钱包改善密钥隔离，但转账暴露四个输入共同花费。分开转账可避免这一特定关联，同时增加费用和其他可观察的时间/金额模式。在符合条件的 CoinJoin 中直接将输出接收到硬件钱包，可避免后续转账，但有特定版本资格和目的地检查；不是让硬件持有币普遍再次参与 CoinJoin 的方法。

不要只因币列表不整齐就花费整个余额。合并可能减少未来输入数量，但低费率仅改变成本，不会消除披露。

<span id="other-participants-and-future-observations-matter" data-ginger-heading="其他参与者与未来观察也重要" aria-hidden="true"></span>

## 其他参与者与未来观察也重要

影响不只来自你的行为。其他参与者之后的交易，也可能缩小观察者考虑的范围。CoinJoin 后合并研究考察这一影响，同时承认将这些观察转化为可采取行动的身份识别时的局限。其测量不是某个具体用户被追踪的概率。[Gavenda 等，2025](https://arxiv.org/html/2510.17284v1)

没有保证隐私的通用轮次数或等待期。等待不会抹去已经向实名商家、交易所或其他钱包服务披露的信息。

<span id="a-short-review-before-confirming" data-ginger-heading="确认前简短检查" aria-hidden="true"></span>

## 确认前简短检查

1. 通过可信渠道确认收款人和所需金额。
2. 查看最终输入，考虑谁已知道每个输入。
3. 检查选择是否合并原本打算分开的活动。
4. 检查找零，以后花费时记住关联。
5. 只接受适合该付款的费用和隐私取舍；结果不确定时，重复付款前检查历史。

周边钱包与浏览器选择，继续阅读[隐私习惯](/zh-cn/using-ginger/address-reuse/)和[钱包信息流向何处](/zh-cn/learn-privacy/information-sharing/)。
