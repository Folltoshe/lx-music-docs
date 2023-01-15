---
title: 数据库内容说明
category:
  - 常见问题
  - 桌面端
---

## LX Music数据库说明

:::danger

乱修改数据库可能导致数据丢失，请谨慎

:::

存储位置： [数据目录](../data-path.md) \/ lxDatas \/ lx.data.db

## 数据库结构

lx.data.db
 - db_info
 - download_list  
  下载列表
 - lyric  
  歌词数据
 - music_info_other_source  
  换源歌曲数据
 - music_url  
  音乐链接数据
 - my_list  
  列表信息数据
 - my_list_music_info  
  列表歌曲数据
 - my_list_music_info_order  
  列表歌曲id
 - sqlite_sequence

### lyric

歌词数据

id\: 歌曲id

source\: 歌词状态，可能为
 - raw\(未更改\)
 - edited\(已更改\)

type\: 歌词类型，可能为
 - lyric\(普通lrc歌词\)
 - tlyric\(翻译歌词\)
 - rlyric\(罗马音歌词\)
 - lxlyric\(逐字歌词\)

text\: 经过base64编码的歌词文本

:::tip

除了lxlrc项之外其他歌词全部遵循lrc语法

lxlrc的语法为

\[句子时间点\]\<该字对于该句子的开始时间\,该字持续时间\>

:::

### music_info_other_source

换源歌曲信息

source_id\: 要换源的歌曲

id\: 换源目标歌曲

source\: 换源目标歌曲源

name\: 歌曲名

singer\: 歌手

meta\: 歌曲meta信息

order\: 顺序

### music_url

id\: 歌曲id，源_id_品质

url\: 歌曲URL