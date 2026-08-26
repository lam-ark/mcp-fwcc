---
id: "cc_core_lib:BonusGameDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BonusGameDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["BonusGameDirector", "bonus_game_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BonusGameDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BonusGameDirector` / `globalThis.eno.BonusGameDirector`  
> **Kế thừa**: `SlotGameDirector`

---

## 🎯 1. `BonusGameDirector` Dùng Để Làm Gì? (Purpose & Overview)

`BonusGameDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BonusGameDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_gameRestart(data: any)`**: `Promise<boolean>`
- **`_gameFinish(data: any)`**: `Promise<boolean>`
- **`_showResult(data: any)`**: `Promise<boolean>`
- **`_playGameModes(data: any)`**: `Promise<boolean>`
- **`_playGameModeType1()`**: `Promise<boolean>`
- **`_playGameModeType2()`**: `Promise<boolean>`
