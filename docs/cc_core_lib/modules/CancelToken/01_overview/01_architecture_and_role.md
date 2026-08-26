---
id: "cc_core_lib:CancelToken:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CancelToken (share-lib)"
category: "cc_core_lib"
tags: ["CancelToken", "cancel_token", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CancelToken`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.CancelToken` / `globalThis.eno.CancelToken`  
> **Kế thừa**: `Object`

---

## 🎯 1. `CancelToken` Dùng Để Làm Gì? (Purpose & Overview)

`CancelToken` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CancelToken } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`isCancelled()`**: `boolean`
- **`reason()`**: `any`
- **`addListener(listener: () => void)`**: `void`
- **`removeListener(listener: () => void)`**: `void`
- **`cancel(reason?: any)`**: `void`
