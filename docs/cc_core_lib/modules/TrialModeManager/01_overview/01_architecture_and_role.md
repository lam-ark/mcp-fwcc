---
id: "cc_core_lib:TrialModeManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng TrialModeManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["TrialModeManager", "trial_mode_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `TrialModeManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.TrialModeManager` / `globalThis.eno.TrialModeManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `TrialModeManager` Dùng Để Làm Gì? (Purpose & Overview)

`TrialModeManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { TrialModeManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`getTrialModeData()`**: `TrialModeData`
- **`initData(data: TrialData[])`**: `void`
- **`onStateUpdate(data: any)`**: `void`
- **`onJackpotWinClose(cutsceneType: number)`**: `void`
- **`runJackpot()`**: `void`
- **`requestPlayTrial(forceSkip?: boolean)`**: `void`
- **`playTutorialOption(option: number)`**: `void`
- **`startSpinTrial()`**: `void`
- **`triggerTrialSession()`**: `void`
- **`finishFinalPlaySession()`**: `void`
- **`finishEntryPlaySession()`**: `void`
- **`skipTrialMode()`**: `void`
- **`backToRealMode(askB2r?: boolean)`**: `void`
- **`showTutorialPopup(message: string, hasAction?: boolean)`**: `void`
- **`closeTutorialPopup()`**: `void`
- **`showReturnToRealModePopup()`**: `void`
- **`isMaxTrialSession()`**: `boolean`
- **`destroy()`**: `void`
