---
id: "cc_core_lib:TurboButtonManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng TurboButtonManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["TurboButtonManager", "turbo_button_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `TurboButtonManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.TurboButtonManager` / `globalThis.eno.TurboButtonManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `TurboButtonManager` Dùng Để Làm Gì? (Purpose & Overview)

`TurboButtonManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { TurboButtonManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`onTurboClicked()`**: `void`
- **`onActiveFromTurboIntro()`**: `void`
- **`switchToTrial()`**: `void`
- **`switchToReal()`**: `void`
- **`turnTurboOn()`**: `void`
- **`turnTurboOff()`**: `void`
- **`onTurboHover()`**: `void`
- **`onTurboExitHover()`**: `void`
- **`onTurboPressed()`**: `void`
- **`onTurboReleased()`**: `void`
