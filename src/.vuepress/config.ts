import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { createPage } from '@vuepress/core'
import axios from 'axios'
import { hopeTheme } from 'vuepress-theme-hope'
import { Navbar, Sidebar } from './layout'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from 'vuepress-vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // TODO
  // async onInitialized(app) {
  //   let desktop = await axios.get(
  //     'https://ghproxy.com/https://raw.githubusercontent.com/lyswhut/lx-music-desktop/master/publish/changeLog.md'
  //   )
  //   console.log(222)
  //   if (!desktop.data) console.log(1111)
  //   let page = await createPage(app, {
  //     path: '/desktop/changeLogs.html',
  //     frontmatter: {
  //       layout: 'Layout',
  //       title: '更新日志',
  //     },
  //     content: desktop.data,
  //   })
  //   app.pages.push(page)
  // },
  // 编译器配置
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['naive-ui', 'vueuc', 'date-fns'],
      },
      plugins: [
        AutoImport({
          imports: [
            {
              'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
            },
          ],
        }),
        Components({
          resolvers: [NaiveUiResolver()],
        }),
      ],
    },
  }),
  // 插件配置
  plugins: [
    docsearchPlugin({
      appId: 'FOHP6RFAIX',
      apiKey: 'cc858ae0626388d05ee48b554d81de65',
      indexName: 'lxmusic-folltoshe',
      // appId, apiKey 和 indexName 是必填的
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
  // 主题配置
  theme: hopeTheme({
    fullscreen: true,
    toc: true,
    navbarAutoHide: 'none',
    navbarLayout: {
      start: ['Brand'],
      center: [],
      end: ['Links', 'Repo', 'Outlook', 'Search'],
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

    iconAssets: 'https://at.alicdn.com/t/c/font_3583800_pjiupl73x4f.css',
    logo: '/logo.svg',

    repo: 'https://github.com/Folltoshe/lx-music-docs',

    docsBranch: 'main',
    docsRepo: 'https://github.com/Folltoshe/lx-music-docs',
    docsDir: 'src',

    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
    footer: `<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p><a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' target='_blank'>本网站由又拍云提供CDN服务</a>`,
    displayFooter: true,

    metaLocales: {
      editLink: '编辑此页',
    },

    navbar: Navbar,
    sidebar: Sidebar,

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

  lang: 'zh-CN',
  title: 'LX Music',
  description: '落雪音乐助手文档',
  base: '/',
  shouldPrefetch: false,
  alias: {
    '@theme-hope/components/HomePage': path.resolve(__dirname, './view/index/home.vue'),
    '@components': path.resolve(__dirname, './components/'),
    '@view': path.resolve(__dirname, './view/'),
  },
})
