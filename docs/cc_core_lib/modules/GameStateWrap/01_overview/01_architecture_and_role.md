---
id: "cc_core_lib:GameStateWrap:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameStateWrap (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameStateWrap`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameStateWrap` / `globalThis.eno.GameStateWrap`  
> **Kế thừa**: `Object`

---

## 🎯 1. `GameStateWrap` Dùng Để Làm Gì? (Purpose & Overview)

`GameStateWrap` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameStateWrap } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`init()`**: `void`
- **`bindTutorialData(tutorialData: any)`**: `void`
- **`_decodeTutorialData(tutorialData: any)`**: `void`
- **`onCannotConnect()`**: `void`
- **`onCannotAuthen()`**: `void`
- **`onNetworkWarning()`**: `void`
- **`onShowPopupDisconnected()`**: `void`
- **`onConnected()`**: `void`
- **`switchToTrial()`**: `void`
- **`getCurrentWallet()`**: `void`
- **`_fireEventJoinGameDenied()`**: `void`
- **`_fireEventStateUpdated(data: any)`**: `void`
- **`_fireEventStatePushed(data: any)`**: `void`
- **`_fireEventErrorPushed(data: any)`**: `void`
- **`_fireEventRequestDenied(data: any)`**: `void`
- **`_fireEventLeaveGameTrial(data: any)`**: `void`
- **`_fireEventJackpotWin(data: any)`**: `void`
- **`_fireEventNoticeJackpotWin(data: any)`**: `void`
- **`_fireEventNoticeUserWinJackpot(data: any)`**: `void`
- **`_fireEventJoinGameResult(data: any)`**: `void`
- **`_handleCommandSendSuccessfully(data: any)`**: `void`
- **`onNetworkConnectFail()`**: `void`
- **`onNetworkConnectSuccess()`**: `void`
- **`_timeoutExpectedEventHandler(event: any)`**: `void`
- **`_verifyExpectedEvent(eventName: any)`**: `void`
- **`skipTutorial()`**: `void`
- **`switchToReal()`**: `void`
- **`triggerJoinTrial()`**: `void`
- **`triggerSpinRequest(betId: any, betLines?: any)`**: `void`
- **`triggerSpinRequestBatch1(currentBetValue: any)`**: `void`
- **`_getNewTrialPS()`**: `void`
- **`_returnTrialPS()`**: `void`
- **`triggerFreeSpinRequest()`**: `void`
- **`triggerFreeSpinEventRequest()`**: `void`
- **`triggerFreeSpinOption(option: any)`**: `void`
- **`triggerFreeSpinEventOption(option: any)`**: `void`
- **`triggerMiniGame(openCell: any)`**: `void`
- **`triggerLightningSpinRequest()`**: `void`
- **`triggerPowerUpSpinRequest(openCell: any)`**: `void`
- **`triggerGambleSpinRequest(openCell: any, totalBet: any)`**: `void`
- **`triggerRespinRequest()`**: `void`
- **`_triggerGetLatestStatePrivate(metaData: any)`**: `void`
- **`triggerLeaveGameTrialRequest()`**: `void`
- **`cleanUpForGame()`**: `void`
- **`cleanUpNetWork()`**: `void`
- **`outGame()`**: `void`
- **`networkCallbackJP(callbackJP: any)`**: `void`
- **`_timeOutReceiveAck(event: any)`**: `void`
- **`gameOnPause()`**: `void`
- **`gameOnResume()`**: `void`
- **`_cleanUp()`**: `void`
- **`onForceGetLastedState(isOn: any)`**: `void`
- **`_fireUpdateTrial(data: any)`**: `void`
- **`isFinishedTutorialData()`**: `boolean`
- **`onTimeoutGetLastedState()`**: `void`
- **`_fireEventUserLogOutFunc()`**: `void`
