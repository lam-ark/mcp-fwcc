---
id: "cc_core_lib:BetScatterPayManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetScatterPayManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetScatterPayManager", "bet_scatter_pay_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetScatterPayManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetScatterPayManager` / `globalThis.eno.BetScatterPayManager`  
> **Kế thừa**: `BetManager`

---

## 🎯 1. `BetScatterPayManager` Dùng Để Làm Gì? (Purpose & Overview)

`BetScatterPayManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetScatterPayManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setTotalCredit(amount: number)`**: `void`
