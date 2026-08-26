---
id: "cc_core_lib:GameObject:overview:architecture"
title: "Hướng dẫn & Cách sử dụng GameObject (slot-base-logic)"
category: "cc_core_lib"
tags: ["GameObject", "game_object", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `GameObject`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.GameObject` / `globalThis.eno.GameObject`  
> **Kế thừa**: `Object`

---

## 🎯 1. `GameObject` Dùng Để Làm Gì? (Purpose & Overview)

`GameObject` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { GameObject } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setGameObject(game: Game)`**: `void`
