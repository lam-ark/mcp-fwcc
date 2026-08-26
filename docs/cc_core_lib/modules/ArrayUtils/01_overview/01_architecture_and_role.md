---
id: "cc_core_lib:ArrayUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ArrayUtils (share-lib)"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `ArrayUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.ArrayUtils` / `globalThis.eno.ArrayUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `ArrayUtils` Dùng Để Làm Gì? (Purpose & Overview)

`ArrayUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { ArrayUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`transpose(matrix: Array<any>)`**: `Array<any>`
- **`transposeJagged(matrix: Array<any>, defaultValue?: string)`**: `Array<any>`
- **`matrixEqual(a: any[], b: any[])`**: `boolean`
- **`getRowColFromIndex(formatMatrix: number[], index: number)`**: `{ row: number`
