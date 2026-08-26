---
id: "cc_core_lib:DialogData:overview:architecture"
title: "Hướng dẫn & Cách sử dụng DialogData (slot-base-logic)"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `DialogData`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.DialogData` / `globalThis.eno.DialogData`  
> **Kế thừa**: `Object`

---

## 🎯 1. `DialogData` Dùng Để Làm Gì? (Purpose & Overview)

`DialogData` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { DialogData } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setMessage(message: string)`**: `void`
- **`setTitle(title: string)`**: `void`
- **`setButtonOKDisplay(isActive: boolean)`**: `void`
- **`setButtonCancelDisplay(isActive: boolean)`**: `void`
