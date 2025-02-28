import { QuartzConfig } from "./quartz/cfg"

// 添加 Glide.js 相關資源
const glideCSS = "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"
const glideJS = "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/glide.min.js"

export const baseComponents: QuartzConfig["components"] = {
  head: Head([
    {
      src: glideCSS,
      type: "css",
    },
    {
      src: glideJS,
      type: "js",
      loadTime: "beforeDOMReady",
    },
  ]),
  // ... 其他配置
} 