import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const CharacterProfile: QuartzComponentConstructor = () => {
  function Component(props: QuartzComponentProps) {
    const { fileData } = props
    const frontmatter = fileData.frontmatter

    // 調試信息
    console.log("Rendering CharacterProfile for:", frontmatter.RealName)

    // 檢查是否是角色頁面
    if (frontmatter.category !== "Chara") {
      return null
    }

    return (
      <div className="character-profile">
        <h2>角色信息</h2>
        
        {frontmatter.RealName && (
          <div className="character-attr">
            <strong>真实姓名:</strong> {frontmatter.RealName}
          </div>
        )}
        
        {frontmatter.Gender && (
          <div className="character-attr">
            <strong>性别:</strong> {frontmatter.Gender.join(", ")}
          </div>
        )}
        
        {frontmatter.Height && (
          <div className="character-attr">
            <strong>身高:</strong> {frontmatter.Height} cm
          </div>
        )}
        
        {frontmatter.sticker && (
          <div className="character-attr">
            <strong>标签:</strong> {frontmatter.sticker}
          </div>
        )}
        
        {frontmatter.正面感情觸發物 && (
          <div className="character-attr">
            <strong>正面感情触发物:</strong> {frontmatter.正面感情觸發物}
          </div>
        )}
        
        {frontmatter.負面感情觸發物 && (
          <div className="character-attr">
            <strong>负面感情触发物:</strong> {frontmatter.負面感情觸發物}
          </div>
        )}
        
        {frontmatter.aliases && frontmatter.aliases.length > 0 && (
          <div className="character-attr">
            <strong>别名:</strong> {frontmatter.aliases.join(", ")}
          </div>
        )}
      </div>
    )
  }

  return {
    Component,
  }
} 