import { sidebar } from 'vuepress-theme-hope'

export const desktopSidebar = sidebar({
  '/desktop/document/': [
    '/desktop/document/v2/',
    {
      text: '自定义源',
      icon: 'diy',
      prefix: 'diy-source/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '桌面歌词',
      icon: 'lyric',
      prefix: 'lyric/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '同步和备份',
      icon: 'sync',
      prefix: 'sync-backup/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '界面显示异常',
      icon: 'screen',
      prefix: 'screen-abnormal/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsible: true,
    },
    'data-path',
    'hotkey.md',
    'scheme-url.md',
    'run-params.md',
    'license.md',
    'use-source.md',
  ],
  '/desktop/document/v2/': [
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '桌面歌词',
      icon: 'lyric',
      prefix: 'lyric/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '同步和备份',
      icon: 'sync',
      prefix: 'sync-backup/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsible: true,
    },
    'changLog.md',
    'localMusic.md',
  ],
})
