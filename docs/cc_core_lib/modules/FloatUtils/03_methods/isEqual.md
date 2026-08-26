---
id: "cc_core_lib:FloatUtils:methods:isEqual"
title: "Cách dùng FloatUtils.isEqual() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "methods", "isEqual", "usage", "guide"]
---

# 📖 `FloatUtils.isEqual()`

> **Mô tả ngắn**: Thực hiện chức năng `isEqual` cho class `FloatUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `FloatUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
isEqual(a: number, b: number): boolean
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `a` | `number` | `Bắt buộc` | Tham số truyền vào cho isEqual |
| `b` | `number` | `Bắt buộc` | Tham số truyền vào cho isEqual |

- **Kiểu trả về**: `boolean`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { FloatUtils } = globalThis.eno;
// Gọi phương thức:
// FloatUtils.isEqual(a: number, b: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
