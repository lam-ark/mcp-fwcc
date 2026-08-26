---
id: "cc_core_lib:Logger:overview:architecture"
title: "Hướng dẫn & Cách sử dụng Logger (share-lib)"
category: "cc_core_lib"
tags: ["Logger", "logger", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `Logger`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.Logger` / `globalThis.eno.Logger`  
> **Kế thừa**: `Object`

---

## 🎯 1. `Logger` Dùng Để Làm Gì? (Purpose & Overview)

`Logger` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { Logger } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
*Class thuần chứa dữ liệu hoặc constants.*
