---
id: "cc_core_lib:BetScatterPayManager:methods:setTotalCredit"
title: "Cách dùng BetScatterPayManager.setTotalCredit() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetScatterPayManager", "bet_scatter_pay_manager", "cc_core_lib", "methods", "setTotalCredit", "usage", "guide"]
---

# 📖 `BetScatterPayManager.setTotalCredit()`

> **Mô tả ngắn**: Thực hiện chức năng `setTotalCredit` cho class `BetScatterPayManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetScatterPayManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setTotalCredit(amount: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `amount` | `number` | `Bắt buộc` | Tham số truyền vào cho setTotalCredit |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetScatterPayManager } = globalThis.eno;
// Gọi phương thức:
// BetScatterPayManager.setTotalCredit(amount: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
