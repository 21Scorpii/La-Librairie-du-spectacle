import { QuartzTransformerPlugin, QuartzTransformerMarkdownContext } from "../../../plugins/types"
import { Root } from "mdast"
import { VFile } from "vfile"

interface BannerOptions {
  height?: string
  overlayColor?: string
  textColor?: string
}

export const Banner: QuartzTransformerPlugin<BannerOptions> = (opts?: BannerOptions) => {
  const height = opts?.height || "300px"
  const overlayColor = opts?.overlayColor || "rgba(0, 0, 0, 0.3)"
  const textColor = opts?.textColor || "#ffffff"

  return {
    name: "Banner",
    markdownPlugins(ctx: QuartzTransformerMarkdownContext) {
      return [
        () => {
          return (tree: Root, file: VFile) => {
            const bannerUrl = file.data?.frontmatter?.banner
            const bannerTitle = file.data?.frontmatter?.title || ""
            
            if (bannerUrl) {
              const bannerNode = {
                type: "html",
                value: `
                  <div class="banner-container" style="height: ${height};">
                    <div class="banner-background" style="background-image: url('${bannerUrl}');"></div>
                    <div class="banner-overlay" style="background-color: ${overlayColor};"></div>
                    <div class="banner-content" style="color: ${textColor};">
                      <h1>${bannerTitle}</h1>
                    </div>
                  </div>
                `
              }
              tree.children.unshift(bannerNode)
            }
          }
        }
      ]
    },
    externalResources(ctx: QuartzTransformerMarkdownContext) {
      return {
        css: [
          {
            content: `
              .banner-container {
                position: relative;
                width: 100%;
                overflow: hidden;
                margin: -1rem -1rem 1rem -1rem;
              }
              
              .banner-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                z-index: 1;
              }
              
              .banner-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
              }
              
              .banner-content {
                position: relative;
                z-index: 3;
                padding: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                text-align: center;
              }
              
              .banner-content h1 {
                margin: 0;
                font-size: 2.5rem;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
              }
            `
          }
        ]
      }
    }
  }
} 