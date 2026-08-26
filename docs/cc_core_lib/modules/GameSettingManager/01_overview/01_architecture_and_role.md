---
id: "cc_core_lib:GameSettingManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameSettingManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameSettingManager", "game_setting_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameSettingManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameSettingManager` / `globalThis.eno.GameSettingManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `GameSettingManager` Dùng Để Làm Gì? (Purpose & Overview)

`GameSettingManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameSettingManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`toggleSFX()`**: `void`
- **`toggleBGM()`**: `void`
- **`setEnableForceGLT(isEnable: boolean)`**: `void`
- **`readBGMKey()`**: `boolean`
- **`readSFXKey()`**: `boolean`
- **`syncGameSetting()`**: `void`
