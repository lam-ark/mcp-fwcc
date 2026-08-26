---
id: "cc_core_lib:FloatUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng FloatUtils (share-lib)"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `FloatUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.FloatUtils` / `globalThis.eno.FloatUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `FloatUtils` Dùng Để Làm Gì? (Purpose & Overview)

`FloatUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { FloatUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`verifyNumbers(...args: any[])`**: `void`
- **`toFixed(num: number, fixed?: number)`**: `string`
- **`plus(a: number | string, b: number | string)`**: `number`
- **`minus(a: number | string, b: number | string)`**: `number`
- **`mul(a: number | string, b: number | string)`**: `number`
- **`div(a: number | string, b: number | string)`**: `number`
- **`sum(...numbers: (number | string)[])`**: `number`
- **`product(...numbers: (number | string)[])`**: `number`
- **`isEqual(a: number, b: number)`**: `boolean`
- **`getDecimalCount(number: number, min?: number, max?: number)`**: `number`
