---
id: "cc_core_lib:BetAllwaysManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetAllwaysManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetAllwaysManager", "bet_allways_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetAllwaysManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetAllwaysManager` / `globalThis.eno.BetAllwaysManager`  
> **Kế thừa**: `BetManager`

---

## 🎯 1. `BetAllwaysManager` Dùng Để Làm Gì? (Purpose & Overview)

`BetAllwaysManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetAllwaysManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setTotalCredit(amount: number)`**: `void`
