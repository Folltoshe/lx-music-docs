---
title: 状态栏歌词
icon: 'lyric'
author: 落雪無痕
category:
  - 常见问题
  - 移动端
tag:
  - 歌词
---

我对安卓原生不熟悉，目前不打算去适配它，熟悉安卓的同学可以去帮忙适配（JS 部分的实现可以交给我做）

项目运行方式看：[源码使用方法](/mobile/use-source-code)

若遇到问题可以回帖讨论 :)

桌面歌词相关的信息：<https://github.com/lyswhut/lx-music-mobile/issues/30>

---

从 v0.13.0 起，有了一个显示状态栏歌词的方式：通过调用第三方 Xposed 模块
【[墨•状态栏歌词](https://github.com/Block-Network/StatusBarLyric)】的 API 支持来状态栏歌词。但考虑到要依赖第三方应用，
并且是 Xposed 模块，预计用的人会比较少，所以暂不考虑将此特性合并到主分支（不会包含在正式版中）。

现在此特性被放到`statusbar-lyric`分支上，并设置了构建任务，想要此功能的人可以去这里下载构建包
：<https://github.com/lyswhut/lx-music-mobile/actions/workflows/statusbar-lyric.yml>

:::info

如果在使用墨•状态栏歌词时候出现错误，请尝试重启软件和系统 UI！并检查是否在墨•状态栏歌词中勾选 LX Music！

::::

**请注意，墨·状态栏歌词因为对系统进程进行了hook，因此无法使用类似于太极·阴/LSPatch等真机免root的XPosed工具实现状态栏歌词，如果你的手机已root，请使用LSPosed**

:::tip

这需要登录 GitHub 才能下载，如果你不知道怎么下载，可以去企鹅测试群(`768786588`)文件下载（文件名带`sl`后缀）

:::
