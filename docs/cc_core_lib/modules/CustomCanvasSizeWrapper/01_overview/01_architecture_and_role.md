---
id: "cc_core_lib:CustomCanvasSizeWrapper:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CustomCanvasSizeWrapper (cc-wrap-func)"
category: "cc_core_lib"
tags: ["CustomCanvasSizeWrapper", "custom_canvas_size_wrapper", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CustomCanvasSizeWrapper`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.CustomCanvasSizeWrapper` / `globalThis.eno.CustomCanvasSizeWrapper`  
> **Kế thừa**: `Object`

---

## 🎯 1. `CustomCanvasSizeWrapper` Dùng Để Làm Gì? (Purpose & Overview)

`CustomCanvasSizeWrapper` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CustomCanvasSizeWrapper } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`updateCustomCanvasSize()`**: `void`
- **`updateWindowOrientation()`**: `void`
- **`scaleCanvasByOrientation(delay: number)`**: `void`
- **`isMobile()`**: `boolean`
- **`onDestroy()`**: `void`
