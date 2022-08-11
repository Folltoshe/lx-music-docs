import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "公告", icon: "announcement", link: "/announcement" },
  {
    text: "文档",
    icon: "docs",
    link: "/document/",
  },
  { text: "下载", icon: "download", link: "/download" },
  { text: "Github地址", icon: "github", link: "/github" },
  { text: "反馈", icon: "report", link: "/report" },
  { text: "催更(bushi", icon: "reminders", link: "/todos" },
]);
