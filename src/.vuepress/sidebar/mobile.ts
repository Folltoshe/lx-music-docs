import { sidebar } from 'vuepress-theme-hope'

export const mobileSidebar = sidebar({
  '/mobile/document/': [
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list-songlist/',
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
