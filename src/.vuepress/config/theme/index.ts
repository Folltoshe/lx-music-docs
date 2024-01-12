import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  toc: true,
  navbarAutoHide: 'none',
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Links', 'Repo', 'Outlook', 'Search'],
  },
  themeColor: true,

  hostname: 'https://docs.lxmusic.top',
  author: {
    name: 'Folltoshe',
    url: 'https://github.com/Folltoshe',
  },

  iconAssets: 'https://at.alicdn.com/t/c/font_3583800_pjiupl73x4f.css',
  logo: '/logo.svg',

  repo: 'https://github.com/Folltoshe/lx-music-docs',

  docsBranch: 'main',
  docsRepo: 'https://github.com/Folltoshe/lx-music-docs',
  docsDir: 'src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  // footer: `<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p><a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' target='_blank'>本网站由又拍云提供CDN服务</a>`,
  footer: `<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2021015412号-2</a></p>`,
  displayFooter: true,

  metaLocales: {
    editLink: '编辑此页',
  },

  navbar,
  sidebar,

  plugins: {
    photoSwipe: undefined,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      mark: true,
      mermaid: true,
      demo: true,
      card: true,
      playground: {
        presets: ['ts', 'vue'],
        config: {},
      },
      stylize: [
        {
          matcher: 'Recommanded',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommanded',
              }
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      update: 'hint',
      manifest: {
        name: 'LX Music Docs',
        icons: [
          {
            src: '/icon/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/icon/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
        ],
      },

      apple: {
        icon: '/icon/152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/icon/152.png',
        color: '#ffffff',
      },
    },
  },
})
