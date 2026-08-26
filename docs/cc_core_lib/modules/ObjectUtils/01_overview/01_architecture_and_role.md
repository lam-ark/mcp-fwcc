---
id: "cc_core_lib:ObjectUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ObjectUtils (share-lib)"
category: "cc_core_lib"
tags: ["ObjectUtils", "object_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `ObjectUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.ObjectUtils` / `globalThis.eno.ObjectUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `ObjectUtils` Dùng Để Làm Gì? (Purpose & Overview)

`ObjectUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { ObjectUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`cloneDeep(value: any, cache?: WeakMap<object, any>)`**: `any`
