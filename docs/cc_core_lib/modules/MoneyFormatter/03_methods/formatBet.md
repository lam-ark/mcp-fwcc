---
id: "cc_core_lib:MoneyFormatter:methods:formatBet"
title: "Cách dùng MoneyFormatter.formatBet() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyFormatter", "money_formatter", "cc_core_lib", "methods", "formatBet", "usage", "guide"]
---

# 📖 `MoneyFormatter.formatBet()`

> **Mô tả ngắn**: Thực hiện chức năng `formatBet` cho class `MoneyFormatter`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MoneyFormatter`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
formatBet(amount: number, decimalCount?: number, decimal?: string, thousands?: string): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `amount` | `number` | `Bắt buộc` | Tham số truyền vào cho formatBet |
| `decimalCount` | `number` | `Tùy chọn` | Tham số truyền vào cho formatBet |
| `decimal` | `string` | `Tùy chọn` | Tham số truyền vào cho formatBet |
| `thousands` | `string` | `Tùy chọn` | Tham số truyền vào cho formatBet |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MoneyFormatter } = globalThis.eno;
// Gọi phương thức:
// MoneyFormatter.formatBet(amount: number, decimalCount?: number, decimal?: string, thousands?: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
