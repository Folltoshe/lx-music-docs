---
title: 显示异常
category:
  - 常见问题
  - 桌面端
tag:
  - 桌面歌词
---

## Windows 7 系统桌面歌词显示异常

Windows 7 未开启 Aero 效果时桌面歌词会有问题，详情看[Windows 7 下界面异常](../screen-abnormal/win7.md#windows-7-下界面异常消失又出现)

## MAC OS 系统、桌面歌词有残留阴影

此问题似乎是 Electron 的 Bug，翻阅 electron 的 issue 列表发现该 Bug 以存在很久了，遗憾的是没有一直都没有修复，由于我没有
装 MAC 平台的电脑，没法重现，就没再去 electron 提 issue，更多信息看：

- <https://github.com/electron/electron/issues/21173>
- <https://github.com/electron/electron/issues/14304>

## Linux 系统下桌面歌词窗口异常

`v1.2.1`以前的版本在 Ubuntu 18.10 下第一次开启桌面歌词时歌词窗口会变白，需要关闭后再开启， `v1.2.1`及之后的版本已修复该
问题。

其他 Linux 系统未测试，如有异常也是意料之中，目前不打算去处理 Linux 平台的桌面歌词问题，但你可以尝试按
照`Linux 下界面异常`的解决方案去解决。
