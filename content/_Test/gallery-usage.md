---
title: 你的画廊标题
galleryFolder: /_Attach/Image/avatar/tachie/hcz-tachie.PNG  # 指定图片文件夹路径
galleryTitle: 角色图片展示  # 画廊标题
draft: true
---

# 图片画廊使用说明

## 方法一：使用前置数据（推荐）

在任何Markdown文件中，只需添加以下前置数据（frontmatter）：

```yaml
---
title: 你的画廊标题
galleryFolder: _Attach/Image/avatar  # 指定图片文件夹路径
galleryTitle: 角色图片展示  # 画廊标题
---
```

这样，页面会自动展示指定文件夹中的所有图片。

### 特定角色画廊示例

```yaml
---
title: 黑村紫图片集
galleryFolder: _Attach/Image/avatar/tachie/hcz
galleryTitle: 黑村紫角色图集
---
```

## 方法二：直接使用HTML（更灵活）

如果需要更精确的控制，可以直接使用HTML代码：

```html
<div class="gallery-container">
  <h2>自定义画廊</h2>
  <div class="gallery-grid">
    <div class="gallery-sizer"></div>
    <!-- 添加图片项目 -->
    <div class="gallery-item">
      <a href="/_Attach/Image/HCZ.png" target="_blank">
        <img src="/_Attach/Image/HCZ.png" alt="图片描述" loading="lazy">
      </a>
    </div>
    <!-- 更多图片... -->
  </div>
</div>

<style>
.gallery-container { width: 100%; margin: 0 auto; padding: 20px 0; }
.gallery-grid { margin: 0 auto; width: 100%; }
.gallery-sizer { width: 32%; }
.gallery-item { 
  width: 32%; margin-bottom: 10px; box-sizing: border-box; 
  border-radius: 8px; overflow: hidden; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: inline-block; margin-right: 1%;
}
.gallery-item:hover { transform: translateY(-5px); }
.gallery-item img { width: 100%; display: block; transition: opacity 0.3s; }
.gallery-item img:hover { opacity: 0.9; }

@media (max-width: 1200px) {
  .gallery-sizer, .gallery-item { width: 48%; }
}
@media (max-width: 768px) {
  .gallery-sizer, .gallery-item { width: 100%; margin-right: 0; }
}
</style>
```

## 图片路径说明

由于Quartz的配置，以下是访问图片的正确路径：

1. 绝对路径（推荐）：`/_Attach/Image/filename.png`
2. 相对路径：`_Attach/Image/filename.png`
3. 特定文件夹：`/_Attach/Image/avatar/tachie/hcz-tachie.PNG`

## 常见问题

### 图片不显示？

- 确认图片路径正确，使用绝对路径（如`/_Attach/Image/HCZ.png`）
- 检查Quartz配置中的`ignorePatterns`，确保没有忽略`_Attach`文件夹
- 在配置中添加`!**/_Attach/**`规则以确保图片可访问

### 布局不美观？

手动添加更多CSS样式，如：

```css
.gallery-item {
  width: 32%;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.gallery-item:hover {
  transform: translateY(-5px);
}
```

## 示例页面

- [图片画廊示例](/image-gallery)
- [角色图片画廊](/character-gallery)
- [直接HTML实现的画廊](/direct-gallery) 