---
title: 修改DNS和HOST
---

:::info

改完 DNS 或 HOST 后可能需要 **重启软件或电脑** 才会生效

:::

## Windows

### DNS(7~8 为可选操作)

1. <kbd>windows</kbd>+<kbd>e</kbd>打开资源管理器，在上方导航栏中输入控制面板然后回车（能打开控制面板就行）;

2. 将右上角查看方式修改为大图标，找到`网络和共享中心`;

3. 找到你正在使用的网络，点击连接后的蓝色字体`[一般为以太网 XXX 或者 WLAN(WIFI 名称)]`;

4. 弹出的窗口中，点击属性，双击`internet 协议版本4(TCP/IPv4)`;

5. 将`自动获得 DNS 地址`修改为`使用下面的DNS地址`;

6. 首选服务器填写`8.8.8.8`备用服务器填写`223.6.6.6 `。

7. <kbd>windows</kbd>+<kbd>r</kbd>输入 `cmd` 回车运行。

8. 输入`ipconfig /flushdns`回车运行。

### HOST

:::tip

一键脚本:

```bat
PUSHD %~DP0 & cd /d "%~dp0"
%1 %2
mshta vbscript:createobject("shell.application").shellexecute("%~s0","goto :runas","","runas",1)(window.close)&goto :eof
:runas

echo 97.64.37.235  tm.tempmusics.tk >> %systemroot%\system32\drivers\etc\hosts
echo 97.64.37.235  ts.tempmusics.tk >> %systemroot%\system32\drivers\etc\hosts

echo done
```
将脚本复制到一个新的txt文档中，将其另存为一个.bat文件，然后运行这个.bat文件。最后重启软件再尝试！

:::

1. 打开`C:\WINDOWS\system32\drivers\etc`;

2. 用记事本打开里面的`hosts`文件（无后缀）;

3. 在下面加上：

   ` 97.64.37.235 ts.tempmusics.tk`

   `97.64.37.235 tm.tempmusics.tk`

4. 保存

:::info

若无法保存则按照以下方法解决

1. 将此文件另存到另外一个目录（不要改变文件名称，保持`hosts`）

2. 将另存的文件复制（或剪切）到`C:\WINDOWS\system32\drivers\etc`目录下

:::

## MacOS

### DNS

1. 在 Mac 上，选取苹果菜单>“系统设置”，然后点按边栏中的“网络”。（你可能需要向下滚动。）

2. 点按右侧要使用的网络服务（例如 Wi-Fi 或以太网），然后点按“详细信息”。

3. 点按 DNS，点按“DNS 服务器”列表底部的“添加”按钮，然后输入 DNS 服务器的 IPv4 或 IPv6 地址（即`8.8.8.8`或`223.6.6.6`）。

4. 完成后，点按“好”。

### HOST

1. 打开系统偏好设置，选择Hosts

2. IP输入`97.64.37.235`，域名输入`ts.tempmusics.tk`  
  IP输入`97.64.27.235`，域名输入`tm.tempmusics.tk`

3. 保存
