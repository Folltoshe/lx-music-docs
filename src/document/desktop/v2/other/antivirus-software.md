---
title: 杀毒软件提示有病毒或恶意行为
category:
  - 常见问题
  - 桌面端
tag:
  - 提示病毒
---

本人只能保证我写的代码不包含任何**恶意代码**、**收集用户信息**的行为，并且软件代码已开源，请自行查阅，软件安装包也是由
CI 拉取源代码构建，构建日志：[GitHub Actions](https://github.com/lyswhut/lx-music-desktop/actions)

尽管如此，但这不意味着软件是 100%安全的，由于软件使用了第三方依赖，当这些依赖存在恶意行为时
（[供应链攻击](https://docs.microsoft.com/zh-cn/windows/security/threat-protection/intelligence/supply-chain-malware)）
，软件也将会受到牵连，所以我只能尽量选择使用较多人用、信任度较高的依赖。

当然，以上说明建立的前提是在你所用的安装包是从**本项目主页上写的链接**下载的，或者有相关能力者还可以下载源代码自己构建安
装包。

从`v0.17.0`起，由于加入了音频输出设备切换功能，该功能调用了
[MediaDevices.enumerateDevices()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/enumerateDevices)，可能
导致安全软件提示洛雪要访问摄像头（目前发现卡巴斯基会提示），但实际上没有用到摄像头，并且摄像头的提示灯也不会亮，你可以选
择阻止访问。

最后，若出现杀毒软件报毒、存在恶意行为，请自行判断选择是否继续使用本软件！
