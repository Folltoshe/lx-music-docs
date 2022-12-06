import { hopeTheme } from 'vuepress-theme-hope'
import { defaultNavbar, desktopNavbar, mobileNavbar } from './navbar/index'
import { defaultSidebar, desktopSidebar, mobileSidebar } from './sidebar/index'

export default hopeTheme({
  fullscreen: true,
  toc: true,

  navbarLayout: {
    left: ['Brand'],
    center: ['Links'],
    // right: ['Language', 'Repo', 'Outlook', 'Search'],
    right: ['Repo', 'Outlook', 'Search'],
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

  iconAssets: '//at.alicdn.com/t/c/font_3583800_prbbpd461e.css',
  logo: '/logo.svg',

  repo: 'https://github.com/folltoshe/lx-music-docs',

  docsBranch: 'main',
  docsRepo: 'https://github.com/folltoshe/lx-music-docs',
  docsDir: 'src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  footer: "<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p>",
  displayFooter: true,

  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },

  locales: {
    '/': {
      navbar: defaultNavbar,
      sidebar: defaultSidebar,
    },
    '/desktop/': {
      navbar: desktopNavbar,
      sidebar: desktopSidebar,
    },
    '/mobile/': {
      navbar: mobileNavbar,
      sidebar: mobileSidebar,
    },
  },

  plugins: {
    photoSwipe: undefined,
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
