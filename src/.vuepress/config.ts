import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Tlipoca Core Nexus",
  description: "Minecraft服务端核心权威指南",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
