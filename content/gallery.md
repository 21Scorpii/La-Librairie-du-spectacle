---
title: 角色畫廊
---

<!-- 引入 Glide.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css">
<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>

<!-- 角色快速跳轉 -->
<div class="character-nav">
  <button class="char-btn active" data-target="hcz">黑村 紫</button>
  <button class="char-btn" data-target="azmt">東山 旅</button>
  <button class="char-btn" data-target="stn">赤井 刹那</button>
  <!-- 可以繼續添加更多角色按鈕 -->
</div>

<!-- 每個角色的輪播圖 -->
<div class="character-slides">
  <!-- 黑村紫的輪播 -->
  <div id="hcz-slider" class="glide character-slider active">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <!-- 第一張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/avatar/tachie/hcz-tachie.PNG" alt="黑村紫立繪" />
          </div>
        </li>
        <!-- 第二張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/HCZ.png" alt="QQ人" />
          </div>
        </li>
        <!-- 第三張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/IMG_6340.JPG" alt="QQ人" />
          </div>
        </li>
      </ul>
      <!-- 添加導航點 -->
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
      <!-- 添加左右箭頭 -->
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
      </div>
    </div>
    <!-- 將說明文字移到輪播外部 -->
    <div class="slide-caption">
      <h3>黑村 紫</h3>
      <p>大學生(計算機科學)/ 構成創始人</p>
      <a href="人物設定(DB)/黑村 紫" class="character-link">查看角色檔案</a>
    </div>
  </div>

  <!-- 東山旅的輪播 -->
  <div id="azmt-slider" class="glide character-slider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <!-- 第一張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/avatar/tachie/dsl-tachie.PNG" alt="東山旅立繪" onerror="this.onerror=null; this.src='_Attach/Image/avatar/tachie/dsl-tachie.png';" />
          </div>
        </li>
        <!-- 第二張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/IMG_6340.JPG" alt="東山旅其他立繪" onerror="this.onerror=null; this.src='_Attach/Image/IMG_6340.jpg';" />
          </div>
        </li>
        <!-- 第三張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/DSL.png" alt="東山旅其他立繪" onerror="this.onerror=null; this.src='_Attach/Image/DSL.PNG';" />
          </div>
        </li>
      </ul>
      <!-- 添加導航點（修正數量） -->
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
      <!-- 添加左右箭頭 -->
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
      </div>
    </div>
    <!-- 將說明文字移到輪播外部 -->
    <div class="slide-caption">
      <h3>東山 旅</h3>
      <p>大學生/人類社會的高效低功耗垃圾回收站</p>
      <a href="人物設定(DB)/東山 旅" class="character-link">查看角色檔案</a>
    </div>
  </div>

  <!-- 赤井刹那的輪播 -->
  <div id="stn-slider" class="glide character-slider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <!-- 第一張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/avatar/tachie/stn-tachie.PNG" alt="赤井刹那立繪" onerror="this.onerror=null; this.src='_Attach/Image/avatar/tachie/stn-tachie.png';" />
          </div>
        </li>
        <!-- 第二張圖片 -->
        <li class="glide__slide">
          <div class="image-container">
            <img src="_Attach/Image/Pasted image 20240317143211.png" alt="赤井刹那其他圖片" />
          </div>
        </li>
      </ul>
      <!-- 添加導航點 -->
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
      </div>
      <!-- 添加左右箭頭 -->
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
      </div>
    </div>
    <!-- 將說明文字移到輪播外部 -->
    <div class="slide-caption">
      <h3>赤井 刹那</h3>
      <p>仿生人</p>
      <a href="人物設定(DB)/赤井 刹那" class="character-link">查看角色檔案</a>
    </div>
  </div>
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
</style>

<script>
// 確保腳本只會執行一次的標記
if (typeof window.characterGalleryInitialized === 'undefined') {
  window.characterGalleryInitialized = false;
}

// 初始化函數
function initCharacterGallery() {
  // 避免重複初始化
  if (window.characterGalleryInitialized) return;
  window.characterGalleryInitialized = true;

  // 檢查 Glide.js 是否已加載
  if (typeof Glide === 'undefined') {
    console.error('Glide.js 未加載，嘗試重新加載...');
    // 嘗試重新加載 Glide.js
    const glideScript = document.createElement('script');
    glideScript.src = 'https://cdn.jsdelivr.net/npm/@glidejs/glide';
    glideScript.onload = initCharacterGallery;
    document.head.appendChild(glideScript);
    return;
  }

  console.log('初始化角色畫廊...');
  
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
      const activeId = activeSlider ? activeSlider.id.replace('-slider', '') : 'hcz';
      
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
}

// 使用多種方法確保腳本能夠正確執行
document.addEventListener('DOMContentLoaded', function() {
  // 如果 Glide.js 已加載，立即初始化
  if (typeof Glide !== 'undefined') {
    initCharacterGallery();
  } else {
    // 否則等待一小段時間再嘗試
    setTimeout(initCharacterGallery, 200);
  }
});

// 備份方案：頁面加載完成後再次嘗試初始化
window.addEventListener('load', initCharacterGallery);

// 最後的防禦線：如果一切都失敗了，在 2 秒後再次嘗試
setTimeout(initCharacterGallery, 2000);
</script> 