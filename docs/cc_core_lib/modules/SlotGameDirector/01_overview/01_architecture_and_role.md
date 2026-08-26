---
id: "cc_core_lib:SlotGameDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng SlotGameDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["SlotGameDirector", "slot_game_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `SlotGameDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.SlotGameDirector` / `globalThis.eno.SlotGameDirector`  
> **Kế thừa**: `BaseDirector`

---

## 🎯 1. `SlotGameDirector` Dùng Để Làm Gì? (Purpose & Overview)

`SlotGameDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { SlotGameDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_disableButtons(data: any)`**: `Promise<boolean>`
- **`_showResult(data: any)`**: `Promise<boolean>`
- **`_runSpinTrigger(data: any)`**: `Promise<void>`
- **`_preStopSpinningTable()`**: `Promise<void>`
- **`_showResultEntry()`**: `Promise<void>`
- **`_showResultFinal()`**: `Promise<void>`
- **`_transitionToGameMode()`**: `Promise<void>`
- **`_enableFastToResult(data: any)`**: `Promise<boolean>`
- **`_startSpinningTable(data: any)`**: `Promise<void>`
- **`_stopSpinningTable(data: any)`**: `Promise<void>`
- **`_resumeGameMode()`**: `Promise<void>`
- **`_playGameModes(data: any)`**: `Promise<boolean>`
- **`_checkRespinAfterPlayGameMode(data: any)`**: `Promise<boolean>`
- **`_checkResumeGameMode(data: any)`**: `Promise<void>`
- **`_switchNextGameMode(data: any)`**: `Promise<void>`
- **`delayAction(time: number)`**: `Promise<void>`
- **`_playResumeMode(data: any)`**: `Promise<boolean>`
- **`_exitGameMode(data?: any)`**: `Promise<void>`
- **`_startRespinningTable(data: any)`**: `Promise<void>`
- **`_stopRespinningTable()`**: `Promise<void>`
- **`_sendRespinToNetwork(data: any)`**: `Promise<boolean>`
- **`_handleTrialWallet()`**: `Promise<boolean>`
