---
id: "cc_core_lib:SpinButtonNormalManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng SpinButtonNormalManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["SpinButtonNormalManager", "spin_button_normal_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `SpinButtonNormalManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.SpinButtonNormalManager` / `globalThis.eno.SpinButtonNormalManager`  
> **Kế thừa**: `SpinButtonManager`

---

## 🎯 1. `SpinButtonNormalManager` Dùng Để Làm Gì? (Purpose & Overview)

`SpinButtonNormalManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { SpinButtonNormalManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`init()`**: `void`
- **`onSpinButtonHover()`**: `void`
- **`onSpinButtonCancelHover()`**: `void`
- **`onSpinButtonHold(spinTimes?: number)`**: `void`
- **`onSpinClick()`**: `void`
- **`onSpinWithBuyFeature()`**: `void`
- **`spinSpaceTriggered()`**: `void`
- **`onEnableUserAction()`**: `void`
- **`onFastToResultCall()`**: `void`
- **`setButtonSpinning()`**: `void`
- **`setButtonCanStopAuto()`**: `void`
- **`setButtonCanTransitToNormal()`**: `void`
- **`resetNormalSpinButton()`**: `void`
- **`onDisableAutoSpin()`**: `void`
- **`decreaseAutoSpinTimes()`**: `void`
