---
doc_id: "settings-network.full-node-fees"
title: "使用自己的比特币节点与选择手续费估算"
description: "配置 Ginger 从自己控制的节点下载区块，了解可选的内置 Bitcoin Core 功能，并选择手续费率提供商。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> 阅读级别：进阶指南。先检查常规连接和同步状态。

使用自己的比特币节点，可减少区块数据对公开对等节点的依赖。它也增加存储、带宽、可用性和维护责任。不启用可选全节点也可以使用 Ginger。

<span id="start-the-bundled-node" data-ginger-heading="启动内置节点" aria-hidden="true"></span>

## 启动内置节点

在 **Settings** → **Bitcoin** 中，开关名称为 **(EXPERIMENTAL) Run Bitcoin Core on startup**。2.0.26 版本内置 Bitcoin Core 31。使用与该内置节点及已安装版本对应的说明。

1. 选择空间充足、存储可靠的 **Bitcoin Core Data Folder**。不要指向无关文件夹，也不要允许两个节点进程同时管理同一目录。
2. 启用 **(EXPERIMENTAL) Run Bitcoin Core on startup**，按提示重启 Ginger。
3. 让节点进行初次同步。观察连接和下载状态；首次同步可能很久。
4. 根据是否希望 Ginger 退出后节点继续运行，设置 **Stop Bitcoin Core on shutdown**。

不要只为修复未显示的钱包余额就启用此开关。节点无法恢复未知口令或还原标签。现有节点目录可能包含重要配置和它自己的钱包；更改管理它的应用前，保留备份。

全节点可在本地验证区块，但不会消除 Ginger 对协调器、2FA、买卖或其他服务的依赖，也不会隐藏你主动向交易所披露的交易。

<span id="connect-to-an-existing-node" data-ginger-heading="连接现有节点" aria-hidden="true"></span>

## 连接现有节点

关闭内置启动开关后，**Bitcoin P2P Endpoint** 可指定自己控制的节点用于下载区块。输入可访问的主机和 P2P 端口。同一电脑上的主网 Bitcoin Core 节点通常使用 `127.0.0.1:8333`，前提是节点确实监听该地址。此字段接受比特币对等节点端点，不是区块浏览器 URL 或 RPC 凭证。

确保节点允许钱包连接，并拥有所需区块数据。修剪节点可能不保留恢复钱包需要的旧区块。如果历史扫描卡住，检查数据可用性，不要假定所有节点配置都可互换。

远程节点连接有自己的网络暴露风险。使用自己理解的节点和传输方式；仅设置端点不能证明所有连接都保护隐私。不要为使钱包连接可用而向公共互联网开放管理 RPC 访问。

<span id="choose-fee-estimates-separately" data-ginger-heading="单独选择手续费估算" aria-hidden="true"></span>

## 单独选择手续费估算

**Fee Rate Provider** 提供 **Mempool Space**、**Blockstream Info** 和 **Full Node**。公开提供商根据各自观察的网络状况提供估算。全节点选项需要 Ginger 的节点/RPC 集成正常工作；仅输入 P2P 端点不能证明 RPC 费率估算已配置。

选择 **Full Node** 但节点不可用时，v2.0.26 报告手续费估算不可用，付款流程仍允许手动输入。可以等待节点、选择正常工作的估算提供商，或输入有依据的费率。不要把极高手续费当作通用连接修复方法。

手续费估算是预测，不是预留区块空间。提供商之间的差异可能来自不同内存池观察。既检查显示费率，也检查交易总手续费。

<span id="dust-threshold" data-ginger-heading="粉尘阈值" aria-hidden="true"></span>

## 粉尘阈值

同在 **Settings** → **Bitcoin** 下的 **Dust Threshold**，控制钱包如何处理极小入账金额。它与网络中继策略、CoinJoin 停止阈值及协调器最小输入金额不同。提高它可能影响钱包处理哪些小额付款；不会删除链上输出，也不会阻止他人发送。调查意外缺失的小额付款时，保留以前的设置。
