---
doc_id: "coinjoin.settings"
title: "配置 CoinJoin 与输出钱包"
description: "了解 Ginger CoinJoin 隐私与成本设置、排除的币，以及将 CoinJoin 输出发送到另一个已加载钱包。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先了解常规启动和暂停控件，以及完成轮次会产生费用这一事实。

**Coinjoin Settings** 应用于所选钱包。每次更改一个设置，并观察效果。更激进的设置可能增加费用或等待时间，却不改善与你情况有关的隐私。

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="自动参与与成本偏好" aria-hidden="true"></span>

## 自动参与与成本偏好

| 设置 | 控制内容 |
| --- | --- |
| **Automatically start coinjoin** | 钱包和适合资金可用时启动参与。 |
| **Stop coinjoin threshold** | 钱包余额低于所选 BTC 金额时停止自动 CoinJoin。这是钱包级停止规则，不设置协调器费用豁免阈值或最小可接受输入。 |
| **Coinjoin time preference** | 将当前矿工手续费与所选期间的中位数比较。影响参与时机，不是承诺的完成期限。 |
| **Ignore coinjoin time preference below** | 费率低于此阈值时，即使时间偏好比较原本要求等待，也允许参与。 |
| **Random Skip** | 选择跳过适合轮次的频率。选项为 **Disabled**、**Rarely**、**Sometimes** 和 **Often**。更多跳过通常意味着更久等待。 |

控制面板报告余额不经济时，按启动按钮可以绕过停止阈值。这不会免除交易手续费。绕过该阈值前，考虑可用币的金额和预计成本。

<span id="privacy-settings" data-ginger-heading="隐私设置" aria-hidden="true"></span>

## 隐私设置

**Anonymity score target** 是 Ginger 将币视为私密所需的最低内部评分。已发布编辑器接受 2 到 1000 的整数。提高目标可能增加 CoinJoin 活动，但不保证恰好有那么多独立的人可能拥有该币。

**Single non-private coin restriction** 只允许一次注册包含一个匿名评分为 1 的币。这可以减少同时注册多个以前非私密币造成的直接关联，也可能减慢含许多此类币的钱包的进展。

降低目标可以立刻改变界面认定为私密的资金，却不改变区块链。应将隐私指示视为估计和策略设置，而不是外部观察者已失去所有信息的证据。

<span id="exclude-specific-coins" data-ginger-heading="排除特定币" aria-hidden="true"></span>

## 排除特定币

从 CoinJoin 控制面板菜单打开 **Exclude Coins**。检查币列表，标记要排除出 CoinJoin 的币。再次进入列表可恢复其资格。排除只针对那些币，不是针对将来发往同一地址的所有付款的永久规则。

排除 CoinJoin 不会锁住普通花费，也不能替代硬件存储。如果所有可用币都被排除，控制面板可能显示 **Only excluded funds are available**。更改手续费或隐私设置前，检查此列表。

<span id="receive-outputs-in-another-wallet" data-ginger-heading="在另一个钱包接收输出" aria-hidden="true"></span>

## 在另一个钱包接收输出

**Coinjoin to this wallet** 选择源钱包 CoinJoin 输出接收到哪里。默认是源钱包自己。

1. 在 Ginger 中加载目标钱包。备份它，确认你控制其收款地址。
2. 没有 CoinJoin 进行时，打开源钱包的 **Coinjoin Settings**，在 **Coinjoin to this wallet** 中选择目的钱包。
3. 启动前核对所选名称。只有已加载且符合条件的钱包会出现；不要认为只列在磁盘上的钱包就已加载。
4. 交易成功后，检查目的钱包已同步的历史，以及源钱包余额。

正在 CoinJoin 时不能更改目的地。**Ginger 重启后，此选择会重置**，因此每次目的地重要的会话都重新检查。避免让两个钱包互相接收对方的 CoinJoin 输出；可选项会限制循环安排。

已发布的目的地选择可以包含已加载硬件钱包。源钱包仍是签署 CoinJoin 的软件钱包；硬件目的地不会让源钱包变成冷钱包，也不会让硬件钱包本身运行 CoinJoin。仅使用应用实际提供的目的地，并在依赖此路径前验证备份和地址控制权。

<span id="experimental-coin-selection" data-ginger-heading="实验性选币" aria-hidden="true"></span>

## 实验性选币

本版本提供 **(EXPERIMENTAL) Improved Coin Selection**。其配置是进阶调整界面，不是参与 CoinJoin 的前提。可用控件如下：

| 控件 | 预期效果 |
| --- | --- |
| **Force to use low privacy coins** | 要求选择包含最低隐私组的一个币。 |
| **Can select already private coins** | 允许选择器使用已超过隐私目标的币。这种参与仍可能产生矿工手续费。 |
| **Coin privacy difference normalization for score calculation** | 较低值倾向选择隐私评分更接近的币。 |
| **Amount loss normalization for score calculation** | 较低值倾向选择相对金额损失较低的组合。 |
| **Target coin number per wallet bucket** | 影响从数量过多的币金额分组中选择。 |
| **Use the Old Coin Selector for fallback** | 比较新旧选币结果并在两者之间选择。 |

除非理解正在改变的取舍，否则保留初始值。这些是选择偏好，不是准确的总费用上限，也不承诺轮次产生的输出数量。

<span id="when-another-round-cannot-start" data-ginger-heading="无法开始下一轮时" aria-hidden="true"></span>

## 无法开始下一轮时

本版本的正常 CoinJoin 启动会拒绝资金已达到隐私目标的钱包，也会拒绝只由私密币构成的可用选择。选择不同输出钱包不会绕过此规则。所有资金私密时，控制面板可能隐藏手动启动控件。不要依赖排除所有非私密币后强制一轮，以仅转送剩余私密币。

开始符合条件的参与前选择目的地，或考虑普通转移已私密资金。仅为使轮次开始而降低隐私要求或加入无关资金，可能改变隐私结果和成本。
