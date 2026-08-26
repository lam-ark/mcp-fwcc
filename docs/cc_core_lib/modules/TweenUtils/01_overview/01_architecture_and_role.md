---
id: "cc_core_lib:TweenUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng TweenUtils (cc-wrap-func)"
category: "cc_core_lib"
tags: ["TweenUtils", "tween_utils", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `TweenUtils`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.TweenUtils` / `globalThis.eno.TweenUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `TweenUtils` Dùng Để Làm Gì? (Purpose & Overview)

`TweenUtils` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { TweenUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`fadeTo(node: cc.Node, duration: number, opacity: number, options?: ITweenOptions)`**: `cc.Tween`
- **`fadeIn(node: cc.Node, duration: number, options?: ITweenOptions)`**: `cc.Tween`
- **`fadeOut(node: cc.Node, duration: number, options?: ITweenOptions)`**: `cc.Tween`
- **`fadeAlphaTo(node: cc.Node, duration: number, alpha: number, options?: ITweenOptions)`**: `cc.Tween`
- **`fadeAlphaIn(node: cc.Node, duration: number, options?: ITweenOptions)`**: `cc.Tween`
- **`fadeAlphaOut(target: cc.Node, duration: number, options?: ITweenOptions)`**: `cc.Tween`
- **`zoomTo(node: cc.Node, duration: number, scale: number, options?: ITweenOptions)`**: `cc.Tween`
- **`zoomBy(node: cc.Node, duration: number, scale: number, options?: ITweenOptions)`**: `cc.Tween`
