---
id: "cc_core_lib:LightningGame:overview:architecture"
title: "Hướng dẫn & Cách sử dụng LightningGame (slot-base-logic)"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `LightningGame`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.LightningGame` / `globalThis.eno.LightningGame`  
> **Kế thừa**: `GameMode`

---

## 🎯 1. `LightningGame` Dùng Để Làm Gì? (Purpose & Overview)

`LightningGame` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { LightningGame } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`destroy()`**: `void`
