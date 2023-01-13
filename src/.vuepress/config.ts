import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { hopeTheme } from 'vuepress-theme-hope'
import { indexNavbar, desktopNavbar, mobileNavbar } from './navbar/index'
import { indexSidebar, desktopSidebar, mobileSidebar } from './sidebar/index'
import * as path from 'path'

export default defineUserConfig({
  plugins: [
    docsearchPlugin({
      appId: 'GMSOAAKLNU',
      apiKey: 'b4688310f0b91740ad80c79999bc5ac7',
      indexName: 'lxmusic',
      // appId, apiKey 和 indexName 1是必填的
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
          },
        },
      },
    }),
  ],

  theme: hopeTheme({
    fullscreen: true,
    toc: true,

    navbarLayout: {
      left: ['Brand'],
      center: [],
      right: ['Links', 'Repo', 'Outlook', 'Search'],
    },
    themeColor: {
      green: '#3eaf7c',
      red: '#f26d6d',
      orange: '#fb9b5f',
    },

    hostname: 'https://docs.lxmusic.folltoshe.com',
    author: {
      name: 'Folltoshe',
      url: 'https://github.com/Folltoshe',
    },

    iconAssets: 'https://at.alicdn.com/t/c/font_3583800_prbbpd461e.css',
    logo: '/logo.svg',

    repo: 'https://github.com/Folltoshe/lx-music-docs',

    docsBranch: 'main',
    docsRepo: 'https://github.com/Folltoshe/lx-music-docs',
    docsDir: 'src',

    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
    footer: "<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p>",
    displayFooter: true,

    metaLocales: {
      editLink: '编辑此页',
    },

    locales: {
      '/': {
        navbar: indexNavbar,
        sidebar: indexSidebar,
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
        echarts: true,
        flowchart: true,
        gfm: true,
        imageSize: true,
        include: true,
        mark: true,
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
            {
              src: '/icon/512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/icon/192.png',
              sizes: '192x192',
              type: 'image/png',
            },
          ],
        },

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
  }),

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LX Music',
      description: '落雪音乐助手文档',
    },
    '/desktop/': {
      lang: 'zh-CN',
      title: 'LX Music For Desktop',
      description: '落雪音乐助手桌面端文档',
    },
    '/mobile/': {
      lang: 'zh-CN',
      title: 'LX Music For Mobile',
      description: '落雪音乐助手移动端文档',
    },
  },
  base: '/',
  shouldPrefetch: false,
})
