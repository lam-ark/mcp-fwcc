---
id: "cc_core_lib:JackpotHistoryManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng JackpotHistoryManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `JackpotHistoryManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.JackpotHistoryManager` / `globalThis.eno.JackpotHistoryManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `JackpotHistoryManager` Dùng Để Làm Gì? (Purpose & Overview)

`JackpotHistoryManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { JackpotHistoryManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setDynamicBet(mBet?: string)`**: `void`
- **`initJackpotHistory(data: any)`**: `void`
- **`openJackpotHistory()`**: `void`
- **`closeJackpotHistory()`**: `void`
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
- **`requestHistory(requestParams: any, callback: Function, callbackErr: Function)`**: `void`
