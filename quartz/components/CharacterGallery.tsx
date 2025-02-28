import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { useEffect, useState } from "preact/hooks"
import style from "./styles/characterGallery.module.css"

// 定義畫廊組件
function CharacterGallery({ fileData, allFiles }: QuartzComponentProps) {
  const [masonry, setMasonry] = useState(null)
  const characterName = fileData.frontmatter?.RealName || ""
  
  // 查找相關角色文件
  const characterFile = allFiles.find(file => 
    file.frontmatter?.RealName === characterName && 
    file.frontmatter?.category === "Chara"
  )
  
  const galleryImages = characterFile?.frontmatter?.gallery || []
  
  // 初始化 Masonry
  useEffect(() => {
    if (typeof window !== 'undefined' && galleryImages.length > 0) {
      // 使用 imagesLoaded 確保所有圖片加載完成
      const loadMasonry = async () => {
        try {
          const Masonry = (await import('masonry-layout')).default
          const imagesLoaded = (await import('imagesloaded')).default
          
          const grid = document.querySelector('.gallery-grid')
          const msnry = new Masonry(grid, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-sizer',
            percentPosition: true,
            gutter: 10
          })
          
          // 當所有圖片加載完成後重新佈局
          imagesLoaded(grid).on('progress', () => {
            msnry.layout()
          })
          
          setMasonry(msnry)
        } catch (error) {
          console.error("Error loading Masonry:", error)
        }
      }
      
      loadMasonry()
    }
    
    return () => {
      // 清理代碼（如果需要）
    }
  }, [galleryImages.length])
  
  if (!characterName || galleryImages.length === 0) {
    return <div className={style.noGallery}>此角色沒有相關圖片</div>
  }
  
  return (
    <div className={style.galleryContainer}>
      <h1 className={style.galleryTitle}>{characterName} 的畫廊</h1>
      
      <div className="gallery-grid">
        <div className="gallery-sizer"></div>
        {galleryImages.map((imgPath, index) => (
          <div key={index} className="gallery-item">
            <img src={imgPath} alt={`${characterName} - 圖片 ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <div className={style.backLink}>
        <a href={`/${encodeURIComponent(characterName)}`}>返回角色頁面</a>
      </div>
    </div>
  )
}

CharacterGallery.css = style
export default (() => CharacterGallery) satisfies QuartzComponentConstructor 