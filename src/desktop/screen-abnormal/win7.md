---
title: win7下界面异常
category:
  - 常见问题
  - 桌面端
tag:
  - 界面异常
  - win7
---

## Windows 7 下界面异常（消失又出现）

由于软件默认使用了透明窗口，根据 Electron 官方文档
的[说明](https://www.electronjs.org/docs/latest/tutorial/window-customization#limitations)：

> 在 windows 操作系统上, 当 DWM 被禁用时, 透明窗口将无法工作。

因此，当 win7 没有使用**Aero**主题时界面将会显示异常，开启 AERO 的方法请自行百度：`win7开启Aero效果`（开启后可看到任务栏
变透明）。

从`0.14.0`版本起不再强制要求开启透明效果，若你实在不想开启（若非电脑配置太低，墙裂建议开启！），可通过添加运行参
数`-dt`来运行程序即可。该参数的作用是用来控制程序是否使用非透明窗口运行。

:::info

启用**Aero**主题后，若软件出现黑边框，则重启软件即可恢复正常。

启用**Aero**主题后，如果问题还未解决，请尝试添加启动参数`-dt`(不懂怎么添加请自行百度)

:::

## Windows 7 下软件启动后，界面无法显示

对于软件启动后，可以在任务栏看到软件，但软件界面在桌面上无任何显示，或者整个界面偶尔闪烁的情况。

原始问题看：<https://github.com/electron/electron/issues/19569#issuecomment-522231083>

解决办法：下载`.NET Framework 4.7.1`或**更高**版本安装即可(建议安装最新版，若安装过程中遇到问题可尝试自行百度解决)。

微软官方下载地址：<https://dotnet.microsoft.com/download/dotnet-framework>

下载`Runtime(运行时)`版即可，安装完成后可能需要重启才生效.

## Windows 7 下桌面歌词字体列表为空

Windows 7 系统系统需要安装 Powershell 5.1 及以上版本才可正常获取系统字体列表。

想要查看当前 Powershell 版本可以在 Powershell 窗口输入命令：`Get-Host`

最新 Powershell 安装包可以去官方 [Github releases](https://github.com/PowerShell/PowerShell/releases) 页下载，安装过程中
若出现错误，请自行按照提示或者百度/Google/Bing 解决。
