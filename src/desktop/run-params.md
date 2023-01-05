---
title: 支持的启动参数
icon: 'start'
author: 落雪無痕
category:
  - 软件
  - 桌面端
tag:
  - 启动参数
---

目前软件已支持的启动参数如下：

- `-search` 启动软件时自动在搜索框搜索指定的内容，例如：`-search="突然的自我 - 伍佰"`

- `-dha` 禁用硬件加速启动（Disable Hardware Acceleration），窗口显示有问题时可以尝试添加此参数启动（v1.6.0 起新增）

- `-dt` 以非透明模式启动（Disable Transparent），对于未开启 AERO 效果的 win7 系统可加此参数启动以确保界面正常显示（注：
  该参数对桌面歌词无效），原来的`-nt`参数已重命名为`-dt`（v1.6.0 起重命名）

- `-dhmkh` 禁用硬件媒体密钥处理（Disable Hardware Media Key Handling），此选项将禁用 Chromium 的 Hardware Media Key
  Handling 特性（v1.9.0 起新增）

- `-proxy-server` 设置代理服务器，代理应用的所有流量，例：`-proxy-server="127.0.0.1:1081"`（不支持设置账号密码，v1.17.0
  起新增）。注：应用内“设置-网络-代理设置”仅代理接口请求的流量，优先级更高

- `-proxy-bypass-list` 以分号分隔的主机列表绕过代理服务器，例
  ：`-proxy-bypass-list="<local>;*.google.com;*foo.com;1.2.3.4:5678"`（与`-proxy-server`一起使用才有效，v1.17.0 起新增）
  。注：此设置对应用内接口请求无效
- `-play` 启动时播放指定列表的音乐，参数说明：
  - `type`：播放类型，目前固定为`songList`
  - `source`：播放源，可用值为`kw/kg/tx/wy/mg/myList`，其中`kw/kg/tx/wy/mg`对应各源的在线列表，`myList`为本地列表
  - `link`：要播放的在线列表歌单链接、或 ID，source 为`kw/kg/tx/wy/mg`之一（在线列表）时必传，举例
    ：`./lx-music-desktop -play="type=songList&source=kw&link=歌单URL or ID"`，注意：如果传入 URL 时必须对 URL 进行编码
    后再传入
  - `name`：要播放的本地列表歌单名字，source 为`myList`时必传，举例
    ：`./lx-music-desktop -play="type=songList&source=myList&name=默认列表"`
  - `index`：从列表的哪个位置开始播放，选传，若不传默认播放第一首歌曲，举例
    ：`./lx-music-desktop -play="type=songList&source=myList&name=默认列表&index=2"`
