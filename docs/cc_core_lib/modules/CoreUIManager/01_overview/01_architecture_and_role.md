---
id: "cc_core_lib:CoreUIManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CoreUIManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["CoreUIManager", "core_uimanager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CoreUIManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.CoreUIManager` / `globalThis.eno.CoreUIManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `CoreUIManager` Dùng Để Làm Gì? (Purpose & Overview)

`CoreUIManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CoreUIManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`init()`**: `void`
- **`onDisableInteraction()`**: `void`
- **`onEnableUserAction()`**: `void`
- **`openGameInfo()`**: `void`
- **`closeGameInfo()`**: `void`
- **`openGameSettings()`**: `void`
- **`closeGameSettings()`**: `void`
- **`openBetSelectionPanel()`**: `void`
- **`closeBetSelectionPanel()`**: `void`
- **`openMenuPanel()`**: `void`
- **`closeMenuPanel()`**: `void`
- **`activeExitButton()`**: `void`
- **`onSwitchToTrialMode()`**: `void`
- **`onSwitchToRealMode()`**: `void`
- **`setSwitchingMode(isSwitching: boolean)`**: `void`
- **`closeAllPopups()`**: `void`
- **`openAutoSpinPanel()`**: `void`
- **`closeAutoSpinPanel()`**: `void`
- **`openPayTablePanel()`**: `void`
- **`closePayTablePanel()`**: `void`
- **`openBuyFeaturePanel()`**: `void`
- **`closeBuyFeaturePanel()`**: `void`
- **`hasBlockingPopup()`**: `boolean`
- **`setShowingTrialDialog(isShowing: boolean)`**: `void`
- **`setShowingDialogMessage(isShowing: boolean)`**: `void`
- **`loadCacheIntroTurbo()`**: `void`
- **`canShowTurboIntro()`**: `boolean`
- **`onTurboActive(active: boolean)`**: `void`
- **`checkTurboModeSuggestionPopup()`**: `void`
- **`saveCacheTurboIntro()`**: `void`
- **`onFastToResultCall()`**: `void`
- **`onActiveTurboModeSuggestionPopup()`**: `void`
