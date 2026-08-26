---
id: "cc_core_lib:MoneyFormatter:overview:architecture"
title: "Hướng dẫn & Cách sử dụng MoneyFormatter (share-lib)"
category: "cc_core_lib"
tags: ["MoneyFormatter", "money_formatter", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `MoneyFormatter`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.MoneyFormatter` / `globalThis.eno.MoneyFormatter`  
> **Kế thừa**: `Object`

---

## 🎯 1. `MoneyFormatter` Dùng Để Làm Gì? (Purpose & Overview)

`MoneyFormatter` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { MoneyFormatter } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`formatMoney(amount: number, decimalCount?: number, decimal?: string, thousands?: string)`**: `string`
- **`formatCoin(amount: number, decimalCount?: number, decimal?: string, thousands?: string)`**: `string`
- **`formatMoneyShort(num: number, digits?: number)`**: `string`
- **`formatBet(amount: number, decimalCount?: number, decimal?: string, thousands?: string)`**: `string`
- **`formatWallet(amount: number, decimalCount?: number, decimal?: string, thousands?: string)`**: `string`
