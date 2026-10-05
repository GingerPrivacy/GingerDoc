---
doc_id: "settings-network.preferences"
title: "外观、语言与日常设置"
description: "更改 Ginger 语言、显示格式、后台行为、浏览器偏好和隐蔽模式，并区分这些设置与钱包安全。"
lang: "zh-CN"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> 阅读级别：日常使用。需要完成本指南所述任务时，选择此页。

应用全局偏好使用 **Settings**；所选钱包的名称、CoinJoin 配置和工具使用 **Wallet Settings**。应用搜索可查找 **Data Folder**、**Wallet Info** 和 **Discreet Mode** 等操作，无须依赖图标位置。

<span id="language-and-amounts" data-ginger-heading="语言与金额" aria-hidden="true"></span>

## 语言与金额

在 **Settings** → **Appearance** 中，**Language** 选择界面语言。2.0.26 版本提供英语、西班牙语、匈牙利语、法语、中文、德语、葡萄牙语、土耳其语和意大利语。按要求重启。本手册保留已发布的英文界面标签；翻译标签可能有所不同。

**Dark mode** 更改外观。**Exchange currency** 更改参考法币显示；小数和分组分隔符、比特币小数分组及 **Fee display unit** 控制数字格式。这些不会改变实际 BTC 金额或网络交易手续费。在不熟悉的格式中输入金额前，阅读设置里的示例。

<span id="discreet-mode" data-ginger-heading="隐蔽模式" aria-hidden="true"></span>

## 隐蔽模式

有人能看到屏幕时使用 **Discreet Mode**。它隐藏受支持的敏感显示字段，减少随意窥视。共享屏幕前，检查实际隐藏了什么：该功能不保证每个对话框、地址或外部应用都被隐藏。

隐蔽模式不会加密文件、锁定钱包、停止签名或改变区块链隐私。有电脑访问权限的人仍可操作应用。离开时使用操作系统的屏幕锁。

<span id="general-settings" data-ginger-heading="常规设置" aria-hidden="true"></span>

## 常规设置

| 设置 | 实际效果 |
| --- | --- |
| **Run Ginger when computer starts** | 随操作系统会话打开 Ginger。 |
| **Run in background when window closed** | 关闭窗口后应用可继续运行，因此 CoinJoin 和同步也可能继续。 |
| **Auto copy addresses** | 可自动将显示的地址放入剪贴板。 |
| **Auto paste addresses** | 可在地址输入流程中使用剪贴板内容。务必检查最终目的地址。 |
| **Auto download new version** | 控制获取可用更新；安装提示需另行处理。 |
| **Browser used by Ginger** | 选择外部页面所用浏览器；自定义选项显示 **Custom browser path**。 |

剪贴板便利功能不会验证收款人。其他应用可以读取或替换剪贴板数据。常规收款或发送时，切勿将助记词放入剪贴板。

外部页面使用所选浏览器自己的网络和隐私行为。即使 Ginger 本身使用 Tor，买卖服务商仍可能要求身份信息。更改显示或浏览器偏好不会改变服务商记录。

<span id="wallet-information-and-tools" data-ginger-heading="钱包信息与工具" aria-hidden="true"></span>

## 钱包信息与工具

**Wallet Info** 可以显示账户和扩展公钥信息。扩展公钥不能直接花费币，但能透露许多相关地址。不要将它发布在公开求助中。

在 **Wallet Settings** → **General** 中，使用名称控件重命名钱包。在 **Tools** 中，**Verify Recovery Words** 检查可访问软件钱包的备份，**Resync** 重建其视图，**Delete Wallet** 通过确认流程删除本地钱包。删除不会销毁比特币、撤销助记词或替代备份。移除本地访问前，保留有效恢复信息。
