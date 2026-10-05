---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "通过 Ginger 从交易所转入冷存储"
description: "提取比特币，使用 Ginger CoinJoin，并在核算费用和保护隐私的同时，将资金转入已验证硬件钱包。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先建立已验证硬件钱包及其独立备份。

在硬件钱包存储之前，Ginger 可帮助将未来比特币活动与交易所提现分离。交易所保留提现记录。硬件钱包保护签名密钥；交易和日后花费仍决定别人能推断什么。

有两条不同路径。开始前选择，以便知道输出应出现在哪里。

| 路径 | 发生什么 | 主要考虑 |
| --- | --- | --- |
| 在软件钱包 CoinJoin，然后普通转账 | 输出留在 Ginger 软件钱包，直到选币并发送到硬件 | 可以先检查隐私；之后每次转账有手续费，并暴露输入输出关系 |
| 直接在硬件钱包接收 CoinJoin 输出 | 符合条件的软件钱包签署 CoinJoin；输出发往已加载硬件钱包 | 避免这些输出的单独转账，但一轮后它们离开源钱包，不保证达到你的目标 |

<span id="prepare-both-wallets" data-ginger-heading="准备两个钱包" aria-hidden="true"></span>

## 准备两个钱包

1. 使用已验证的 Ginger 安装。创建软件钱包，备份助记词和原始口令。只在此钱包保留计划处理的金额。
2. 按厂商支持流程初始化并备份硬件钱包。[连接到 Ginger](/zh-cn/using-ginger/hardware-wallet/)，等待同步。
3. 在硬件钱包选择 **Receive**，可用时使用 **Show on the hardware wallet**。比较设备与电脑完整收款地址。依赖新配置处理较大金额前，完成小额收款与签名测试。
4. 给钱包不同名称，以识别源和目的地。每个都保留可恢复备份；软件钱包备份不能恢复密钥不同的硬件钱包。

切勿为让 CoinJoin 工作，就把硬件助记词输入 Ginger。这会给桌面电脑访问硬件签名密钥的权限。

<span id="withdraw-from-the-exchange" data-ginger-heading="从交易所提现" aria-hidden="true"></span>

## 从交易所提现

在软件钱包选择 **Receive**，添加有用标签并创建新地址。复制到交易所比特币提现流程，在交易所授权前核对完整地址和网络。Ginger 使用比特币链上交易；闪电网络发票或其他资产网络不能替代。

单独记录交易所提现费用。Ginger 到账金额可能低于交易所扣除金额。等待钱包同步及收到资金确认，再期待 CoinJoin 参与。交易 ID 有助核对，但避免公布或反复在公开区块浏览器搜索。

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="路径-a检查-coinjoin-结果后转账" aria-hidden="true"></span>

## 路径 A：检查 CoinJoin 结果后转账

1. 在源钱包 **Coinjoin Settings** 中，将 **Coinjoin to this wallet** 保留为源钱包。用启动控件参与前，检查目标、手续费偏好及排除币。
2. 监控已完成轮次和币隐私信息。可以暂停检查费用与进度。关键阶段让 Ginger 完成必要操作，不要终止应用。
3. 取得新硬件收款地址，在设备验证。在软件钱包选择 **Send** → **Manual Control**，选择计划移动的资金。
4. 核对实际选中输入、目的地址、收款金额、找零和手续费。仅在符合意图时确认。
5. 检查硬件钱包已同步历史及源钱包剩余币。等待转账确认，再认为完成。

一起发送每个输出会形成可见关联。分开移动单币避免该特定多输入关联，但产生额外费用，且每次仍有可见转账。金额、时间和观察者掌握的信息可能提供其他联系。选择可管理的计划，不要认为任一方式保证匿名。

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="路径-b选择硬件作为-coinjoin-目的地" aria-hidden="true"></span>

## 路径 B：选择硬件作为 CoinJoin 目的地

软件钱包仍有符合 CoinJoin 条件的资金时使用此路径。正常 v2.0.26 流程在钱包或全部可用候选币已达到目标、被视为私密时拒绝参与。另选目的地不能绕过。尤其是排除所有非私密币，不是强制仅包含已完成币的额外轮次的可靠方法。对此类资金使用路径 A，不要只为绕过停止条件而更改目标。

1. 在 Ginger 加载并验证硬件钱包。停止源钱包 CoinJoin 参与，等待目的地选择器可用。
2. 打开源钱包 **Coinjoin Settings**。将 **Coinjoin to this wallet** 设置为目标硬件钱包。只选择 Ginger 提供的目的地。
3. 查看 **Exclude Coins**，排除必须不参与 CoinJoin 的资金。排除针对具体币，不会保留同一来源的全部未来收款。
4. 再次核对目的地并开始参与。完成轮次期间保持应用运行。
5. 成功后检查两个钱包。只花费选中输入，产生的输出可能分成多个币。源钱包仍有余额不一定表示失败。

目的地接收已完成轮次的输出；该设置不会等到单独的达成目标事件再转送。检查结果隐私信息。本版本普通硬件钱包流程无法让硬件持有资金之后提供 CoinJoin 输入。

Ginger 重启后目的地选择重置。每次会话前重新检查。参与进行时不能更改；交易签署后改变设置不能重定向该交易。明确检查自动参与设置，不要假设有永久后台转账安排。

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="核对余额并规划下一次花费" aria-hidden="true"></span>

## 核对余额并规划下一次花费

比较源钱包减少金额、硬件收到的输出及源钱包剩余资金。差额可能包含 CoinJoin 成本。目标钱包收到资金时，源余额为零不代表丢失。反之，成功轮次不意味着每个源币都移动或达到目标。

以后从硬件花费时，再检查选币。无论签名密钥存在哪里，合并无关币都可能透露关联。使用新收款人地址、检查找零并在设备确认付款。[PSBT 流程](/zh-cn/hardware-wallets/psbt/)为合适硬件提供受支持文件签名路径，不改变所签交易的隐私后果。

怀疑签名密钥已泄露时，保护剩余资金优先于等待隐私流程。新设备装入相同已暴露种子，不会使该种子失效。
