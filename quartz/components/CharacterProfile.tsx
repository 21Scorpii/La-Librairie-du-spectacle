import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const CharacterProfile: QuartzComponentConstructor = () => {
  function Component(props: QuartzComponentProps) {
    const { fileData } = props
    const frontmatter = fileData.frontmatter

    // 完整的調試信息
    console.log("CharacterProfile - Full frontmatter:", JSON.stringify(frontmatter, null, 2))
    
    // 檢查屬性是否存在 - 移除 category 檢查，先看整個屬性
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
            <strong>性别:</strong> {Array.isArray(frontmatter.Gender) 
              ? frontmatter.Gender.join(", ") 
              : frontmatter.Gender}
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
        
        {frontmatter.aliases && (
          <div className="character-attr">
            <strong>别名:</strong> {Array.isArray(frontmatter.aliases) 
              ? frontmatter.aliases.join(", ") 
              : frontmatter.aliases}
          </div>
        )}
        
        {/* 添加一個可見的调试信息 */}
        <div className="debug-info" style={{ fontSize: '0.8em', color: '#888', marginTop: '1em' }}>
          <details>
            <summary>調試信息</summary>
            <pre>{JSON.stringify(frontmatter, null, 2)}</pre>
          </details>
        </div>
      </div>
    )
  }

  return {
    Component,
  }
} 