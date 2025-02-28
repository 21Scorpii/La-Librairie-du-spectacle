import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/characterCard.module.css"

function CharacterCard({ fileData }: QuartzComponentProps) {
  const frontmatter = fileData.frontmatter
  
  // 只为角色类型的内容显示卡片
  if (frontmatter.category !== "Chara") {
    return null
  }

  return (
    <div className={style.characterCard}>
      <div className={style.header}>
        <h2 className={style.name}>
          {frontmatter.RealName || "未知姓名"}
          {frontmatter.Nickname && <span className={style.nickname}>({frontmatter.Nickname})</span>}
        </h2>
        {frontmatter.sticker && (
          <div className={style.sticker}>
            {/* 可以根据 sticker 属性显示对应的图标 */}
            {frontmatter.sticker}
          </div>
        )}
      </div>
      
      <div className={style.details}>
        <div className={style.infoRow}>
          <span className={style.label}>性别:</span>
          <span className={style.value}>
            {Array.isArray(frontmatter.Gender) ? frontmatter.Gender.join(", ") : frontmatter.Gender || "未知"}
          </span>
        </div>
        
        <div className={style.infoRow}>
          <span className={style.label}>年龄:</span>
          <span className={style.value}>{frontmatter.Age || "未知"}</span>
        </div>
        
        <div className={style.infoRow}>
          <span className={style.label}>身高:</span>
          <span className={style.value}>{frontmatter.Height || "未知"} cm</span>
        </div>
        
        <div className={style.infoRow}>
          <span className={style.label}>身份:</span>
          <span className={style.value}>{frontmatter.Identity || "未知"}</span>
        </div>
        
        <div className={style.infoRow}>
          <span className={style.label}>正面感情觸發物:</span>
          <span className={style.value}>{frontmatter.正面感情觸發物 || "无"}</span>
        </div>
        
        <div className={style.infoRow}>
          <span className={style.label}>負面感情觸發物:</span>
          <span className={style.value}>{frontmatter.負面感情觸發物 || "无"}</span>
        </div>
      </div>
    </div>
  )
}

export default (() => CharacterCard) satisfies QuartzComponentConstructor 