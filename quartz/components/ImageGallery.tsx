import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { useEffect, useState } from "preact/hooks"
import style from "./styles/imageGallery.module.css"
import { resolveRelative } from "../util/path"

// 为不存在的模块声明类型
declare module 'masonry-layout';
declare module 'imagesloaded';

// 通用图片画廊组件
function ImageGallery({ fileData, allFiles, displayClass }: QuartzComponentProps) {
  const [masonry, setMasonry] = useState<any>(null)
  const [images, setImages] = useState<string[]>([])
  
  // 从前置数据中获取图片文件夹路径
  const galleryFolder = fileData.frontmatter?.galleryFolder || ""
  const galleryTitle = fileData.frontmatter?.galleryTitle || "图片画廊"
  
  useEffect(() => {
    // 查找所有图片文件
    if (typeof window !== 'undefined') {
      // 检查是否有直接在frontmatter中指定的图片列表
      const directImages = fileData.frontmatter?.images as string[] || []
      if (directImages && directImages.length > 0) {
        setImages(directImages)
        return
      }
      
      // 找出所有以指定路径开头的文件
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.PNG', '.JPG', '.JPEG', '.GIF', '.SVG', '.WEBP']
      
      // 直接从静态资源路径构建图片URL
      const folderPath = galleryFolder as string
      if (folderPath && folderPath.startsWith('_Attach')) {
        // 尝试通过public文件夹直接访问图片
        const baseUrl = '/static'
        
        // 尝试直接从allFiles中找图片
        const imageFiles = allFiles.filter(file => {
          const filePath = file.slug || ""
          return filePath.includes('_Attach') && 
                 (folderPath === '_Attach' || filePath.includes(folderPath)) && 
                 imageExtensions.some(ext => filePath.toLowerCase().endsWith(ext.toLowerCase()))
        })
        
        if (imageFiles.length > 0) {
          const imagePaths = imageFiles.map(file => '/' + (file.slug || ""))
          setImages(imagePaths)
        } else {
          // 如果没有找到，试着硬编码一些常见路径进行测试
          const testPaths = [
            `${baseUrl}/_Attach/Image/avatar/tachie/hcz-tachie.PNG`,
            `${baseUrl}/_Attach/Image/HCZ.png`,
            `${baseUrl}/_Attach/Image/DSL.png`
          ]
          setImages(testPaths)
        }
      } else {
        // 使用原始方法从allFiles中过滤
        const imageFiles = allFiles.filter(file => {
          const filePath = file.slug || ""
          return filePath.startsWith(galleryFolder as string) && 
            imageExtensions.some(ext => filePath.toLowerCase().endsWith(ext.toLowerCase()))
        })
        
        const imagePaths = imageFiles.map(file => '/' + (file.slug || ""))
        setImages(imagePaths)
      }
    }
  }, [galleryFolder, allFiles, fileData.frontmatter])
  
  // 初始化 Masonry
  useEffect(() => {
    if (typeof window !== 'undefined' && images.length > 0) {
      // 使用 imagesLoaded 确保所有图片加载完成
      const loadMasonry = async () => {
        try {
          const Masonry = (await import('masonry-layout')).default
          const imagesLoaded = (await import('imagesloaded')).default
          
          const grid = document.querySelector('.gallery-grid')
          if (grid) {
            const msnry = new Masonry(grid, {
              itemSelector: '.gallery-item',
              columnWidth: '.gallery-sizer',
              percentPosition: true,
              gutter: 10
            })
            
            // 当所有图片加载完成后重新布局
            imagesLoaded(grid).on('progress', () => {
              msnry.layout()
            })
            
            setMasonry(msnry)
          }
        } catch (error) {
          console.error("Error loading Masonry:", error)
        }
      }
      
      loadMasonry()
    }
    
    return () => {
      // 清理代码
    }
  }, [images.length])
  
  if (images.length === 0) {
    return <div className={style.noGallery}>没有找到图片</div>
  }
  
  return (
    <div className={`${style.galleryContainer} ${displayClass ?? ""}`}>
      <h1 className={style.galleryTitle}>{galleryTitle}</h1>
      
      <div className="gallery-grid">
        <div className="gallery-sizer"></div>
        {images.map((imgPath, index) => (
          <div key={index} className="gallery-item">
            <a href={imgPath} target="_blank" rel="noopener noreferrer">
              <img src={imgPath} alt={`图片 ${index + 1}`} loading="lazy" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

// 确保CSS属性为string类型
ImageGallery.css = style as unknown as string
export default (() => ImageGallery) satisfies QuartzComponentConstructor 