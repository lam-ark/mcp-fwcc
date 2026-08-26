---
id: "cc_core_lib:LightningGameDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng LightningGameDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["LightningGameDirector", "lightning_game_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `LightningGameDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.LightningGameDirector` / `globalThis.eno.LightningGameDirector`  
> **Kế thừa**: `SlotGameDirector`

---

## 🎯 1. `LightningGameDirector` Dùng Để Làm Gì? (Purpose & Overview)

`LightningGameDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { LightningGameDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_sendSpinToNetwork(data: any)`**: `Promise<boolean>`
- **`_resumeLastMatrix(data: any)`**: `Promise<boolean>`
- **`_gameFinish(data: any)`**: `Promise<boolean>`
