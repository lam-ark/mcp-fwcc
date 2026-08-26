---
id: "cc_core_lib:MoneyFormatter:methods:formatMoneyShort"
title: "Cách dùng MoneyFormatter.formatMoneyShort() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyFormatter", "money_formatter", "cc_core_lib", "methods", "formatMoneyShort", "usage", "guide"]
---

# 📖 `MoneyFormatter.formatMoneyShort()`

> **Mô tả ngắn**: Thực hiện chức năng `formatMoneyShort` cho class `MoneyFormatter`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MoneyFormatter`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
formatMoneyShort(num: number, digits?: number): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `num` | `number` | `Bắt buộc` | Tham số truyền vào cho formatMoneyShort |
| `digits` | `number` | `Tùy chọn` | Tham số truyền vào cho formatMoneyShort |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MoneyFormatter } = globalThis.eno;
// Gọi phương thức:
// MoneyFormatter.formatMoneyShort(num: number, digits?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
