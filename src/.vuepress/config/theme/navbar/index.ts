import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: '主页', icon: 'home', link: '/' },
  { text: '桌面端', icon: 'desktop', link: '/desktop/', activeMatch: '^/desktop/' },
  { text: '移动端', icon: 'mobile', link: '/mobile/', activeMatch: '^/mobile/' },
  // { text: '软件下载', icon: 'download', link: '/download/' },
])
