---
id: "cc_core_lib:SlotUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng SlotUtils (slot-base-logic)"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `SlotUtils`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.SlotUtils` / `globalThis.eno.SlotUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `SlotUtils` Dùng Để Làm Gì? (Purpose & Overview)

`SlotUtils` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { SlotUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`convertSlotMatrix(arr?: string[], format?: number[])`**: `string[][]`
- **`convertMegaSymbols(symbols?: string[], format?: string[])`**: `string[]`
- **`convertPayLine(payLines?: string[])`**: `PayLineResult[]`
- **`convertPayLineAllWays(payLines?: string[], multiplier?: number, betDenom?: number)`**: `PayLineAllWaysResult[]`
- **`convertPayLineCluster(payLines?: string[], multiplier?: number, betDenom?: number)`**: `PayLineClusterResult[]`
- **`convertPayLineScatterPay(payLines?: string[], multiplier?: number, betDenom?: number)`**: `PayLineScatterPayResult[]`
- **`generateSymbolIndexes(tableFormat?: number[])`**: `number[][]`
