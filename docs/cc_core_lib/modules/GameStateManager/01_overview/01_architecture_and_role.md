---
id: "cc_core_lib:GameStateManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameStateManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameStateManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameStateManager` / `globalThis.eno.GameStateManager`  
> **Kế thừa**: `Object`

---

## 🎯 1. `GameStateManager` Dùng Để Làm Gì? (Purpose & Overview)

`GameStateManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameStateManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`init()`**: `void`
- **`onCannotConnect()`**: `void`
- **`onCannotAuthen()`**: `void`
- **`onNetworkWarning()`**: `void`
- **`onShowPopupDisconnected()`**: `void`
- **`onConnected()`**: `void`
- **`bindTutorialData(tutorialData: any)`**: `void`
- **`_decodeTutorialData(tutorialData: any)`**: `any`
- **`getCurrentWallet()`**: `number`
- **`switchToTrial()`**: `boolean`
- **`skipTutorial()`**: `void`
- **`switchToReal()`**: `void`
- **`triggerJoinTrial()`**: `void`
- **`triggerSpinRequest(betId: string, betLines?: number)`**: `void`
- **`triggerSpinRequestBatch1(currentBetValue: number)`**: `void`
- **`_getNewTrialPS()`**: `boolean`
- **`isFinishedTutorialData()`**: `boolean`
- **`_returnTrialPS()`**: `void`
- **`_fireUpdateTrial(response: any)`**: `void`
- **`triggerFreeSpinRequest()`**: `void`
- **`triggerFreeSpinEventRequest()`**: `void`
- **`triggerFreeSpinOption(option: any)`**: `void`
- **`triggerFreeSpinEventOption(option: any)`**: `void`
- **`triggerMiniGame(openCell: any)`**: `void`
- **`triggerLightningSpinRequest()`**: `void`
- **`triggerPowerUpSpinRequest(openCell: any)`**: `void`
- **`triggerGambleSpinRequest(openCell: any, totalBet: number)`**: `void`
- **`triggerRespinRequest()`**: `void`
- **`_triggerGetLatestStatePrivate(metaData: any)`**: `void`
- **`triggerLeaveGameTrialRequest()`**: `void`
- **`cleanUpForGame()`**: `void`
- **`cleanUpNetWork()`**: `void`
- **`outGame()`**: `void`
- **`networkCallbackJP(callbackJP: any)`**: `void`
- **`gameOnPause()`**: `void`
- **`gameOnResume()`**: `void`
- **`_verifyExpectedEvent(eventData: any)`**: `boolean`
- **`_checkMismatchData(eventData: any)`**: `void`
- **`_gotoNormalMode()`**: `void`
- **`_gotoPanicMode()`**: `void`
- **`_gotoDieMode(reason: any, sendGameMessage?: boolean)`**: `void`
- **`_cleanUp()`**: `void`
- **`_timeoutExpectedEventHandler(event: any)`**: `void`
