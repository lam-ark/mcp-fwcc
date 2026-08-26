---
id: "cc_core_lib:MoneyTween:methods:getCurrentValue"
title: "Cách dùng MoneyTween.getCurrentValue() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "getCurrentValue", "usage", "guide"]
---

# 📖 `MoneyTween.getCurrentValue()`

> **Mô tả ngắn**: Thực hiện chức năng `getCurrentValue` cho class `MoneyTween`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MoneyTween`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getCurrentValue(target: cc.Node): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho getCurrentValue |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MoneyTween } = globalThis.eno;
// Gọi phương thức:
// MoneyTween.getCurrentValue(target: cc.Node);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
