import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// 如果需要自定义样式，可以 import "./styles/portraitSidebar.scss"

function PortraitSidebar({ fileData }: QuartzComponentProps) {
  const frontmatter = fileData.frontmatter
  // 在这里决定获取哪张图片：
  // 1. 比如从前置属性 image 字段获取
  // 2. 或者通过正则/HTML解析，从 fileData.text 中抓取第1张图片
  // 这里演示从 frontmatter.image 获取
  const imagePath = frontmatter.image

  // 如果没有图片，或者不是角色，返回 null
  if (!imagePath || frontmatter.category !== "Chara") {
    return null
  }

  return (
    <aside className="portrait-sidebar">
      {/* 侧边标题 */}
      <h3>人物图像</h3>
      {/* 这里也可加"Graph View"下方标题或介绍，如果需要 */}
      <img 
        src={imagePath}
        alt={frontmatter.RealName || "角色图像"}
        style={{ maxWidth: "100%", borderRadius: "8px" }}
      />
    </aside>
  )
}

// 将组件返回
export default (() => PortraitSidebar) satisfies QuartzComponentConstructor