---
title: Linux下界面异常
category:
  - 常见问题
  - 桌面端
tag:
  - 界面异常
  - Linux
---

### Linux 下界面异常

根据 Electron 里 issue 的[解决方案](https://github.com/electron/electron/issues/2170#issuecomment-736223269)

若你遇到透明问题可尝试添加启动参数 `-dha` 来禁用硬件加速，例如：`.\lx-music-desktop.exe -dha`。
