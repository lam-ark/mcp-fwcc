---
id: "cc_core_lib:TurboButtonData:overview:architecture"
title: "Hướng dẫn & Cách sử dụng TurboButtonData (slot-base-logic)"
category: "cc_core_lib"
tags: ["TurboButtonData", "turbo_button_data", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `TurboButtonData`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.TurboButtonData` / `globalThis.eno.TurboButtonData`  
> **Kế thừa**: `Object`

---

## 🎯 1. `TurboButtonData` Dùng Để Làm Gì? (Purpose & Overview)

`TurboButtonData` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { TurboButtonData } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`isInteractable()`**: `boolean`
- **`setState(state: number)`**: `void`
- **`setActive(active: boolean)`**: `void`
- **`isActive()`**: `boolean`
