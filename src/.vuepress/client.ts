import { defineClientConfig } from '@vuepress/client'
import { darkTheme } from 'naive-ui'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    return darkTheme
  },
  rootComponents: [],
})
