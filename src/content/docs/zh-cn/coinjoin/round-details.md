---
doc_id: "coinjoin.round-details"
title: "CoinJoin 轮次与输入资格"
description: "当常规启动、暂停和等待状态检查无法解释结果时，了解 Ginger CoinJoin 阶段、输入资格与重试行为。"
lang: "zh-CN"
verified_release: "v2.0.27"
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
| 必要时的归责轮次| 重试使用上一笔交易中符合条件的参与者，并执行额外的一致性检查。 |
| 广播 | 完成的交易提交给比特币节点，然后等待确认。 |

这些阶段由应用管理；不需要交换密钥或与陌生人手动协调。接受的输入和产生的输出数量由轮次及选币决定。不能为每个钱包预期固定输入或输出数量，钱包总余额也不保证能全部加入同一轮次。

<span id="why-signing-can-stop-a-round" data-ginger-heading="为什么签名可能导致轮次停止" aria-hidden="true"></span>

## 为什么签名可能导致轮次停止

完成签名前，Ginger 会检查实际提议的交易，包括以下事项：

- 此钱包注册的所有输入是否仍然存在，且没有任何一个输入重复出现。
- 交易是否包含足够的输入；除非配置允许单独进行 CoinJoin，否则还必须包含此钱包注册范围以外的输入。
- 实际矿工手续费率是否与轮次公布的费率足够接近，并允许估算差异。
- 承诺给钱包的输出是否存在，且金额不低于预期。

所提供轮次的参与者或手续费设置，不能替代对交易本身的这些检查。尤其是，即使从钱包中扣除的金额看起来可以接受，远低于公布费率的手续费率仍可能无法通过签名检查。输入数量表示币的数量，不能证明存在相应数量的独立参与者；参阅 [CoinJoin 信任与限制](/zh-cn/learn-coinjoin/trust-and-limits/)。

如果检查失败，Ginger 不会完成其输入的全部签名。当提议中仍有部分已注册的钱包输入时，它会保留其中一个实际存在的输入的签名，不予提交。这一点很重要，因为不提供一个已被移除的输入的签名，无法阻止提议的交易。如果钱包的输入一个也没剩下，则不会发送任何签名。包含重复的已注册钱包输入的提议会被直接拒绝。

因此，轮次即使已进入签名阶段，仍可能失败或重试。请保持 Ginger 可用，直至退出关键阶段，并在对这些币执行其他操作前检查结果状态。不要仅为让被拒绝的轮次继续而修改不了解的限制。

<span id="checks-on-blame-rounds" data-ginger-heading="对归责轮次的检查" aria-hidden="true"></span>

## 对归责轮次的检查

轮次中断时，Ginger 只会将已经提交过签名的自有币带入后续轮次。归责轮次必须使用上一笔交易的输入，并保持相同的建议输入金额上限。Ginger 会在注册输出前检查这种关联，同时检查归责轮次的阶段、最低输入数量和手续费限制。

这些检查限制了重试过程中可以发生的变化。它们不能保证归责轮次完成，不能确定其他输入由谁控制，也不能将轮次失败变成遭受攻击的证据。

<span id="inspect-a-completed-round" data-ginger-heading="检查已完成的轮次" aria-hidden="true"></span>

## 检查已完成的轮次

展开历史中分组显示的 CoinJoin 条目，打开单个轮次的详情。选择 **View transaction**，在可调整大小的交易查看器中检查输入和输出。查看器会在信息可用时显示归属、标签和已知匿名分数；未知值不能确定其他参与者的币由谁持有。可用详情与复制操作请参阅[交易查看器指南](/zh-cn/payments/coin-control-history/#inspect-inputs-and-outputs)。

<span id="private-coins-and-another-output-wallet" data-ginger-heading="私密币与另一个输出钱包" aria-hidden="true"></span>

## 私密币与另一个输出钱包

正常启动会拒绝其币已达到隐私目标的钱包或可用候选集合。选择另一个输出钱包并不能强制进行仅使用私密币的轮次。在依赖转发流程前，检查[输出钱包设置](/zh-cn/coinjoin/settings/)。

关于评分计算与完整价值核对，参阅[费用与隐私进展](/zh-cn/using-ginger/annonset/)。
