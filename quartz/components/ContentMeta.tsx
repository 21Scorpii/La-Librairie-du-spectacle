import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    const frontmatter = fileData.frontmatter

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      // Create a function to display character information
      const displayCharacterInfo = () => {
        if (frontmatter?.category !== "Chara") return null

        return (
          <div className="character-info">
            {frontmatter.RealName && (
              <p><strong>姓名:</strong> {frontmatter.RealName}</p>
            )}
            {frontmatter.Gender && (
              <p><strong>性别:</strong> {Array.isArray(frontmatter.Gender) ? frontmatter.Gender.join(", ") : frontmatter.Gender}</p>
            )}
            {frontmatter.Age && (
              <p><strong>年齡:</strong> {frontmatter.Age}</p>
            )}
            {frontmatter.Nickname && (
              <p><strong>昵稱:</strong> {frontmatter.Nickname}</p>
            )}
            {frontmatter.Height && (
              <p><strong>身高:</strong> {frontmatter.Height} cm</p>
            )}
            {frontmatter.Identity && (
              <p><strong>身份:</strong> {frontmatter.Identity}</p>
            )}
            {frontmatter.正面感情觸發物 && (
              <p><strong>正面感情觸發物:</strong> {frontmatter.正面感情觸發物}</p>
            )}
            {frontmatter.負面感情觸發物 && (
              <p><strong>負面感情觸發物:</strong> {frontmatter.負面感情觸發物}</p>
            )}
          </div>
        )
      }

      // 创建一个函数来显示词汇条目信息
      const displayGlossaryInfo = () => {
        // 检查是否为词汇条目
        const filePath = fileData.filePath ?? ""
        if (!filePath.includes('書局概念Glossary(DB)')) return null

        return (
          <div className="glossary-info">
            {frontmatter?.Description && (
              <p><strong>Dscription:</strong> {frontmatter.Description as string}</p>
            )}
            {frontmatter?.avatar && (
              <div className="glossary-avatar">
                <div dangerouslySetInnerHTML={{ __html: String(frontmatter.avatar) }} />
              </div>
            )}
          </div>
        )
      }

      return (
        <footer class={classNames(displayClass, "content-meta")}>
          {segments}
          {displayCharacterInfo()}
          {displayGlossaryInfo()}
        </footer>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
