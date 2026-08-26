---
id: "cc_core_lib:MathUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng MathUtils (share-lib)"
category: "cc_core_lib"
tags: ["MathUtils", "math_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `MathUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.MathUtils` / `globalThis.eno.MathUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `MathUtils` Dùng Để Làm Gì? (Purpose & Overview)

`MathUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { MathUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`factorial(n: number)`**: `number`
- **`combination(n: number, k: number)`**: `number`
- **`bezier(pos: number[], ratio: number)`**: `number`
- **`getAngleTwoPoint(start: any, end: any)`**: `number`
- **`getRandomInt(min: number, max: number)`**: `number`
- **`getRandomRange(min: number, max: number)`**: `number`
