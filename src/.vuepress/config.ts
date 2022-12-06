import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  plugins: [
    docsearchPlugin({
      appId: 'GMSOAAKLNU',
      apiKey: 'b4688310f0b91740ad80c79999bc5ac7',
      indexName: 'lxmusic',
      // Set debug to true if you want to inspect the modal
      // 你的选项
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
  theme,
  shouldPrefetch: false,
})
