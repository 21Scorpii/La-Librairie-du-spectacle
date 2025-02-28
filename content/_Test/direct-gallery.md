---
title: 直接HTML实现的画廊
draft: true
---

# 直接HTML实现的画廊

由于组件配置可能存在问题，这里我们直接使用HTML和JavaScript实现一个简单的画廊，展示`_Attach/Image`文件夹下的图片。

<div class="gallery-container">
  <h2>图片画廊</h2>
  <div class="gallery-grid">
    <div class="gallery-sizer"></div>
    <div class="gallery-item">
      <a href="/_Attach/Image/HCZ.png" target="_blank">
        <img src="/_Attach/Image/HCZ.png" alt="黑村紫" loading="lazy">
      </a>
    </div>
    <div class="gallery-item">
      <a href="/_Attach/Image/DSL.png" target="_blank">
        <img src="/_Attach/Image/DSL.png" alt="东山旅" loading="lazy">
      </a>
    </div>
    <div class="gallery-item">
      <a href="/_Attach/Image/stn.jpg" target="_blank">
        <img src="/_Attach/Image/stn.jpg" alt="赤井刹那" loading="lazy">
      </a>
    </div>
    <div class="gallery-item">
      <a href="/_Attach/Image/avatar/tachie/hcz-tachie.PNG" target="_blank">
        <img src="/_Attach/Image/avatar/tachie/hcz-tachie.PNG" alt="黑村紫立绘" loading="lazy">
      </a>
    </div>
  </div>
</div>

<style>
.gallery-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
}

.gallery-grid {
  margin: 0 auto;
  width: 100%;
}

.gallery-sizer {
  width: 32%;
}

.gallery-item {
  width: 32%;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: inline-block;
  margin-right: 1%;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  display: block;
  transition: opacity 0.3s;
}

.gallery-item img:hover {
  opacity: 0.9;
}

/* 响应式布局 */
@media (max-width: 1200px) {
  .gallery-sizer,
  .gallery-item {
    width: 48%;
  }
}

@media (max-width: 768px) {
  .gallery-sizer,
  .gallery-item {
    width: 100%;
    margin-right: 0;
  }
}
</style>

<script>
// 如果需要布局库，可以在此加载
document.addEventListener('DOMContentLoaded', async function() {
  console.log("Gallery loaded");
  
  // 如果页面上有Masonry库，则使用它
  if (typeof window.Masonry !== 'undefined') {
    try {
      const grid = document.querySelector('.gallery-grid');
      const msnry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-sizer',
        percentPosition: true,
        gutter: 10
      });
    } catch (e) {
      console.error("Error initializing Masonry:", e);
    }
  }
});
</script>

## 使用方法说明

当组件方式无法使用时，可以直接使用HTML、CSS和JavaScript来实现画廊。步骤如下：

1. 添加HTML结构，包含`gallery-grid`、`gallery-sizer`和`gallery-item`类
2. 添加CSS样式，设置布局和响应式设计
3. 添加可选的JavaScript，如果需要的话

此示例不依赖外部库，但可以添加Masonry库以获得瀑布流布局效果。 