---
id: "cc_core_lib:FloatUtils:methods:minus"
title: "Cách dùng FloatUtils.minus() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "methods", "minus", "usage", "guide"]
---

# 📖 `FloatUtils.minus()`

> **Mô tả ngắn**: Thực hiện chức năng `minus` cho class `FloatUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `FloatUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
minus(a: number | string, b: number | string): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `a` | `number | string` | `Bắt buộc` | Tham số truyền vào cho minus |
| `b` | `number | string` | `Bắt buộc` | Tham số truyền vào cho minus |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { FloatUtils } = globalThis.eno;
// Gọi phương thức:
// FloatUtils.minus(a: number | string, b: number | string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
