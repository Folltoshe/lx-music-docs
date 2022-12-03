import { sidebar } from 'vuepress-theme-hope'

export const mobileSidebar = sidebar({
  '/mobile/': [
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list-songlist/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsable: true,
    },
    'data-path.md',
    'update.md',
    'statusbar-lyric.md',
    'license.md',
    'use-source.md',
  ],
})
