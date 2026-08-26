---
id: "cc_core_lib:BetHistoryDetailManagerBase:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetHistoryDetailManagerBase (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetHistoryDetailManagerBase`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetHistoryDetailManagerBase` / `globalThis.eno.BetHistoryDetailManagerBase`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `BetHistoryDetailManagerBase` Dùng Để Làm Gì? (Purpose & Overview)

`BetHistoryDetailManagerBase` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetHistoryDetailManagerBase } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`registerEvents()`**: `void`
- **`initBetDetail(sessionData: any)`**: `void`
- **`requestNextData()`**: `void`
- **`requestPrevData()`**: `void`
- **`requestDataPage(index: number)`**: `void`
- **`disableButtons()`**: `void`
- **`requestDetail(page?: number)`**: `void`
- **`onResponseSummary(betHistoryDetailId: string, res: any)`**: `void`
- **`onResponseUserSpin(betHistoryDetailId: string, pageIndex: number, res: any)`**: `void`
- **`requestErr()`**: `void`
- **`clearData()`**: `void`
- **`_formatSummaryData(data: any)`**: `any`
- **`_formatUserSpinData(data: any)`**: `any`
- **`_formatScrollData(gameModeData: any, scroll: any)`**: `void`
- **`_capitalizeFirstLetter(str: string)`**: `string`
- **`_updateButtonState()`**: `void`
- **`onOpen()`**: `void`
- **`onClose()`**: `void`
