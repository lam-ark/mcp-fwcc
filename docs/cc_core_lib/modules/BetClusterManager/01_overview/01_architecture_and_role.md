---
id: "cc_core_lib:BetClusterManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BetClusterManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["BetClusterManager", "bet_cluster_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BetClusterManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BetClusterManager` / `globalThis.eno.BetClusterManager`  
> **Kế thừa**: `BetManager`

---

## 🎯 1. `BetClusterManager` Dùng Để Làm Gì? (Purpose & Overview)

`BetClusterManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BetClusterManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setTotalCredit(amount: number)`**: `void`
