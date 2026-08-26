---
id: "cc_core_lib:BetHistoryManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetHistoryManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetHistoryManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetHistoryManager` / `globalThis.eno.BetHistoryManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `BetHistoryManager` Dùng Để Làm Gì? (Purpose & Overview)

`BetHistoryManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetHistoryManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setDynamicBet(mBet?: string)`**: `void`
- **`initBetHistory(data: any)`**: `void`
- **`openBetHistoryPanel(data?: any)`**: `void`
- **`openBetHistoryDetail(data: any)`**: `void`
- **`closeBetHistoryDetail()`**: `void`
- **`closeBetHistoryPanel()`**: `void`
- **`closeAllPopups()`**: `void`
- **`onNextPage()`**: `void`
- **`onPrevPage()`**: `void`
- **`onFirstPage()`**: `void`
- **`onLastPage()`**: `void`
- **`onPageIndex(index: number)`**: `void`
- **`onRequestResponse(res: any)`**: `void`
- **`requestErr()`**: `void`
- **`clearData()`**: `void`
- **`displayMessage(isActive?: boolean, message?: string)`**: `void`
- **`toggleLoading(isActive?: boolean)`**: `void`
- **`requestDataPage(page: number, quantity: number, callback: Function, callbackErr: Function)`**: `void`
- **`onReloadBetHistory()`**: `void`
