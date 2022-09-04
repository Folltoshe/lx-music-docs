import { defineUserConfig } from "vuepress";
import theme from "./theme";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch"

export default defineUserConfig({
  // plugins: [
  //   docsearchPlugin({
  //     // 配置项
  //     apiKey: "1838a8e5824473382c013aa4b546daee",
  //     appId: "GMSOAAKLNU",
  //     indexName: "lxmusic",
  //   }),
  // ],
  lang: "zh-CN",
  title: "LX Music",
  description: "落雪音乐助手文档",
  base: "/",
  theme,
});
