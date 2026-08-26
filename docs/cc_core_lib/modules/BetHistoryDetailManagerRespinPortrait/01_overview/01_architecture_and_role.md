---
id: "cc_core_lib:BetHistoryDetailManagerRespinPortrait:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetHistoryDetailManagerRespinPortrait (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerRespinPortrait", "bet_history_detail_manager_respin_portrait", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetHistoryDetailManagerRespinPortrait`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetHistoryDetailManagerRespinPortrait` / `globalThis.eno.BetHistoryDetailManagerRespinPortrait`  
> **Kế thừa**: `BetHistoryDetailManagerBase`

---

## 🎯 1. `BetHistoryDetailManagerRespinPortrait` Dùng Để Làm Gì? (Purpose & Overview)

`BetHistoryDetailManagerRespinPortrait` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetHistoryDetailManagerRespinPortrait } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`registerEvents()`**: `void`
- **`initDataModel()`**: `void`
- **`disableButtons()`**: `void`
- **`_updateButtonState()`**: `void`
- **`_updateButtonRespinState(index: any)`**: `void`
- **`requestNextData()`**: `void`
- **`requestPrevData()`**: `void`
- **`requestNextRespinData()`**: `void`
- **`requestPrevRespinData()`**: `void`
- **`getGameModeData()`**: `any`
- **`clearData()`**: `void`
