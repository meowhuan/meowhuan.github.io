import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "服务端文档",
  description: "关于所有服务端的使用文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
