---
title: 界面异常（界面显示不完整）
---

### Windows 10、11 界面异常

尝试添加运行参数 `--disable-gpu-sandbox` 启动，例如
：`.\lx-music-desktop.exe --disable-gpu-sandbox`，添加方法可参阅下文。没有遇到问
题不要使用此参数！

若以上方法无效，则尝试将 `--disable-gpu-sandbox` 逐个换成以下参数启动，直到恢复
正常为止：

- `--no-sandbox`
- `-dha`
- `--disable-gpu`

:::tip

参数添加方法（更加详细的方法自行百度“给快捷方式加参数”）:

-快捷方式：在快捷方式上右键-属性-在目标后面先加上一个`空格`，然后在后面加
上`-dt`。（若有引号请先删除）

-命令行运行：在软件安装目录下运行 cmd，然后输入此命
令`.\lx-music-desktop.exe -dt`

:::

::: danger

这些参数会禁用程序的某些安全特性或降低程序性能，没有遇到问题不要使用它们！

:::

### Windows 7 下界面异常

由于软件默认使用了透明窗口，根据 Electron 官方文档
的[说明](https://www.electronjs.org/docs/latest/tutorial/window-customization#limitations)：

> 在 windows 操作系统上, 当 DWM 被禁用时, 透明窗口将无法工作。

因此，当 win7 没有使用**Aero**主题时界面将会显示异常，开启 AERO 的方法请自行百度
：`win7开启Aero效果`（开启后可看到任务栏变透明）。

从`0.14.0`版本起不再强制要求开启透明效果，若你实在不想开启（若非电脑配置太低，墙
裂建议开启！），可通过添加运行参数`-dt`来运行程序即可。该参数的作用是用来控制程
序是否使用非透明窗口运行。

:::tip 启用**Aero**主题后，若软件出现黑边框，则重启软件即可恢复正常。 :::

对于一些完全无法正常显示界面、开启了 AERO 后问题仍未解决的情况，请阅读下面的
**Window 7 下软件启动后，界面无法显示** 解决。

### Windows 7 下软件启动后，界面无法显示

对于软件启动后，可以在任务栏看到软件，但软件界面在桌面上无任何显示，或者整个界面
偶尔闪烁的情况。

原始问题看
：<https://github.com/electron/electron/issues/19569#issuecomment-522231083>

解决办法：下载`.NET Framework 4.7.1`或**更高**版本安装即可(建议安装最新版，若安
装过程中遇到问题可尝试自行百度解决)。

微软官方下载地址：<https://dotnet.microsoft.com/download/dotnet-framework>

下载`Runtime(运行时)`版即可，安装完成后可能需要重启才生效，**若出现闪烁的情
况**，可阅读下面的**Windows 7 下整个界面闪烁**解决。

### Windows 7 下整个界面闪烁（消失又出现）

可尝试在关掉软件后，在桌面空白处鼠标右击，在弹出的菜单中选择**个性化**，在弹出的
窗口中**切换到系统内置的 Aero 主题**，然后再启动软件看是否解决。

### Windows 7 下桌面歌词字体列表为空

Windows 7 系统系统需要安装 Powershell 5.1 及以上版本才可正常获取系统字体列表。

想要查看当前 Powershell 版本可以在 Powershell 窗口输入命令：`Get-Host`

最新 Powershell 安装包可以去官方
[Github releases](https://github.com/PowerShell/PowerShell/releases) 页下载，安
装过程中若出现错误，请自行按照提示或者百度/Google 解决。

### Linux 下界面异常

根据 Electron 里 issue
的[解决方案](https://github.com/electron/electron/issues/2170#issuecomment-736223269)

若你遇到透明问题可尝试添加启动参数 `-dha` 来禁用硬件加速，例如
：`.\lx-music-desktop.exe -dha`。

:::tip v1.6.0 及之后的版本才支持`-dha`参数 :::
