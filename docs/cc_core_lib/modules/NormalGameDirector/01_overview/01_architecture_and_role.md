---
id: "cc_core_lib:NormalGameDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng NormalGameDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["NormalGameDirector", "normal_game_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `NormalGameDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.NormalGameDirector` / `globalThis.eno.NormalGameDirector`  
> **Kế thừa**: `SlotGameDirector`

---

## 🎯 1. `NormalGameDirector` Dùng Để Làm Gì? (Purpose & Overview)

`NormalGameDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { NormalGameDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_checkConditionShowTurboIntro()`**: `Promise<boolean>`
- **`_checkEnoughBalanceBuyFeature(data: any)`**: `Promise<boolean>`
- **`_updateWalletAfterBuyFeatureSpin(data: any)`**: `Promise<boolean>`
- **`_setButtonSpinning(data: any)`**: `Promise<boolean>`
- **`_updateWalletAfterSpin(data: any)`**: `Promise<boolean>`
- **`_sendSpinToNetwork(data: any)`**: `Promise<boolean>`
- **`_sendBuyFeatureSpinToNetwork(currentBetData: string)`**: `Promise<boolean>`
- **`_enableButtons(data: any)`**: `Promise<boolean>`
- **`_prepareNextSpin(data: any)`**: `Promise<boolean>`
- **`_resumeLastBet(data: any)`**: `Promise<boolean>`
- **`_resumeLastBetBuyFeature(data: any)`**: `Promise<boolean>`
- **`_resumeLastExtraBetFeature(data: any)`**: `Promise<boolean>`
- **`_playRespinMode(data: any)`**: `Promise<any>`
- **`_finishPlaySession(data: any)`**: `Promise<boolean>`
- **`_finishResumePlaySession(data: any)`**: `Promise<boolean>`
- **`_resetTrialWallet(data: any)`**: `Promise<boolean>`
- **`_updateSpinRemaining(data: any)`**: `Promise<boolean>`
- **`_decreasePromotionRemain(data: any)`**: `Promise<boolean>`
- **`_checkMaxTrialSession(data: any)`**: `Promise<boolean>`
- **`_updateWalletTrialAfterSpin(data: any)`**: `Promise<boolean>`
- **`_showResumeNormalGame(data: any)`**: `Promise<void>`
- **`_preResumeGameMode(data: any)`**: `Promise<void>`
- **`_forceStopCurrentGameMode()`**: `Promise<void>`
- **`_resetNormalSpinButton()`**: `Promise<boolean>`
- **`_triggerSpinWithBuyFeature()`**: `Promise<void>`
- **`_showResultEntry()`**: `Promise<void>`
