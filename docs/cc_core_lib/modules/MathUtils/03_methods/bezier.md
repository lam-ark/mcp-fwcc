---
id: "cc_core_lib:MathUtils:methods:bezier"
title: "Cách dùng MathUtils.bezier() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MathUtils", "math_utils", "cc_core_lib", "methods", "bezier", "usage", "guide"]
---

# 📖 `MathUtils.bezier()`

> **Mô tả ngắn**: Thực hiện chức năng `bezier` cho class `MathUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MathUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
bezier(pos: number[], ratio: number): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `pos` | `number[]` | `Bắt buộc` | Tham số truyền vào cho bezier |
| `ratio` | `number` | `Bắt buộc` | Tham số truyền vào cho bezier |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MathUtils } = globalThis.eno;
// Gọi phương thức:
// MathUtils.bezier(pos: number[], ratio: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
