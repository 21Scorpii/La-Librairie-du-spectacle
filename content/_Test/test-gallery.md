---
title: 测试图片访问
draft: true
---

# 测试图片访问

这个页面用于测试不同路径的图片访问方式。

## 直接HTML方式显示

### 相对路径尝试

<img src="_Attach/Image/HCZ.png" alt="黑村紫" style="max-width: 300px;">

### 绝对路径尝试

<img src="/_Attach/Image/HCZ.png" alt="黑村紫" style="max-width: 300px;">

### 使用static前缀

<img src="/static/_Attach/Image/HCZ.png" alt="黑村紫" style="max-width: 300px;">

### 使用content前缀

<img src="/content/_Attach/Image/HCZ.png" alt="黑村紫" style="max-width: 300px;">

## 查看图片列表

下面是我们使用插件组件方式显示的图片画廊：

```yaml
galleryFolder: _Attach/Image
galleryTitle: 测试图片列表
``` 