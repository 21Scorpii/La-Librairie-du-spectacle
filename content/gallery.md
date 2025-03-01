---
title: 角色畫廊
---

<!-- 引入 Glide.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css">
<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide" defer></script>

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
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
  transform: translateY(-50%);
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
  column-gap: 20px;
  display: none;
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

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  display: none;
}

.masonry-item.show {
  display: block;
}

.masonry-item .image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  width: 100%;
}

.masonry-item .image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.masonry-item img {
  width: 100%;
  display: block;
  border-radius: 8px;
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
</style>

<script>
// 定義角色數據 - 只需要編輯這個數組來添加新角色
const characterData = [
  {
    id: 'hcz',
    name: '黑村 紫',
    description: '大學生(計算機科學)/ 構成創始人',
    profileLink: '人物設定(DB)/黑村 紫',
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
        alt: '黑村紫',
        fallback: null
      }
    ]
  },
  {
    id: 'azmt',
    name: '東山 旅',
    description: '大學生/人類社會的高效低功耗垃圾回收站',
    profileLink: '人物設定(DB)/東山 旅',
    images: [
      {
        src: '_Attach/Image/avatar/tachie/dsl-tachie.PNG',
        alt: '東山旅立繪',
        fallback: '_Attach/Image/avatar/tachie/dsl-tachie.png'
      },
      {
        src: '_Attach/Image/IMG_6340.JPG',
        alt: '東山旅其他立繪',
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
    profileLink: '人物設定(DB)/赤井 刹那',
    images: [
      {
        src: '_Attach/Image/stn2.png',
        alt: '赤井刹那其他圖片',
        fallback: null // 移除相同的备用路径，使用null更合适
      }
    ]
  },
  {
    id: 'kln',
    name: 'Klein Klein',
    description: '研究員',
    profileLink: '人物設定(DB)/Klein Klein',
    images: [
      {
        src: '_Attach/Image/avatar/tachie/kln-tachie.PNG',
        alt: 'Klein立繪',
        fallback: '_Attach/Image/avatar/tachie/kln-tachie.png'
      },
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

// 初始化畫廊函數
function initGallery() {
  if(characterGalleryInitialized) return;
  characterGalleryInitialized = true;
  
  console.log('初始化角色畫廊...');
  
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
  allButton.className = 'char-btn';
  allButton.setAttribute('data-target', 'all');
  allButton.textContent = '全部';
  navContainer.appendChild(allButton);
  
  // 創建角色按鈕和滑塊
  characterData.forEach((character, index) => {
    // 創建角色按鈕
    const charButton = document.createElement('button');
    charButton.className = 'char-btn';
    if (index === 0) charButton.classList.add('active'); // 默認第一個角色為活動狀態
    charButton.setAttribute('data-target', character.id);
    charButton.textContent = character.name;
    navContainer.appendChild(charButton);
    
    // 創建瀑布流項目
    character.images.forEach(image => {
      const masonryItem = document.createElement('div');
      masonryItem.className = 'masonry-item';
      masonryItem.setAttribute('data-character', character.id);
      
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
      
      const img = document.createElement('img');
      img.src = encodeURI(image.src);
      img.alt = image.alt;
      img.setAttribute('data-image-path', image.src);
      
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
          // 可选：设置默认占位图片
          // this.src = '默认占位图片路径';
        };
      }
      
      const imageCaption = document.createElement('div');
      imageCaption.className = 'image-caption';
      
      const title = document.createElement('h3');
      title.textContent = character.name;
      
      const description = document.createElement('p');
      description.textContent = character.description;
      
      const link = document.createElement('a');
      link.href = character.profileLink;
      link.className = 'character-link';
      link.textContent = '查看角色檔案';
      
      imageCaption.appendChild(title);
      imageCaption.appendChild(description);
      imageCaption.appendChild(link);
      
      imageContainer.appendChild(img);
      imageContainer.appendChild(imageCaption);
      
      masonryItem.appendChild(imageContainer);
      masonryContainer.appendChild(masonryItem);
    });
    
    // 創建輪播圖
    const sliderDiv = document.createElement('div');
    sliderDiv.id = `${character.id}-slider`;
    sliderDiv.className = 'glide character-slider';
    if (index === 0) sliderDiv.classList.add('active'); // 默認第一個角色為活動狀態
    
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
          // 可选：设置默认占位图片
          // this.src = '默认占位图片路径';
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
  
  // 首次初始化
  initSliders();
  
  // 窗口大小變化時重新初始化
  window.addEventListener('resize', function() {
    // 使用防抖技術，避免頻繁調用
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function() {
      // 獲取當前活動的角色ID
      const activeSlider = document.querySelector('.character-slider.active');
      const activeId = activeSlider ? activeSlider.id.replace('-slider', '') : characterData[0].id;
      
      // 重新初始化所有輪播
      initSliders();
      
      // 確保當前活動的角色保持顯示
      showCharacter(activeId);
    }, 250);
  });

  // 顯示特定角色的函數
  function showCharacter(targetId) {
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
      // 添加全部模式類名，用於隱藏圖片說明
      masonryContainer.classList.add('all-mode');
      
      // 處理重複圖片 - 創建一個集合來跟踪已顯示的圖片路徑
      const shownImagePaths = new Set();
      
      // 先隱藏所有項目
      document.querySelectorAll('.masonry-item').forEach(item => {
        item.classList.remove('show');
      });
      
      // 然後有選擇地顯示項目，避免重複圖片
      document.querySelectorAll('.masonry-item').forEach(item => {
        const img = item.querySelector('img');
        const imagePath = img.getAttribute('data-image-path');
        
        // 如果該圖片路徑尚未顯示，則顯示此項目
        if (!shownImagePaths.has(imagePath)) {
          item.classList.add('show');
          shownImagePaths.add(imagePath);
        }
      });
      
      return;
    }
    
    // 如果不是"全部"模式，隱藏瀑布流，顯示輪播
    const masonryContainer = document.getElementById('masonry-gallery');
    masonryContainer.classList.remove('active');
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
      } else {
        item.classList.remove('show');
      }
    });
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
      const targetButton = document.querySelector(`.char-btn[data-target="${hash}"]`);
      if (targetButton) {
        targetButton.click();
      }
    }
  }

  // 監聽 URL 變化
  window.addEventListener('hashchange', handleHash);
  
  // 初始加載時檢查錨點
  handleHash();
  
  // 默認顯示第一個角色
  if (!window.location.hash) {
    showCharacter(characterData[0].id);
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
  } else {
    waitForGlide();
  }
});

// 使用window.onload作為備份
window.addEventListener('load', function() {
  console.log('頁面完全加載，檢查畫廊初始化狀態');
  if(!characterGalleryInitialized) {
    console.log('畫廊尚未初始化，嘗試加載Glide.js');
    loadGlideScript();
  }
});
</script> 