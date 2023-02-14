import { sidebar } from 'vuepress-theme-hope'

export const mobileSidebar = sidebar({
  '/mobile/document/': [
    {
      text: '通用',
      icon: 'common',
      prefix: 'common/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '下载',
      icon: 'download',
      prefix: 'download/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '播放',
      icon: 'play',
      prefix: 'play/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '本地列表',
      icon: 'local',
      prefix: 'list/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '外部歌单',
      icon: 'songlist',
      prefix: 'songlist/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '同步与备份',
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
    'data-path.md',
    'update.md',
    'statusbar-lyric.md',
    'license.md',
    'use-source.md',
  ],
})
