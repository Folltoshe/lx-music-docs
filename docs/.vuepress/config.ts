import { defineUserConfig } from 'vuepress'
import theme from './theme'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  plugins: [
    docsearchPlugin({
      appId: 'GMSOAAKLNU',
      apiKey: '1838a8e5824473382c013aa4b546daee',
      indexName: 'lxmusic',
      // Set debug to true if you want to inspect the modal
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
    }),
  ],
  lang: 'zh-CN',
  title: 'LX Music',
  description: '落雪音乐助手文档',
  base: '/',
  theme,
})
