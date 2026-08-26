---
id: "cc_core_lib:SpineUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng SpineUtils (cc-wrap-func)"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `SpineUtils`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.SpineUtils` / `globalThis.eno.SpineUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `SpineUtils` Dùng Để Làm Gì? (Purpose & Overview)

`SpineUtils` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { SpineUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`getAnimationsName(spine: sp.Skeleton)`**: `string[]`
- **`getAnimationDuration(spine: sp.Skeleton, name: string)`**: `number`
- **`hasAnimation(spine: sp.Skeleton, name: string)`**: `boolean`
- **`hasSkin(spine: sp.Skeleton, name: string)`**: `boolean`
- **`setMixAllAnims(spine: sp.Skeleton, mixTime?: number)`**: `void`
