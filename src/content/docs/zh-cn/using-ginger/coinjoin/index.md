---
doc_id: "coinjoin.use-coinjoin"
title: "在 Ginger Wallet 中使用 CoinJoin"
description: "启动、暂停并监控 Ginger CoinJoin，了解符合条件的资金，避免中断正在进行的轮次。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> 阅读级别：入门。先介绍必要步骤；进阶参考资料可按需继续阅读。

CoinJoin 与其他参与者一起创建比特币交易，使输入与输出之间的关系更难推断。Ginger 只为你的钱包输入签名；你无需向协调器控制的账户存款。成功轮次仍需要费用，也不保证匿名。

<span id="before-starting" data-ginger-heading="开始之前" aria-hidden="true"></span>

## 开始之前

打开已备份的软件钱包，等待同步。准备已确认比特币，保持电脑联网，开始前检查预计成本。成功轮次有矿工手续费，也可能有协调器费用；重复轮次会增加成本。可选的[进阶成本参考](/zh-cn/using-ginger/annonset/)说明计算方式。硬件钱包可以普通收发，但不能作为 Ginger 自动 CoinJoin 流程的签名来源。

协调器费用按轮次中作为输入的每个币检查。价值 0.03 BTC（3 000 000 聪）或更低的币不支付协调器费用。较大币通常按完整价值收取 0.3%，但符合条件的再次参与也可豁免。即使协调器费用为零，仍有矿工手续费。

钱包需要已确认、可用的资金和合适轮次条件。没有任何余额或等待时间保证立即开始。更改设置前先查看当前状态。

<span id="start-and-pause" data-ginger-heading="启动与暂停" aria-hidden="true"></span>

## 启动与暂停

1. 从 CoinJoin 控制面板菜单打开 **Coinjoin Settings**，或在钱包已打开时通过 Ginger 搜索找到它。
2. 检查钱包成本偏好，常规流程将输出目的地保留为本钱包。自定义目标和输出路由见可选进阶设置指南。
3. 希望在条件允许时无人值守参与，可启用 **Automatically start coinjoin**。手动启动使用控制面板启动控件。停止的控制面板可能显示 **Press Play to start**。
4. 观察控制面板下方状态。钱包可能等待确认、适合轮次或更低手续费后才参与。
5. 想停止后续参与时，使用暂停控件。让关键交易阶段完成。关闭自动启动改变未来行为，不会撤销已广播交易。

不要向自称可“激活” CoinJoin 的人提供的地址发送比特币。不存在支付给客服人员的独立激活费用。

<span id="read-the-status" data-ginger-heading="阅读状态" aria-hidden="true"></span>

## 阅读状态

| 消息 | 含义与下一步 |
| --- | --- |
| **Awaiting auto-start of coinjoin** | 正在进行自动启动延时。保持钱包打开。 |
| **Awaiting confirmed funds** | 等待符合条件的入账资金确认。 |
| **Awaiting cheaper coinjoins** | 成本偏好让钱包暂不加入当前轮次。放宽限制前检查设置。 |
| **Skipping a round for better privacy** | 随机跳过已启用。这不是连接故障。 |
| **Awaiting other participants** | 正在注册。其他参与者也需要完成各自步骤。 |
| **Awaiting the blame round** | 上次尝试未完成；协议正与符合条件的参与者重试。不是要求你识别谁。 |
| **Insufficient participants, retrying...** | 参与者数量未达到要求。等待下一轮。 |
| **Awaiting closure of send dialog** | 先完成或关闭付款流程，再等待 CoinJoin 恢复。 |
| **Coinjoin may be uneconomical** | 停止阈值正在起作用。增加资金或手动覆盖阈值是有成本的选择，不是必须的修复。 |
| **Coinjoin successful! Continuing...** | 一轮成功。钱包仍有待处理资金时，可能继续下一轮。 |

遇到拒绝、连接或资格消息，保留准确错误文本。等待状态通常不需要重装 Ginger 或生成新助记词。

<span id="keep-the-wallet-available" data-ginger-heading="保持钱包可用" aria-hidden="true"></span>

## 保持钱包可用

参与时，钱包需要可用密钥。受口令保护的软件钱包必须先打开才能签名。双因素认证保护启动，不会要求身份验证器批准每个轮次。

休眠、断网或强制关机可能中断轮次。如果交易已广播，关闭应用不会撤销它。重新打开 Ginger，完成同步并检查历史，再判断是否失败或重复操作。切勿仅因应用在第一笔付款时关闭，就发送第二笔付款。

根据常规设置，窗口关闭时 Ginger 可能继续后台运行。需要完全停止时，使用正常退出操作，并让关键阶段完成。

<span id="spend-after-coinjoin" data-ginger-heading="coinjoin-后花费" aria-hidden="true"></span>

## CoinJoin 后花费

产生的币可用后，可像其他比特币一样花费。CoinJoin 交易仍公开。合并无关的私密与非私密币、复用地址或向已获知你身份的服务披露交易，都可能建立新关联。付款时检查选中币和找零；以前参与过 CoinJoin 不会让所有后续操作都私密。

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="无须管理协议" aria-hidden="true"></span>

## 无须管理协议

Ginger 处理注册、签名与重试。如果基本状态检查不能解释所见情况，使用可选进阶参考：[轮次细节](/zh-cn/coinjoin/round-details/)、[自定义设置](/zh-cn/coinjoin/settings/)和[费用与隐私进展](/zh-cn/using-ginger/annonset/)。
