declare module 'masonry-layout' {
  interface MasonryOptions {
    itemSelector?: string;
    columnWidth?: number | string;
    gutter?: number;
    percentPosition?: boolean;
    // 其他 Masonry 選項
  }
  
  export default class Masonry {
    constructor(element: Element | string, options?: MasonryOptions);
    layout(): void;
    reloadItems(): void;
  }
}
