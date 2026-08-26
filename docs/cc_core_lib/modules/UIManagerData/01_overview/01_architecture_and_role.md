---
id: "cc_core_lib:UIManagerData:overview:architecture"
title: "Hướng dẫn & Cách sử dụng UIManagerData (slot-base-logic)"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `UIManagerData`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.UIManagerData` / `globalThis.eno.UIManagerData`  
> **Kế thừa**: `Object`

---

## 🎯 1. `UIManagerData` Dùng Để Làm Gì? (Purpose & Overview)

`UIManagerData` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { UIManagerData } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setTrialMode(isTrial: boolean)`**: `void`
- **`setTurboActive(isTurbo: boolean)`**: `void`
- **`showInfo(isOpen: boolean)`**: `void`
- **`setAutoSpinPanelOpen(isOpen: boolean)`**: `void`
- **`openGameSettings(isOpen: boolean)`**: `void`
- **`setBetSelectionPanelOpen(isOpen: boolean)`**: `void`
- **`setMenuPanelOpen(isOpen: boolean)`**: `void`
- **`activeExitButton(isActive: boolean)`**: `void`
- **`showJackpot(isActive: boolean)`**: `void`
- **`showJackpotTrial(isActive: boolean)`**: `void`
- **`showWallet(isActive: boolean)`**: `void`
- **`showWalletTrial(isActive: boolean)`**: `void`
- **`setUserInteractionEnabled(enabled: boolean)`**: `void`
- **`setPayTablePanelOpen(isOpen: boolean)`**: `void`
- **`setBuyFeaturePanelOpen(isOpen: boolean)`**: `void`
- **`setDisplayPopup(isDisplay: boolean)`**: `void`
- **`setCanShowTurboIntro(canShow: boolean)`**: `void`
- **`setSwitchingMode(isSwitching: boolean)`**: `void`
