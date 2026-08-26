---
id: "cc_core_lib:FreeGame:overview:architecture"
title: "Hướng dẫn & Cách sử dụng FreeGame (slot-base-logic)"
category: "cc_core_lib"
tags: ["FreeGame", "free_game", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `FreeGame`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.FreeGame` / `globalThis.eno.FreeGame`  
> **Kế thừa**: `GameMode`

---

## 🎯 1. `FreeGame` Dùng Để Làm Gì? (Purpose & Overview)

`FreeGame` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { FreeGame } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`destroy()`**: `void`
