---
title: 角色畫廊
---

<!-- 引入 Glide.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css">
<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide" defer></script>

<!-- 添加 lightGallery 和 mediumZoom 插件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lightgallery.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lg-zoom.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lg-medium-zoom.min.css">
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/lightgallery.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/plugins/zoom/lg-zoom.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/plugins/mediumZoom/lg-medium-zoom.min.js" defer></script>

<!-- 角色快速跳轉 -->
<div class="character-nav" id="character-nav">
  <!-- 按钮将由脚本动态生成 -->
</div>

<!-- 瀑布流畫廊 -->
<div id="masonry-gallery" class="masonry-container">
  <!-- 图片项将由脚本动态生成 -->
</div>

<!-- 每個角色的輪播圖 -->
<div class="character-slides" id="character-slides">
  <!-- 轮播将由脚本动态生成 -->
</div>

<style>
/* 基本樣式 */
.character-slides {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.character-slider {
  display: none;
  margin: 20px auto;
  width: 100%;
}

.character-slider.active {
  display: block;
}

.glide__slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 圖片容器樣式 */
.image-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.glide__slide img {
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  /* 移除陰影 */
  /* box-shadow: 0 4px 8px rgba(0,0,0,0.1); */
}

/* 角色導航樣式 */
.character-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px auto;
  max-width: 800px;
}

.char-btn {
  padding: 8px 16px;
  border: 1px solid var(--lightgray);
  border-radius: 20px;
  background: var(--light);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9em;
}

.char-btn:hover,
.char-btn.active {
  background: var(--secondary);
  color: var(--light);
}

/* 說明文字樣式 - 完全重寫 */
.slide-caption {
  margin: 20px auto 0;
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  box-sizing: border-box;
}

/* 隱藏所有Quartz生成的懸停元素 */
.slide-caption h3 a:after,
.slide-caption h3 a:before,
.slide-caption h3:after,
.slide-caption h3:before,
.slide-caption h3 .internal-link:after,
.slide-caption h3 .internal-link:before,
.slide-caption * .heading-anchor:after,
.slide-caption * .heading-anchor:before,
.slide-caption * .internal-link:after,
.slide-caption * .internal-link:before {
  display: none !important;
  opacity: 0 !important;
  content: none !important;
  visibility: hidden !important;
}

/* 完全重置標題樣式 */
.slide-caption h3 {
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  position: static;
  line-height: 1.5;
  font-size: 1.5em;
}

/* 強制覆蓋任何可能的Quartz樣式 */
.slide-caption h3,
.slide-caption h3 a,
.slide-caption h3 span,
.slide-caption h3 * {
  display: inline !important;
  text-align: center !important;
  position: static !important;
}

/* 確保段落文本也完全居中 */
.slide-caption p {
  display: block;
  width: 100%;
  margin: 10px auto;
  text-align: center;
  color: var(--gray);
}

.character-link {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  background: var(--secondary);
  color: var(--light);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.character-link:hover {
  opacity: 0.8;
}

/* 隱藏被篩選的幻燈片 */
.glide__slide.hidden {
  display: none;
}

/* 修改導航箭頭樣式 */
.glide__arrow {
  position: absolute;
  top: 50%;

  background: var(--light);
  color: var(--secondary);
  border: 1px solid var(--lightgray);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  line-height: 1;
  
  /* 增加陰影效果，提高可見度 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 適應日/夜間模式 */
@media (prefers-color-scheme: light) {
  .glide__arrow {
    /* 日間模式下增強陰影 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
    /* 確保文字在背景上可見 */
    color: var(--dark);
  }
}

@media (prefers-color-scheme: dark) {
  .glide__arrow {
    /* 夜間模式調整 */
    background: var(--dark);
    color: var(--light);
    border-color: var(--secondary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.glide__arrow:hover {
  background: var(--secondary);
  color: var(--light);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
}

.glide__arrow--left {
  left: 10px;
}

.glide__arrow--right {
  right: 10px;
}

/* 修改 glide__track 容器，增加底部間距 */
.glide__track {
  position: relative;
  padding-bottom: 40px; /* 為導航點留出空間 */
}

/* 重新定位導航點 */
.glide__bullets {
  position: absolute;
  bottom: 10px; /* 從底部向上移動 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 5; /* 確保在其他元素上方 */
  padding: 5px 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景增強可見度 */
}

/* 適應暗色模式的導航點背景 */
@media (prefers-color-scheme: dark) {
  .glide__bullets {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

/* 增加輪播容器和說明文字的間距 */
.character-slider {
  margin-bottom: 30px;
}

.slide-caption {
  margin-top: 20px; /* 增加與導航點的距離 */
  padding-top: 5px;
  border-top: 1px solid var(--lightgray); /* 添加分隔線增強視覺區分 */
}

/* 增強導航點可視性 */
.glide__bullet {
  width: 12px;
  height: 12px;
  opacity: 0.7;
  background-color: #777;
  border: none;
  border-radius: 50%;
  margin: 0 3px;
  padding: 0;
  cursor: pointer;
}

.glide__bullet--active {
  opacity: 1;
  background-color: var(--secondary);
  transform: scale(1.3);
}

/* 修正輪播容器和內容的對齊問題 */
.glide, .glide__track, .glide__slides {
  width: 100%;
  margin: 0 auto;
}

.glide__slides {
  align-items: center;
  justify-content: center;
}

/* 全局覆蓋Quartz的標題樣式 - 更強力的選擇器 */
body .article .content h1, 
body .article .content h2,
body .article .content h3,
body .article .content h4,
body .article .content h5,
body .article .content h6,
body .article .content .slide-caption h3,
.article .content h1,
.article .content h2,
.article .content h3,
.article .content h4,
.article .content h5,
.article .content h6,
.article .content .slide-caption h3 {
  text-align: center !important;
}

/* 徹底禁用所有的懸停圖標 */
body .article a.internal-link::after,
body .article a.tag::after,
body .article a.heading-anchor::after,
body .article .slide-caption a::after,
body .article .slide-caption h3::after,
.article a.internal-link::after,
.article a.tag::after,
.article a.heading-anchor::after,
.article .slide-caption a::after,
.article .slide-caption h3::after {
  display: none !important;
  content: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

/* 清除任何可能的浮動影響 */
.slide-caption:after {
  content: "";
  display: table;
  clear: both;
}

/* 強制所有文本元素居中對齊 */
.slide-caption *,
.slide-caption h3,
.slide-caption p,
.slide-caption a {
  text-align: center !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

/* 為確保懸停圖標絕對不顯示，使用更激進的方式 */
.slide-caption h3:before,
.slide-caption h3:after,
.slide-caption a:before,
.slide-caption a:after {
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  overflow: hidden !important;
  pointer-events: none !important;
  z-index: -9999 !important;
  content: "" !important;
}

/* 瀑布流畫廊樣式 */
.masonry-container {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  column-count: 3;
  column-gap: 2px; /* 進一步縮小間距到2px */
  display: block; /* 默認顯示，不再使用none隱藏 */
}

@media (max-width: 1100px) {
  .masonry-container {
    column-count: 2;
  }
}

@media (max-width: 700px) {
  .masonry-container {
    column-count: 1;
  }
}

.masonry-container.active {
  display: block;
}

/* 當瀑布流處於全部模式時，隱藏圖片說明 */
.masonry-container.all-mode .image-caption {
  display: none;
}

/* 始终隐藏所有图片说明 */
.image-caption {
  display: none !important;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 2px; /* 進一步縮小間距到2px */
  display: block; /* 默認顯示所有項目 */
  cursor: pointer;
}

.masonry-item.show {
  display: block;
}

.masonry-item .image-container {
  position: relative;
  overflow: hidden;
  border-radius: 4px; /* 縮小圓角 */
  transition: transform 0.3s ease;
  display: block;
  width: 100%;
  padding: 0; /* 去除所有內邊距 */
  margin: 0; /* 去除所有外邊距 */
}

.masonry-item .image-container:hover {
  transform: translateY(-5px);
  /* 移除陰影 */
  /* box-shadow: 0 8px 16px rgba(0,0,0,0.2); */
}

.masonry-item figure.blog-images {
  margin: 0; /* 去除figure預設的margin */
  padding: 0; /* 去除figure預設的padding */
  width: 100%;
  display: block;
}

.masonry-item img {
  width: 100%;
  display: block;
  border-radius: 4px; /* 縮小圓角 */
  margin: 0; /* 去除所有外邊距 */
  padding: 0; /* 去除所有內邊距 */
}

.masonry-item .image-caption {
  padding: 15px;
  background-color: var(--light);
  border-radius: 0 0 8px 8px;
  text-align: center;
}

/* 適應暗色模式 */
@media (prefers-color-scheme: dark) {
  .masonry-item .image-caption {
    background-color: var(--dark);
  }
}

.masonry-item .image-caption h3 {
  margin: 0 0 8px 0;
  font-size: 1.2em;
}

.masonry-item .image-caption p {
  margin: 8px 0;
  font-size: 0.9em;
  color: var(--gray);
}

/* lightGallery 相關樣式 */
.lg-backdrop {
  background-color: rgba(0, 0, 0, 0.85);
}

/* Medium Zoom 樣式（參考官方示例） */
.masonry-item .image-container {
  position: relative;
  cursor: zoom-in;
}

.masonry-item .image-container img {
  cursor: zoom-in;
  transition: opacity 0.5s;
}

/* Medium Zoom 動畫相關樣式 */
.lg-medium-zoom-item {
  cursor: zoom-in;
}

.lg-medium-zoom {
  background-color: rgba(0, 0, 0, 0.85) !important; /* 修改為半透明黑色背景 */
}

/* 禁用所有缩放动画效果 */
.lg-outer.lg-medium-zoom.lg-zoom-drag-transition .lg-image {
  transition: none !important;
}

.lg-outer.lg-medium-zoom .lg-item {
  background-color: transparent !important;
}

.lg-medium-zoom .lg-img-wrap {
  padding: 0 !important;
  /* 移除变换原点设置 */
  transform-origin: center center !important;
}

/* 移除图片过渡效果 */
.lg-medium-zoom .lg-image {
  transform-origin: center center !important;
  transition: none !important;
}

.lg-medium-zoom .lg-toolbar {
  background: transparent;
}

.lg-medium-zoom .lg-close {
  position: fixed;
  right: 20px;
  top: 20px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: #333;
  transition: background 0.3s ease;
}

.lg-medium-zoom .lg-close:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 禁用所有过渡动画效果 */
.lg-medium-zoom-enter, 
.lg-medium-zoom-leaving {
  transform-origin: center center !important;
  transition: none !important;
}

/* 禁用所有CSS动画 */
.lg-css3.lg-medium-zoom .lg-item.lg-prev-slide,
.lg-css3.lg-medium-zoom .lg-item.lg-next-slide,
.lg-css3.lg-medium-zoom .lg-item.lg-current {
  transform-origin: center center !important;
  transition: none !important;
}

/* 暗色模式下的調整 */
@media (prefers-color-scheme: dark) {
  .lg-medium-zoom {
    background-color: rgba(0, 0, 0, 0.85) !important; /* 保持与亮色模式一致的半透明黑色背景 */
  }
  
  .lg-medium-zoom .lg-close {
    color: #ccc;
    background: rgba(255, 255, 255, 0.15);
  }
  
  .lg-medium-zoom .lg-close:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* 全局禁用 lightGallery 所有過渡效果 */
.lg-css3.lg-fade .lg-item {
  transition: none !important;
}

.lg-css3.lg-fade .lg-item.lg-prev-slide,
.lg-css3.lg-fade .lg-item.lg-next-slide,
.lg-css3.lg-fade .lg-item.lg-current {
  transition: none !important;
}

.lg-css3.lg-slide.lg-use-css3 .lg-item {
  transition: none !important;
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide,
.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide,
.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {
  transition: none !important;
}

.lg-css3.lg-zoom-in .lg-item {
  transition: none !important;
}

.lg-css3.lg-zoom-in .lg-item.lg-prev-slide,
.lg-css3.lg-zoom-in .lg-item.lg-next-slide,
.lg-css3.lg-zoom-in .lg-item.lg-current {
  transition: none !important;
}

/* 禁用所有可能的过渡效果 */
.lg-outer * {
  transition: none !important;
}

/* 确保快速显示与隐藏 */
.lg-backdrop {
  transition: none !important;
  animation: none !important;
}
</style>

<script>
(function() {
  // 定義角色數據 - 只需要編輯這個數組來添加新角色
  const characterGalleryData = [
    {
      id: 'hcz',
      name: '黑村 紫',
      description: '大學生(計算機科學)/ 構成創始人',
      profileLink: '人物設定(DB)/黑村-紫',
      images: [
        {
          src: '_Attach/Image/avatar/tachie/hcz-tachie.PNG',
          alt: '黑村紫立繪',
          fallback: null // 無備用圖像
        },
        {
          src: '_Attach/Image/HCZ.png',
          alt: '黑村紫',
          fallback: null
        },
        {
          src: '_Attach/Image/IMG_6340.JPG',
          alt: '鼠紫',
          fallback: null
        }
      ]
    },
    {
      id: 'azmt',
      name: '東山 旅',
      description: '大學生/人類社會的高效低功耗垃圾回收站',
      profileLink: '人物設定(DB)/東山-旅',
      images: [
        {
          src: '_Attach/Image/avatar/tachie/dsl-tachie.PNG',
          alt: '東山旅立繪',
          fallback: '_Attach/Image/avatar/tachie/dsl-tachie.png'
        },
        {
          src: '_Attach/Image/IMG_6340.JPG',
          alt: '鼠紫',
          fallback: '_Attach/Image/IMG_6340.jpg'
        },
        {
          src: '_Attach/Image/DSL.png',
          alt: '東山旅其他立繪',
          fallback: '_Attach/Image/DSL.PNG'
        }
      ]
    },
    {
      id: 'stn',
      name: '赤井 刹那',
      description: '仿生人',
      profileLink: '人物設定(DB)/赤井-刹那',
      images: [
        {
          src: '_Attach/Image/stn2.png',
          alt: '實驗室',
          fallback: null // 移除相同的备用路径，使用null更合适
        }
      ]
    },
    {
      id: 'kln',
      name: 'Klein Klein',
      description: '研究員',
      profileLink: '人物設定(DB)/Klein-Klein',
      images: [
        {
          src: '_Attach/Image/avatar/tachie/kln-tachie.PNG',
          alt: 'Klein立繪',
          fallback: '_Attach/Image/avatar/tachie/kln-tachie.png'
        }
      ]
    }
    // 添加新角色只需在此處添加新的對象
    // 例如:
    // {
    //   id: 'new-character-id',
    //   name: '新角色名稱',
    //   description: '角色描述',
    //   profileLink: '角色檔案鏈接',
    //   images: [
    //     {
    //       src: '圖片路徑',
    //       alt: '圖片描述',
    //       fallback: '備用圖片路徑（如果有）或null'
    //     },
    //     // 更多圖片...
    //   ]
    // }
  ];

  // 確保腳本只會執行一次的標記
  let characterGalleryInitialized = false;
  let lightGalleryInstance = null;
  
  // 處理所有角色數據，確保profileLink中的空格被替換為短橫線
  function processCharacterData() {
    characterGalleryData.forEach(character => {
      // 如果profileLink中含有空格，替換為短橫線
      if (character.profileLink.includes(' ')) {
        character.profileLink = character.profileLink.replace(/\s+/g, '-');
        console.log(`已將 ${character.name} 的profileLink空格替換為短橫線: ${character.profileLink}`);
      }
    });
  }
  
  // 添加對 Quartz SPA 導航事件的監聽
  document.addEventListener('nav', function() {
    console.log('Quartz 導航事件檢測到，重新初始化畫廊');
    // 重置初始化標誌，允許重新初始化
    characterGalleryInitialized = false;
    
    // 如果存在 lightGallery 實例，先銷毀它
    if (lightGalleryInstance) {
      try {
        console.log('銷毀先前的lightGallery實例');
        lightGalleryInstance.destroy();
      } catch (e) {
        console.error('銷毀lightGallery實例時出錯:', e);
      } finally {
        lightGalleryInstance = null;
      }
    }
    
    // 嘗試初始化畫廊
    if(typeof Glide !== 'undefined') {
      setTimeout(initGallery, 100); // 延迟一点执行，确保DOM已更新
    } else {
      waitForGlide();
    }
  });

  // 初始化畫廊函數
  function initGallery() {
    if(characterGalleryInitialized) return;
    characterGalleryInitialized = true;
    
    console.log('初始化角色畫廊...');
    
    // 處理角色數據，確保profileLink格式正確
    processCharacterData();
    
    const charactersContainer = document.getElementById('character-slides');
    const masonryContainer = document.getElementById('masonry-gallery');
    const navContainer = document.getElementById('character-nav');
    
    // 清空容器
    if(!charactersContainer || !masonryContainer || !navContainer) {
      console.error('無法找到畫廊容器元素');
      return;
    }

    charactersContainer.innerHTML = '';
    masonryContainer.innerHTML = '';
    navContainer.innerHTML = '';
    
    // 添加"全部"按鈕
    const allButton = document.createElement('button');
    allButton.className = 'char-btn active'; // 默認設置為激活狀態
    allButton.setAttribute('data-target', 'all');
    allButton.textContent = '全部';
    navContainer.appendChild(allButton);
    
    // 創建角色按鈕和滑塊
    characterGalleryData.forEach((character, index) => {
      // 創建角色按鈕
      const charButton = document.createElement('button');
      charButton.className = 'char-btn';
      charButton.setAttribute('data-target', character.id);
      charButton.textContent = character.name;
      navContainer.appendChild(charButton);
      
      // 創建瀑布流項目
      character.images.forEach((image, imgIndex) => {
        const masonryItem = document.createElement('div');
        masonryItem.className = 'masonry-item';
        masonryItem.setAttribute('data-character', character.id);
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        // 創建類似官方示例的 figure 元素
        const figure = document.createElement('figure');
        figure.className = 'blog-images';
        figure.setAttribute('data-src', encodeURI(image.src));
        figure.setAttribute('data-lg-size', '1400-1000'); // 設置大圖尺寸
        // 設置背景色（根據明暗模式自動切換）
        figure.setAttribute('lg-background-color', 'auto');
        
        const img = document.createElement('img');
        img.src = encodeURI(image.src);
        img.alt = image.alt;
        img.setAttribute('data-image-path', image.src);
        img.setAttribute('data-character-name', character.name);
        img.setAttribute('data-description', character.description);
        img.setAttribute('data-profile-link', character.profileLink);
        
        // 添加備用圖片處理
        if (image.fallback) {
          img.onerror = function() {
            this.onerror = null;
            console.log(`图片加载失败: ${image.src}，尝试使用备用图片: ${image.fallback}`);
            this.src = encodeURI(image.fallback);
            figure.setAttribute('data-src', encodeURI(image.fallback));
          };
        } else {
          img.onerror = function() {
            console.error(`图片加载失败，无备用图片: ${image.src}`);
          };
        }
        
        figure.appendChild(img);
        
        // 添加点击事件监听器
        figure.addEventListener('click', function(e) {
          e.preventDefault();
          console.log('点击了图片元素:', this);
          
          // 手动打开 lightGallery
          if (lightGalleryInstance) {
            const visibleItems = document.querySelectorAll('.masonry-item.show figure.blog-images');
            const currentIndex = Array.from(visibleItems).indexOf(this);
            console.log(`点击了图片，打开 lightGallery，索引: ${currentIndex}`);
            lightGalleryInstance.openGallery(currentIndex >= 0 ? currentIndex : 0);
          } else {
            console.log('lightGallery 实例不存在，嘗試重新初始化');
            initLightGallery();
          }
          return false;
        });
        
        imageContainer.appendChild(figure);
        masonryItem.appendChild(imageContainer);
        masonryContainer.appendChild(masonryItem);
      });
      
      // 創建輪播圖
      const sliderDiv = document.createElement('div');
      sliderDiv.id = `${character.id}-slider`;
      sliderDiv.className = 'glide character-slider';
      
      // 輪播軌道
      const trackDiv = document.createElement('div');
      trackDiv.className = 'glide__track';
      trackDiv.setAttribute('data-glide-el', 'track');
      
      // 輪播幻燈片
      const slidesList = document.createElement('ul');
      slidesList.className = 'glide__slides';
      
      // 創建幻燈片
      character.images.forEach(image => {
        const slide = document.createElement('li');
        slide.className = 'glide__slide';
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = encodeURI(image.src);
        img.alt = image.alt;
        
        // 添加備用圖片處理
        if (image.fallback) {
          img.onerror = function() {
            this.onerror = null;
            console.log(`图片加载失败: ${image.src}，尝试使用备用图片: ${image.fallback}`);
            this.src = encodeURI(image.fallback);
          };
        } else {
          img.onerror = function() {
            console.error(`图片加载失败，无备用图片: ${image.src}`);
          };
        }
        
        imageContainer.appendChild(img);
        slide.appendChild(imageContainer);
        slidesList.appendChild(slide);
      });
      
      // 創建輪播點
      const bulletsDiv = document.createElement('div');
      bulletsDiv.className = 'glide__bullets';
      bulletsDiv.setAttribute('data-glide-el', 'controls[nav]');
      
      character.images.forEach((_, imageIndex) => {
        const bullet = document.createElement('button');
        bullet.className = 'glide__bullet';
        bullet.setAttribute('data-glide-dir', `=${imageIndex}`);
        bulletsDiv.appendChild(bullet);
      });
      
      // 創建輪播箭頭
      const arrowsDiv = document.createElement('div');
      arrowsDiv.className = 'glide__arrows';
      arrowsDiv.setAttribute('data-glide-el', 'controls');
      
      const leftArrow = document.createElement('button');
      leftArrow.className = 'glide__arrow glide__arrow--left';
      leftArrow.setAttribute('data-glide-dir', '<');
      leftArrow.textContent = '←';
      
      const rightArrow = document.createElement('button');
      rightArrow.className = 'glide__arrow glide__arrow--right';
      rightArrow.setAttribute('data-glide-dir', '>');
      rightArrow.textContent = '→';
      
      arrowsDiv.appendChild(leftArrow);
      arrowsDiv.appendChild(rightArrow);
      
      // 將軌道和控制元素添加到輪播
      trackDiv.appendChild(slidesList);
      trackDiv.appendChild(bulletsDiv);
      trackDiv.appendChild(arrowsDiv);
      sliderDiv.appendChild(trackDiv);
      
      // 創建說明文字
      const captionDiv = document.createElement('div');
      captionDiv.className = 'slide-caption';
      
      const captionTitle = document.createElement('h3');
      captionTitle.textContent = character.name;
      
      const captionDesc = document.createElement('p');
      captionDesc.textContent = character.description;
      
      const captionLink = document.createElement('a');
      captionLink.href = character.profileLink;
      captionLink.className = 'character-link';
      captionLink.textContent = '查看角色檔案';
      
      // 為輪播中的角色链接添加点击事件处理器
      captionLink.addEventListener('click', function(e) {
        e.preventDefault();
        // 使用window.location.href手动跳转，确保使用正确格式的URL
        window.location.href = character.profileLink;
      });
      
      captionDiv.appendChild(captionTitle);
      captionDiv.appendChild(captionDesc);
      captionDiv.appendChild(captionLink);
      
      sliderDiv.appendChild(captionDiv);
      
      // 將輪播添加到容器
      charactersContainer.appendChild(sliderDiv);
    });
    
    // 初始化所有輪播
    const sliders = {};
    
    function initSliders() {
      document.querySelectorAll('.character-slider').forEach(slider => {
        const id = slider.id;
        
        // 如果已經初始化過，先銷毀
        if (sliders[id]) {
          sliders[id].destroy();
        }
        
        // 重新初始化
        try {
          console.log(`初始化輪播: ${id}`);
          sliders[id] = new Glide(`#${id}`, {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
            gap: 0,
            autoplay: 5000,
            hoverpause: true,
            animationDuration: 800
          }).mount();
        } catch (e) {
          console.error(`初始化輪播 ${id} 失敗:`, e);
        }
      });
    }
    
    // 初始化 lightGallery
    function initLightGallery() {
      // 添加調試信息
      console.log('開始初始化 lightGallery...');
      console.log('lightGallery 是否已加載:', typeof lightGallery !== 'undefined');
      console.log('lgZoom 是否已加載:', typeof window.lgZoom !== 'undefined');
      console.log('lgMediumZoom 是否已加載:', typeof window.lgMediumZoom !== 'undefined');
      
      if(typeof lightGallery === 'undefined') {
        console.error('lightGallery 未加載，無法初始化，嘗試手動加載');
        loadLightGalleryManually();
        return;
      }
      
      // 如果已經存在實例，先銷毀
      if(lightGalleryInstance) {
        try {
          console.log('銷毀先前的lightGallery實例');
          lightGalleryInstance.destroy();
        } catch (e) {
          console.error('銷毀lightGallery實例時出錯:', e);
        } finally {
          lightGalleryInstance = null;
        }
      }
      
      try {
        console.log('初始化 lightGallery (MediumZoom模式)...');
        
        // 檢查是否有可見的圖片
        const imgLinks = document.querySelectorAll('.masonry-item.show figure.blog-images');
        if(imgLinks.length === 0) {
          console.log('沒有找到可見的圖片鏈接，無法初始化 lightGallery');
          return;
        }
        
        // 參考官方示例的簡潔配置
        lightGalleryInstance = lightGallery(document.getElementById('masonry-gallery'), {
          selector: '.masonry-item.show figure.blog-images',
          licenseKey: 'GPL3',
          plugins: [lgMediumZoom],
          speed: 500,
          allowMediaOverlap: true,
          download: false,
          counter: false,
          closable: true,
          showMaximizeIcon: false,
          showZoomInOutIcons: false,
          slideEndAnimation: false, // 禁用幻灯片结束动画
          
          // Medium Zoom 設定 - 移除过渡动画
          backdropDuration: 0, // 背景淡入淡出时间设为0
          cssEasing: 'linear', // 使用线性缓动
          easing: 'linear',
          mode: 'lg-medium-zoom',
          preload: 2,
          
          // 禁用缩放动画
          zoomFromOrigin: false, // 禁用从原位置缩放
          
          // Medium Zoom 特有设置
          mediumZoom: {
            margin: 40,            // 边距
            background: 'rgba(0, 0, 0, 0.85)', // 设置为半透明黑色背景
            scrollOffset: 40,      // 滚动偏移
          },
          
          // 禁用不需要的功能
          controls: false,
          thumbnail: false,
          rotate: false,
          fullScreen: false,
          slideDelay: 0, // 取消幻灯片切换延迟
          hideControlOnEnd: true
        });
        
        console.log('成功初始化 MediumZoom 版 lightGallery（已禁用過渡動畫）');
      } catch (e) {
        console.error('初始化 lightGallery 失敗:', e);
        console.error(e.stack);
      }
    }
    
    // 首次初始化
    initSliders();
    
    // 窗口大小變化時重新初始化
    window.addEventListener('resize', function() {
      // 使用防抖技術，避免頻繁調用
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(function() {
        // 獲取當前活動的角色ID
        const activeSlider = document.querySelector('.character-slider.active');
        const activeId = activeSlider ? activeSlider.id.replace('-slider', '') : characterGalleryData[0].id;
        
        // 重新初始化所有輪播
        initSliders();
        
        // 確保當前活動的角色保持顯示
        showCharacter(activeId);
      }, 250);
    });

    // 顯示特定角色的函數
    function showCharacter(targetId) {
      console.log(`嘗試顯示: ${targetId}`);
      
      // 更新按鈕狀態
      document.querySelectorAll('.char-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === targetId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // 如果是"全部"模式
      if (targetId === 'all') {
        // 隱藏輪播視圖
        document.querySelector('.character-slides').style.display = 'none';
        
        // 顯示瀑布流
        const masonryContainer = document.getElementById('masonry-gallery');
        masonryContainer.classList.add('active');
        masonryContainer.style.display = 'block'; // 確保顯示
        
        // 添加全部模式類名，用於隱藏圖片說明
        masonryContainer.classList.add('all-mode');
        
        // 處理重複圖片 - 創建一個集合來跟踪已顯示的圖片路徑
        const shownImagePaths = new Set();
        
        // 先隱藏所有項目
        document.querySelectorAll('.masonry-item').forEach(item => {
          item.classList.remove('show');
          item.style.display = 'none'; // 確保隱藏
        });
        
        // 然後有選擇地顯示項目，避免重複圖片
        document.querySelectorAll('.masonry-item').forEach(item => {
          const img = item.querySelector('img');
          const imagePath = img.getAttribute('data-image-path');
          
          // 如果該圖片路徑尚未顯示，則顯示此項目
          if (!shownImagePaths.has(imagePath)) {
            item.classList.add('show');
            item.style.display = 'block'; // 確保顯示
            shownImagePaths.add(imagePath);
          }
        });
        
        // 在"全部"模式下初始化 lightGallery
        setTimeout(initLightGallery, 100);
        
        return;
      }
      
      // 如果不是"全部"模式，隱藏瀑布流，顯示輪播
      const masonryContainer = document.getElementById('masonry-gallery');
      masonryContainer.classList.remove('active');
      masonryContainer.style.display = 'none'; // 確保隱藏瀑布流
      // 移除全部模式類名
      masonryContainer.classList.remove('all-mode');
      document.querySelector('.character-slides').style.display = 'block';

      // 切換輪播顯示
      document.querySelectorAll('.character-slider').forEach(slider => {
        if (slider.id === `${targetId}-slider`) {
          slider.classList.add('active');
          
          // 確保該輪播已初始化並更新
          if (sliders[slider.id]) {
            setTimeout(() => {
              console.log(`更新輪播: ${slider.id}`);
              sliders[slider.id].update();
            }, 50); // 給DOM一些時間來響應切換
          }
        } else {
          slider.classList.remove('active');
        }
      });
      
      // 在瀑布流中僅顯示當前角色的項目（雖然瀑布流已被隱藏）
      document.querySelectorAll('.masonry-item').forEach(item => {
        if (item.getAttribute('data-character') === targetId) {
          item.classList.add('show');
          item.style.display = 'block'; // 設置但仍然不會顯示因為容器被隱藏
        } else {
          item.classList.remove('show');
          item.style.display = 'none';
        }
      });
      
      // 如果是特定角色模式，初始化它們的輪播圖而不是lightGallery
      if (sliders[`${targetId}-slider`]) {
        setTimeout(() => sliders[`${targetId}-slider`].update(), 100);
      }
    }

    // 處理按鈕點擊
    document.querySelectorAll('.char-btn').forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        console.log(`點擊角色按鈕: ${targetId}`);
        
        // 更新活動角色
        showCharacter(targetId);
        
        // 更新 URL
        history.pushState(null, '', `#${targetId}`);
      });
    });

    // 處理 URL 錨點跳轉
    function handleHash() {
      const hash = window.location.hash.substring(1);
      if (hash) {
        console.log(`從 URL 錨點跳轉到: ${hash}`);
        // 檢查是否有與錨點匹配的按鈕
        const targetButton = document.querySelector('.char-btn[data-target="' + hash + '"]');
        if (targetButton) {
          targetButton.click();
        }
      }
    }

    // 監聽 URL 變化
    window.addEventListener('hashchange', handleHash);
    
    // 初始加載時檢查錨點
    handleHash();
    
    // 默認顯示第一個角色，如果沒有指定錨點則顯示"全部"視圖
    if (!window.location.hash) {
      showCharacter('all');
      // 確保"全部"按鈕處於激活狀態
      document.querySelector('.char-btn[data-target="all"]').classList.add('active');
      // 移除其他按鈕的激活狀態
      document.querySelectorAll('.char-btn:not([data-target="all"])').forEach(btn => {
        btn.classList.remove('active');
      });
    }
  }

  // 等待Glide.js加載
  function waitForGlide() {
    if (typeof Glide !== 'undefined') {
      console.log('Glide.js 已加載，初始化畫廊');
      initGallery();
    } else {
      console.log('等待Glide.js加載...');
      setTimeout(waitForGlide, 200);
    }
  }

  // 加載Glide.js腳本
  function loadGlideScript() {
    console.log('手動加載Glide.js');
    const glideScript = document.createElement('script');
    glideScript.src = 'https://cdn.jsdelivr.net/npm/@glidejs/glide';
    glideScript.onload = initGallery;
    glideScript.onerror = () => console.error('Glide.js加載失敗');
    document.head.appendChild(glideScript);
  }

  // 使用DOMContentLoaded事件
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加載完成，嘗試初始化畫廊');
    if(typeof Glide !== 'undefined') {
      initGallery();
      
      // 確保已加載完成後，根據當前激活的按鈕顯示對應內容
      setTimeout(function() {
        const activeBtn = document.querySelector('.char-btn.active');
        if(activeBtn) {
          const targetId = activeBtn.getAttribute('data-target');
          console.log('DOM載入完成後：根據激活按鈕顯示內容:', targetId);
          showCharacter(targetId);
        } else {
          // 如果沒有激活按鈕，默認顯示全部
          console.log('DOM載入完成後：沒有激活按鈕，默認顯示全部');
          showCharacter('all');
        }
      }, 300);
    } else {
      waitForGlide();
    }
    
    // 等待 lightGallery 加載
    waitForLightGallery();
  });

  // 等待 lightGallery 加載
  function waitForLightGallery() {
    if(typeof lightGallery !== 'undefined') {
      console.log('lightGallery 已加載，可以使用');
      return true;
    } else {
      console.log('等待 lightGallery 加載...');
      // 限制嘗試次數，避免無限循環
      if(!window.lgLoadAttempts) window.lgLoadAttempts = 0;
      window.lgLoadAttempts++;
      
      if(window.lgLoadAttempts > 10) {
        console.warn('lightGallery 加載超時，嘗試手動加載');
        // 手動加載 lightGallery
        loadLightGalleryManually();
        return false;
      }
      
      setTimeout(waitForLightGallery, 200);
      return false;
    }
  }
  
  // 手動加載 lightGallery
  function loadLightGalleryManually() {
    if(typeof lightGallery !== 'undefined') return;
    
    console.log('手動加載 lightGallery...');
    
    // 加載 CSS
    const coreCss = document.createElement('link');
    coreCss.rel = 'stylesheet';
    coreCss.href = 'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lightgallery.min.css';
    document.head.appendChild(coreCss);
    
    const zoomCss = document.createElement('link');
    zoomCss.rel = 'stylesheet';
    zoomCss.href = 'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lg-medium-zoom.min.css';
    document.head.appendChild(zoomCss);
    
    // 加載核心 JS
    const coreScript = document.createElement('script');
    coreScript.src = 'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/lightgallery.min.js';
    coreScript.onload = function() {
      console.log('lightGallery 核心已加載');
      
      // 加載 MediumZoom 插件
      const mediumZoomScript = document.createElement('script');
      mediumZoomScript.src = 'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/plugins/mediumZoom/lg-medium-zoom.min.js';
      mediumZoomScript.onload = function() {
        console.log('MediumZoom 插件已加載');
        
        // 加載完成後嘗試初始化
        setTimeout(function() {
          console.log('嘗試初始化 lightGallery');
          initLightGallery();
        }, 500);
      };
      document.head.appendChild(mediumZoomScript);
    };
    document.head.appendChild(coreScript);
  }
  
  // 使用window.onload作為備份
  window.addEventListener('load', function() {
    console.log('頁面完全加載，檢查畫廊初始化狀態');
    
    // 檢查 Glide.js
    if(!characterGalleryInitialized) {
      console.log('畫廊尚未初始化，嘗試加載Glide.js');
      loadGlideScript();
    }
    
    // 確保根據當前激活的按鈕顯示對應內容
    setTimeout(function() {
      const activeBtn = document.querySelector('.char-btn.active');
      if(activeBtn) {
        const targetId = activeBtn.getAttribute('data-target');
        console.log('頁面加載完成：根據激活按鈕顯示內容:', targetId);
        showCharacter(targetId);
      } else {
        // 如果沒有激活按鈕，默認顯示全部
        console.log('頁面加載完成：沒有激活按鈕，默認顯示全部');
        showCharacter('all');
      }
    }, 500);
    
    // 檢查 lightGallery
    if(typeof lightGallery === 'undefined') {
      console.warn('頁面加載完成但lightGallery未加載，嘗試手動初始化');
      loadLightGalleryManually();
    }
  });

  // 立即自動執行初始化
  if(document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('文檔已準備就緒，立即初始化');
    setTimeout(function() {
      if(!characterGalleryInitialized) {
        if(typeof Glide !== 'undefined') {
          initGallery();
          
          // 根據當前激活的按鈕顯示對應內容
          setTimeout(function() {
            const activeBtn = document.querySelector('.char-btn.active');
            if(activeBtn) {
              const targetId = activeBtn.getAttribute('data-target');
              console.log('立即根據激活按鈕顯示內容:', targetId);
              showCharacter(targetId);
            } else {
              // 如果沒有激活按鈕，默認顯示全部
              console.log('立即顯示全部（無激活按鈕）');
              showCharacter('all');
            }
          }, 100);
        } else {
          waitForGlide();
        }
      }
    }, 100);
  }
})();
</script>
