---
id: "cc_core_lib:JackpotManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng JackpotManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `JackpotManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.JackpotManager` / `globalThis.eno.JackpotManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `JackpotManager` Dùng Để Làm Gì? (Purpose & Overview)

`JackpotManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { JackpotManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`handleBetChanged(data: [string, string])`**: `void`
- **`getJackpotData()`**: `JackpotData`
- **`setJackpotData(data: any)`**: `void`
- **`registerJackpotUpdate()`**: `void`
- **`onJackpotUpdate(data: any)`**: `void`
- **`_parseJackpotKey(jpName: string)`**: `{ keyBet: string`
