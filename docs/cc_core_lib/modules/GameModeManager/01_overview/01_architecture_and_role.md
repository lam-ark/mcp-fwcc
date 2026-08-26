---
id: "cc_core_lib:GameModeManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameModeManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameModeManager", "game_mode_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameModeManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameModeManager` / `globalThis.eno.GameModeManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `GameModeManager` Dùng Để Làm Gì? (Purpose & Overview)

`GameModeManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameModeManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`addGameMode(type: number)`**: `void`
- **`getCurrentMode()`**: `GameMode`
- **`playGameMode(mode?: any)`**: `Promise<boolean>`
- **`newGameMode(type: any)`**: `Promise<boolean>`
- **`resumeGameMode(type: number)`**: `Promise<boolean>`
- **`endGameMode()`**: `void`
- **`returnToNormalGame()`**: `void`
- **`onResetAllScripts()`**: `void`
- **`destroy()`**: `void`
