import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LX Music",
  description: "落雪音乐助手文档",
  base: "/",
  theme,
});
