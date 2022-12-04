import { navbar } from 'vuepress-theme-hope'

export const desktopNavbar = navbar([
  { text: '主页', icon: 'home', link: '/' },
  {
    text: '常见问题',
    icon: 'docs',
    children: [
      { text: '桌面端', icon: 'desktop', link: '/desktop/', activeMatch: '^/desktop/' },
      { text: '移动端', icon: 'mobile', link: '/mobile/', activeMatch: '^/mobile/' },
    ],
  },
  { text: '软件下载', icon: 'download', link: '/download/' },
  { text: '问题反馈', icon: 'report', link: '/report/' },
  {
    text: '切换版本',
    // activeMatch: '^/document/desktop/$',
    prefix: '/desktop/document/',
    children: [
      { text: '1.x.x', link: 'v1/' },
      { text: '2.x.x', link: 'v2/' },
    ],
  },
])
