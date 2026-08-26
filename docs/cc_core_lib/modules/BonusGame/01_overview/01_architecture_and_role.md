---
id: "cc_core_lib:BonusGame:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BonusGame (slot-base-logic)"
category: "cc_core_lib"
tags: ["BonusGame", "bonus_game", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BonusGame`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BonusGame` / `globalThis.eno.BonusGame`  
> **Kế thừa**: `GameMode`

---

## 🎯 1. `BonusGame` Dùng Để Làm Gì? (Purpose & Overview)

`BonusGame` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BonusGame } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`onEnter()`**: `void`
- **`runAutoTrigger()`**: `void`
- **`openRandomBox()`**: `void`
- **`triggerBonusGame(cellId: number)`**: `void`
- **`sendSpecialBonusRequest()`**: `void`
- **`onBonusGameRequest(cellId: number)`**: `void`
- **`destroy()`**: `void`
