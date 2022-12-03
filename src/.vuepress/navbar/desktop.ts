import { navbar } from 'vuepress-theme-hope'

export const desktopNavbar = navbar([
  { text: '主页', icon: 'home', link: '/' },
  {
    text: '常见问题',
    icon: 'docs',
    children: [
      { text: '桌面端', icon: 'desktop', link: '/desktop/' },
      { text: '移动端', icon: 'mobile', link: '/mobile/' },
    ],
  },
  { text: '软件下载', icon: 'download', link: '/download/' },
  { text: '反馈', icon: 'report', link: '/report/' },
  {
    text: '版本',
    // activeMatch: '^/document/desktop/$',
    prefix: '/desktop/document/',
    children: [
      { text: 'V1', link: '/v1/' },
      { text: 'V2', link: '/v2/' },
    ],
  },
])
