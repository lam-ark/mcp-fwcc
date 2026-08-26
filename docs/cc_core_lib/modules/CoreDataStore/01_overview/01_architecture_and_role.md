---
id: "cc_core_lib:CoreDataStore:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CoreDataStore (slot-base-logic)"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CoreDataStore`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.CoreDataStore` / `globalThis.eno.CoreDataStore`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `CoreDataStore` Dùng Để Làm Gì? (Purpose & Overview)

`CoreDataStore` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CoreDataStore } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`parseDataPS(data: any, isResume?: boolean)`**: `void`
- **`parseResumeTree(data: any)`**: `void`
- **`isRespinGame(mode: number)`**: `boolean`
- **`_checkNextMode(playSession: any)`**: `void`
- **`getNextGameMode()`**: `number`
- **`getCurrentMode()`**: `number`
- **`getNextResumeMode(mode: number)`**: `number | null`
- **`getPlaySession()`**: `any`
- **`getBonusGameRemain()`**: `number`
- **`parseExtendData(data: any)`**: `void`
- **`parseBigwinConfig(bigWinConfig: any)`**: `void`
- **`getExtendData()`**: `any`
- **`getBigWinConfig()`**: `number[]`
- **`switchGameMode(mode: number)`**: `void`
- **`getFreeSpinTimes()`**: `number`
- **`getTopupGameRemain()`**: `number`
- **`getLightningGameRemain()`**: `number`
- **`setAutoSpin(value: boolean)`**: `void`
- **`isAutoSpin()`**: `boolean`
- **`setTrialMode(value: boolean)`**: `void`
- **`isTrialMode()`**: `boolean`
- **`setPromotion(value: boolean)`**: `void`
- **`hasPromotion()`**: `boolean`
- **`setCurrency(currency: string)`**: `void`
- **`getCurrency()`**: `string`
- **`setServerVersion(serverVersion: string)`**: `void`
- **`getServerVersion()`**: `string`
- **`setAllowCountFTR(value: boolean)`**: `void`
- **`getAllowCountFTR()`**: `boolean`
- **`setAllowShowTurboIntro(value: boolean)`**: `void`
- **`getAllowShowTurboIntro()`**: `boolean`
- **`resetPlaySessionData()`**: `void`
