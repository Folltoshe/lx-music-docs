---
title: Scheme URL支持
icon: 'url'
author: 落雪無痕
category:
  - 常见问题
  - 桌面端
tag:
  - Scheme URL
---

从 v1.17.0 起支持 Scheme URL，可以使用此功能从浏览器等场景下调用 LX Music，我们开发了一
个[油猴脚本](https://github.com/lyswhut/lx-music-script#readme)配套使用

脚本安装地址：<https://greasyfork.org/zh-CN/scripts/438148>

以下是目前可用的 Scheme URL 调用方式：

- URL 统一以`lxmusic://`开头
- 若无特别说明，源的可用值为：`kw/kg/tx/wy/mg`
- 若无特别说明，音质的可用值为：`128k/320k/flac/flac32bit`

目前支持两种传参方式：

- 通过`data`传参，以经过 URL 编码的 JSON 数据传参，例：`lxmusic://music/play?data=xxxx`，其中`xxxx`为经过 URL 编码后的
  JSON 数据，支持复杂的参数调用
- 通过`URL`传参，适用于简单传参的调用，不需要转成 JSON 格式，例：`lxmusic://music/search/xxxx`，但仍然需要对数据进行 URL
  编码，只适应于简单参数调用（v1.18.0 新增）

### `data`方式传参

以经过 URL 编码的 JSON 数据传参，例：`lxmusic://music/play?data=xxxx`，其中`xxxx`为经过 URL 编码后的 JSON 数据，JSON 数
据内容取决于下表的参数部分

| 描述     | URL             | 参数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 打开歌单 | `songlist/open` | `source<String>`（源，必须）<br />`id<String/Number>`（歌单 ID，可选）<br />`url<String>`（歌单 URL，可选）其中 ID 与 URL 必需传一个                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 播放歌单 | `songlist/play` | `source<String>`（源，必须）<br />`id<String/Number>`（歌单 ID，可选）<br />`url<String>`（歌单 URL，可选）其中`id`与`url`必需传一个<br />`index<Number>`（播放第几首歌，可选，从 0 开始）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 搜索歌曲 | `music/search`  | `keywords<String/Number>`（要搜索的内容，必须）<br />`source<String>`（源，可选）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 播放歌曲 | `music/play`    | `name<String>`（歌曲名，必传）<br />`singer<String>`（艺术家名，必传）<br />`source<String>`（源，必传）<br />`songmid<String/Number>`（歌曲 ID，必传）<br />`img<String>`（歌曲图片链接，选传）<br />`albumId<String/Number>`（歌曲专辑 ID，选传）<br />`interval<String>`（格式化后的歌曲时长，选传，例：`03:55`）<br />`albumName<String>`（歌曲专辑名称，选传）<br />`types<Object>`（歌曲可用音质数组，必传，<br />数组格式：`[{"type": "<音质>", size: "<格式化后的文件大小，选传>", hash: "<kg源必传>"}]`，<br />例：`[{"type": "128k", size: "3.56M"}, {"type": "320k", size: null}]`）<br /><br />以下为平台特定参数：<br />`hash<String>`（歌曲 hash，kg 源必传）<br />`strMediaMid<String>`（歌曲 strMediaMid，tx 源必传）<br />`albumMid<String>`（歌曲 albumMid，tx 源专用，选传）<br />`copyrightId<String>`（歌曲 copyrightId，mg 源必传）<br />`lrcUrl<String>`（歌曲 lrcUrl，mg 源专用，选传） |

### `URL`方式传参

由于 URL 传参只适用于简单传参场景，所以目前只支持以下功能的调用：

| 描述     | URL                                | 参数                                                                                                          |
| -------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 搜索歌曲 | `music/search/{source}/{keywords}` | `source`（源，可选）<br />`keywords`（要搜索的内容，必须）<br />例：`music/search/kw/xxx`、`music/search/xxx` |
| 打开歌单 | `songlist/open/{source}/{id/url}`  | `source`（源，必须）<br />`id/url`（歌单 ID 或歌单 URL，必须）<br />例：`songlist/open/kw/123456`             |
