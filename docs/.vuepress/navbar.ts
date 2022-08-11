import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "公告", icon: "home", link: "/announcement" },
  {
    text: "文档",
    icon: "read",
    link: "/document/",
  },
  { text: "下载", icon: "install", link: "/download" },
  { text: "Github地址", icon: "github", link: "/github" },
  { text: "反馈", icon: "question", link: "/report" },
  { text: "催更(bushi", icon: "mark", link: "/todos" },
]);
