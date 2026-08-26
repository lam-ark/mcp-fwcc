---
id: "cc_core_lib:FreeGameDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng FreeGameDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["FreeGameDirector", "free_game_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `FreeGameDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.FreeGameDirector` / `globalThis.eno.FreeGameDirector`  
> **Kế thừa**: `SlotGameDirector`

---

## 🎯 1. `FreeGameDirector` Dùng Để Làm Gì? (Purpose & Overview)

`FreeGameDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { FreeGameDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_checkRespinWhenEnterGameMode()`**: `boolean`
- **`_sendSpinToNetwork(data: any)`**: `Promise<boolean>`
- **`_resumeLastMatrix(data: any)`**: `Promise<boolean>`
- **`_gameFinish(data: any)`**: `Promise<boolean>`
