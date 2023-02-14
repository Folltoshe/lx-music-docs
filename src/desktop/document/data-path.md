---
title: 数据存储路径
icon: 'storage'
category:
  - 常见问题
  - 桌面端
tag:
  - 数据存储
---

默认情况下，软件的数据存储在：

- Windows：`%APPDATA%/lx-music-desktop`

- Linux：`$XDG_CONFIG_HOME/lx-music-desktop` 或 `~/.config/lx-music-desktop`

- macOS：`~/Library/Application Support/lx-music-desktop`

在 Windows 平台下，若程序目录下存在`portable`目录，则自动使用此目录作为数据存储目录（v1.17.0 新增）。

v2 版本的数据库存储在 上方数据目录/lxDatas/lx.data.db

数据库内容说明在 [这里](./v2/db-info.md)
