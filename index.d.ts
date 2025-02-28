declare module "*.scss" {
  const content: string
  export = content
}

// dom custom event
interface CustomEventMap {
  nav: CustomEvent<{ url: FullSlug }>
  themechange: CustomEvent<{ theme: "light" | "dark" }>
}

declare const fetchData: Promise<ContentIndex>

// 允许使用 .png 等文件类型
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
declare module "*.gif"
declare module "*.webp"

// 允许导入CSS模块
declare module "*.module.css" {
  const classes: { [key: string]: string }
  export default classes
}

// 用于masonry和imagesloaded库
declare module "masonry-layout" {
  export default class Masonry {
    constructor(
      elem: Element | string,
      options?: {
        itemSelector?: string
        columnWidth?: string | number
        percentPosition?: boolean
        gutter?: number
        [key: string]: any
      }
    )
    layout(): void
  }
}

declare module "imagesloaded" {
  interface ImagesLoaded {
    on(event: string, callback: () => void): void
  }
  
  function imagesLoaded(elem: Element | string): ImagesLoaded;
  export default imagesLoaded;
}
