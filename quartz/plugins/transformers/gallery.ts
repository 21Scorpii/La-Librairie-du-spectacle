import { QuartzTransformerPlugin } from "../types"

export const Gallery: QuartzTransformerPlugin = () => {
  return {
    name: "Gallery",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            // 解析特殊語法，例如:
            // ::: gallery
            // character: 角色ID
            // name: 角色名
            // description: 描述
            // link: 鏈接
            // images:
            //   - 圖片1路徑
            //   - 圖片2路徑
            // :::
            
            // 生成Glide.js所需的HTML結構
          }
        }
      ]
    },
    externalResources() {
      return {
        css: [
          { content: "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css" },
          { content: "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css" }
        ],
        js: [
          { 
            src: "https://cdn.jsdelivr.net/npm/@glidejs/glide",
            loadTime: "afterDOMReady",
            contentType: "external"
          }
        ]
      }
    }
  }
}
