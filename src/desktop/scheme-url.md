---
title: Scheme URL支持
icon: 'url'
author: 落雪無痕
---

从v1.17.0起支持 Scheme URL，可以使用此功能从浏览器等场景下调用LX Music，我们开发了一个[油猴脚本](https://github.com/lyswhut/lx-music-script#readme)配套使用

脚本安装地址：<https://greasyfork.org/zh-CN/scripts/438148>

以下是目前可用的Scheme URL调用方式：

- URL统一以`lxmusic://`开头
- 若无特别说明，源的可用值为：`kw/kg/tx/wy/mg`
- 若无特别说明，音质的可用值为：`128k/320k/flac/flac24bit`

目前支持两种传参方式：

- 通过`data`传参，以经过URL编码的JSON数据传参，例：`lxmusic://music/play?data=xxxx`，其中`xxxx`为经过URL编码后的JSON数据，支持复杂的参数调用
- 通过`URL`传参，适用于简单传参的调用，不需要转成JSON格式，例：
  `lxmusic://music/search/xxxx`，但仍然需要对数据进行URL编码，只适应于简单参数调用（v1.18.0新增）

### `data`方式传参

以经过URL编码的JSON数据传参，例：`lxmusic://music/play?data=xxxx`，其中`xxxx`为经过URL编码后的JSON数据，JSON数据内容取决于下表的参数部分

| 描述 | URL | 参数
| --- | --- | ---
| 打开歌单 | `songlist/open` | `source<String>`（源，必须）<br />`id<String/Number>`（歌单ID，可选）<br />`url<String>`（歌单URL，可选）其中ID与URL必需传一个
| 播放歌单 | `songlist/play` | `source<String>`（源，必须）<br />`id<String/Number>`（歌单ID，可选）<br />`url<String>`（歌单URL，可选）其中`id`与`url`必需传一个<br />`index<Number>`（播放第几首歌，可选，从0开始）
| 搜索歌曲 | `music/search` | `keywords<String/Number>`（要搜索的内容，必须）<br />`source<String>`（源，可选）
| 播放歌曲 | `music/play` | `name<String>`（歌曲名，必传）<br />`singer<String>`（艺术家名，必传）<br />`source<String>`（源，必传）<br />`songmid<String/Number>`（歌曲ID，必传）<br />`img<String>`（歌曲图片链接，选传）<br />`albumId<String/Number>`（歌曲专辑ID，选传）<br />`interval<String>`（格式化后的歌曲时长，选传，例：`03:55`）<br />`albumName<String>`（歌曲专辑名称，选传）<br />`types<Object>`（歌曲可用音质数组，必传，<br />数组格式：`[{"type": "<音质>", size: "<格式化后的文件大小，选传>", hash: "<kg源必传>"}]`，<br />例：`[{"type": "128k", size: "3.56M"}, {"type": "320k", size: null}]`）<br /><br />以下为平台特定参数：<br />`hash<String>`（歌曲hash，kg源必传）<br />`strMediaMid<String>`（歌曲strMediaMid，tx源必传）<br />`albumMid<String>`（歌曲albumMid，tx源专用，选传）<br />`copyrightId<String>`（歌曲copyrightId，mg源必传）<br />`lrcUrl<String>`、`trcUrl<String>`、`mrcUrl<String>`（歌曲lrcUrl、trcUrl与mrcUrl，mg源专用，选传）

#### 以data传参的例子

以经过URL编码的JSON数据传参，例：`lxmusic://music/play?data=xxxx`，其中xxxx为经过URL编码后的JSON数据

- 打开歌单：`lxmusic://songlist/open?data=%7B%22source%22:%22kw%22,%22id%22:%223373919903%22%7D`
- 搜索歌曲：`lxmusic://music/search?data=%7B%22keywords%22:%22%E7%AA%81%E7%84%B6%E7%9A%84%E8%87%AA%E6%88%91%22%7D`

### `URL`方式传参

由于URL传参只适用于简单传参场景，所以目前只支持以下功能的调用：

| 描述 | URL | 参数
| --- | --- | ---
| 搜索歌曲 | `music/search/{source}/{keywords}` | `source`（源，可选）<br />`keywords`（要搜索的内容，必须）<br />例：`music/search/kw/xxx`、`music/search/xxx`
| 打开歌单 | `songlist/open/{source}/{id/url}` | `source`（源，必须）<br />`id/url`（歌单ID或歌单URL，必须）<br />例：`songlist/open/kw/123456`
| 播放歌曲 | `player/play` |
| 暂停播放 | `player/pause` |
| 切换下一曲 | `player/skipNext` |
| 切换上一曲 | `player/skipPrev` |
| 切换播放或暂停 | `player/togglePlay` |
| 收藏当前播放的歌曲 | `player/collect` |
| 取消收藏当前播放的歌曲 | `player/uncollect` |
| 不喜欢当前播放的歌曲 | `player/dislike` |

#### 以URL传参的例子

用`lxmusic://`拼接上表中填充参数后的URL即可，填充参数时最好将参数单独转一下URL编码，否则若参数中存在特殊字符（如`/`）将导致异常的调用

- 打开歌单：`lxmusic://songlist/open/kw/3373919903`
- 搜索歌曲：`lxmusic://music/search/%E7%AA%81%E7%84%B6%E7%9A%84%E8%87%AA%E6%88%91`
- 切换下一曲：`lxmusic://player/skipNext`

相关issue看：<https://github.com/lyswhut/lx-music-desktop/issues/1056>