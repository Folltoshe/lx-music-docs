import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

import theme from './theme'
import plugins from './plugins'
import bundler from './bundler'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // 编译器
  bundler,
  // 插件
  plugins,
  // 主题
  theme,
  // 其他
  lang: 'zh-CN',
  title: 'LX Music',
  description: '落雪音乐助手文档',
  base: '/',
  shouldPrefetch: false,
  alias: {
    '@theme-hope/components/HomePage': path.resolve(__dirname, '../views/Home/index.vue'),
    '@views': path.resolve(__dirname, '../views/'),
  },
})
