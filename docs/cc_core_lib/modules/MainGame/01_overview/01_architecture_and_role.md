---
id: "cc_core_lib:MainGame:overview:architecture"
title: "Hướng dẫn & Cách sử dụng MainGame (slot-base-logic)"
category: "cc_core_lib"
tags: ["MainGame", "main_game", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `MainGame`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.MainGame` / `globalThis.eno.MainGame`  
> **Kế thừa**: `GameMode`

---

## 🎯 1. `MainGame` Dùng Để Làm Gì? (Purpose & Overview)

`MainGame` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { MainGame } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`onStartSpinRequest()`**: `void`
- **`onBuyFeatureSpinRequest(betKey: string, extraBet: string)`**: `void`
- **`onStartSpinTrialRequest()`**: `void`
- **`onStartAutoSpinRequest()`**: `void`
- **`hasEnoughBalance()`**: `boolean`
- **`hasEnoughBalanceExtraBet(betKey: string, extraBet: string)`**: `boolean`
- **`forceStopCurrentGameMode()`**: `Promise<void>`
- **`resetSpinButton()`**: `void`
- **`getSpinButton()`**: `SpinButtonNormalManager`
