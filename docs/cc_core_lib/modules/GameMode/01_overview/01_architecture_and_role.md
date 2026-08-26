---
id: "cc_core_lib:GameMode:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameMode (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameMode`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameMode` / `globalThis.eno.GameMode`  
> **Kế thừa**: `Object`

---

## 🎯 1. `GameMode` Dùng Để Làm Gì? (Purpose & Overview)

`GameMode` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameMode } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`play()`**: `Promise<void>`
- **`onEnter()`**: `void`
- **`onEnable()`**: `void`
- **`onDisable()`**: `void`
- **`onStateUpdate(data?: any)`**: `void`
- **`forceStopCurrentGameMode()`**: `Promise<void>`
- **`resume(data?: any)`**: `Promise<void>`
- **`exit()`**: `void`
- **`clear()`**: `void`
- **`destroy()`**: `void`
- **`getDirector()`**: `SlotGameDirector`
