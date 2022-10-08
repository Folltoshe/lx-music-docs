import { hopeTheme } from 'vuepress-theme-hope'
import { zhNavbar } from './navbar/index.js'
import { zhSidebar } from './sidebar/index.js'

export default hopeTheme({
  fullscreen: true,
  navbarLayout: {
    left: ['Brand'],
    center: ['Links'],
    right: ['Language', 'Repo', 'Outlook', 'Search'],
  },
  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },
  hostname: 'https://lxmusic.docs.folltoshe.com',
  author: {
    name: 'Folltoshe',
    url: 'https://github.com/Folltoshe',
  },
  docsBranch: 'main',
  iconAssets: '//at.alicdn.com/t/c/font_3583800_wio6jvg3v1.css',
  logo: '/logo.svg',
  repo: 'https://github.com/folltoshe/lx-music-docs',
  docsRepo: 'https://github.com/folltoshe/lx-music-docs',
  docsDir: 'src',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  navbar: zhNavbar,
  sidebar: zhSidebar,
  footer:
    "<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p><p>文档By Folltoshe  |  部分文档 By lerdertre  |  软件 By lyswhut</p>",
  displayFooter: true,
  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },

  // encrypt: {
  //   config: {
  //     '/demo/encrypt.html': ['1234'],
  //     '/zh/demo/encrypt.html': ['1234'],
  //   },
  // },

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",
      /**
       * Using Waline
       */
      // provider: 'Waline',
      // serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
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
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/icon/152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/icon/144.png',
        color: '#ffffff',
      },
    },
  },
})
