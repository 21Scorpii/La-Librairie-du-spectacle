import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/glossaryCard.module.css"
import { JSX } from "preact"
import { ComponentChildren } from "preact"

function GlossaryCard({ fileData }: QuartzComponentProps) {
  // 确保 fileData 存在
  if (!fileData) return null
  
  const { frontmatter } = fileData
  
  // 只为词汇条目类型的内容显示卡片
  // 根据文件路径判断是否为词汇条目
  const filePath = fileData.filePath ?? ""
  if (!filePath.includes('書局概念Glossary(DB)')) {
    return null
  }

  // 安全地转换 title 为 ComponentChildren 类型
  const title = frontmatter?.title 
    ? String(frontmatter.title) as unknown as ComponentChildren
    : fileData.title;

  return (
    <div className={style.glossaryCard}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <h2 className={style.title}>
              {title}
            </h2>
          </div>
          
          <div className={style.details}>
            {frontmatter?.Description && (
              <div className={style.infoRow}>
                <span className={style.label}>描述:</span>
                <span className={style.value}>{frontmatter.Description as string}</span>
              </div>
            )}
          </div>
        </div>
        
        {frontmatter?.avatar && (
          <div className={style.avatarContainer}>
            <div className={style.avatar} dangerouslySetInnerHTML={{ __html: String(frontmatter.avatar) }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default (() => GlossaryCard) satisfies QuartzComponentConstructor 