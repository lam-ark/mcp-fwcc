---
id: "cc_core_lib:DataModel:overview:architecture"
title: "Hướng dẫn & Cách sử dụng DataModel (slot-base-logic)"
category: "cc_core_lib"
tags: ["DataModel", "data_model", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `DataModel`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.DataModel` / `globalThis.eno.DataModel`  
> **Kế thừa**: `Object`

---

## 🎯 1. `DataModel` Dùng Để Làm Gì? (Purpose & Overview)

`DataModel` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { DataModel } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`data(data: any); set(key: string, value: any)`**: `void`
- **`get(key: string)`**: `any`
- **`remove(key: string)`**: `void`
- **`clear()`**: `void`
- **`destroy()`**: `void`
