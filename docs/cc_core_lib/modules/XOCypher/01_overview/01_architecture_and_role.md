---
id: "cc_core_lib:XOCypher:overview:architecture"
title: "Hướng dẫn & Cách sử dụng XOCypher (share-lib)"
category: "cc_core_lib"
tags: ["XOCypher", "xocypher", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `XOCypher`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.XOCypher` / `globalThis.eno.XOCypher`  
> **Kế thừa**: `Object`

---

## 🎯 1. `XOCypher` Dùng Để Làm Gì? (Purpose & Overview)

`XOCypher` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { XOCypher } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`encode(key: string, data: string)`**: `string`
- **`decode(key: string, data: string)`**: `string`
- **`encode_new(key: string, data: string)`**: `string`
- **`decode_new(key: string, data: string)`**: `string`
- **`encode_tutorial(data: string)`**: `string`
- **`decode_tutorial(data: string)`**: `string`
