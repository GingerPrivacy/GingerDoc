---
doc_id: "settings-network.tor-sync"
title: "Tor、同步与网络隐私"
description: "了解 Ginger 如何连接、Tor 保护什么，以及如何调查缓慢同步而不暴露钱包活动。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

Ginger 需要网络数据来发现交易、广播付款和参与 CoinJoin。Tor 内置且默认用于常规网络连接。它帮助将你的 IP 地址与联系的服务分隔，但不会隐藏公开比特币金额和交易。

<span id="tor-settings" data-ginger-heading="tor-设置" aria-hidden="true"></span>

## Tor 设置

打开 **Settings** → **Security**，找到 **Network anonymization (Tor)**。日常私密使用时保持开启。按提示重启，使运行中的网络配置符合设置。Ginger 的 2FA 功能需要 Tor，启用 2FA 时界面限制关闭 Tor。

**Terminate Tor when Ginger shuts down** 控制 Tor 退出行为。钱包窗口关闭后，Tor 进程可能继续存在，因为钱包仍在后台运行，或未配置终止 Tor。关闭窗口与退出应用是不同操作。

关闭 Tor 会改变对联系的服务和对等节点暴露的信息，不是无害的性能开关。尤其是连接协调器或交易广播节点时，可能与你的网络地址关联。不要把关闭 Tor 作为等待 CoinJoin 的常规处理。

Ginger 使用 Tor 也不会将外部浏览器变为 Tor Browser。服务商页面、区块浏览器及其他链接使用配置的浏览器。认为其请求继承钱包网络保护之前，另行检查该浏览器。

<span id="what-synchronization-does" data-ginger-heading="同步做什么" aria-hidden="true"></span>

## 同步做什么

Ginger 使用紧凑区块过滤器查找可能相关的区块，并在本地处理下载的区块数据。这减少了向公开钱包服务器发送全部地址列表的需要，但仍依赖网络服务和节点提供数据，以及本地软件的正确性。

首次使用和恢复可能比重新打开近期使用的钱包耗时更长。进度包括连接、获取过滤器、下载区块和处理钱包。恢复钱包可能暂时显示不完整历史，或在扫描完成前隐藏操作。

运行全节点和同步钱包是两项工作。可选全节点验证区块链，钱包之后仍需查找自己的交易。全节点显示同步完成，不一定意味着新恢复钱包完成扫描。

<span id="when-synchronization-appears-stuck" data-ginger-heading="同步看起来卡住时" aria-hidden="true"></span>

## 同步看起来卡住时

1. 检查准确状态，以及是否随时间变化。大型恢复扫描与 **Awaiting connection** 不同。
2. 确认电脑可联网、日期时间正确、磁盘有空间。检查 Ginger 是否有写入数据权限。
3. 配置全节点时，检查是否可访问及同步完成。重新检查配置的端点，不要更改钱包凭证。
4. 如果连接仍卡住，正常关闭并重新打开 Ginger 一次。故障重现时保留错误文本和日志背景。

网络封锁 Tor 时，参阅 [Tor Project 连接指南](https://support.torproject.org/)。已发布 Ginger 设置没有文档描述的网桥配置向导。不要把 Tor Browser 设置复制到任意 Ginger 配置字段，就认为会生效。

仅在有理由重建钱包视图时，使用 **Wallet Settings** → **Tools** → **Resync**。先保留备份，再让新扫描完成。删除数据文件夹不是首要排障步骤。

<span id="separate-network-choice-from-real-funds" data-ginger-heading="区分网络选择与真实资金" aria-hidden="true"></span>

## 区分网络选择与真实资金

已发布的 **Settings** → **Bitcoin** 网络选择器提供 Main 和 RegTest。RegTest 用于隔离测试环境，没有真实比特币价值；本手册不涵盖运行该环境。此版本在该界面没有公开测试网选择。切换网络不会在网络之间移动资金。
