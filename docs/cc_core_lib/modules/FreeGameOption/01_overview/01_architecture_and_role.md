---
id: "cc_core_lib:FreeGameOption:overview:architecture"
title: "Hướng dẫn & Cách sử dụng FreeGameOption (slot-base-logic)"
category: "cc_core_lib"
tags: ["FreeGameOption", "free_game_option", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `FreeGameOption`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.FreeGameOption` / `globalThis.eno.FreeGameOption`  
> **Kế thừa**: `GameMode`

---

## 🎯 1. `FreeGameOption` Dùng Để Làm Gì? (Purpose & Overview)

`FreeGameOption` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { FreeGameOption } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`onEnter()`**: `void`
- **`runAutoTrigger()`**: `void`
- **`onRequestFreeOption(option: any)`**: `void`
- **`destroy()`**: `void`
