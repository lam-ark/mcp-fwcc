---
id: "cc_core_lib:MoneyTween:overview:architecture"
title: "Hướng dẫn & Cách sử dụng MoneyTween (cc-wrap-func)"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `MoneyTween`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.MoneyTween` / `globalThis.eno.MoneyTween`  
> **Kế thừa**: `Object`

---

## 🎯 1. `MoneyTween` Dùng Để Làm Gì? (Purpose & Overview)

`MoneyTween` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { MoneyTween } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`runShortNumber(target: cc.Node, duration: number, endValue: number, options?: Options)`**: `cc.Tween`
- **`runWallet(target: cc.Node, duration: number, endValue: number, options?: Options)`**: `cc.Tween`
- **`getCurrentValue(target: cc.Node)`**: `number`
- **`runBigWinNumber(target: cc.Node, duration: number, endValue: number, options?: Options)`**: `cc.Tween`
- **`stopAllMoneyTweens()`**: `void`
