import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar";
import navbar from "./navbar";

export default hopeTheme({
  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Outlook", "Search"],
  },
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  navbarAutoHide: "none",
  hostname: "https://lxmusic.docs.folltoshe.com",
  author: {
    name: "Folltoshe",
    url: "https://github.com/folltoshe",
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  docsRepo: "Folltoshe/lx-music-docs",
  repoDisplay: true,
  docsBranch: "main",
  editLink: true,
  lastUpdated: true,
  docsDir: "docs/",
  navbar: navbar,
  sidebar: sidebar,
  footer:
    "<p><a href='https://beian.miit.gov.cn/' target='_blank' >闽ICP备2022010952号</a></p><p>如果对此文档有异议 , 请mail to : folltoshe@foxmail.com</p>",
  copyright: "Copyright By Folltoshe︱Apache License",
  displayFooter: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
