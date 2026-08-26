---
id: "cc_core_lib:FloatUtils:methods:mul"
title: "Cách dùng FloatUtils.mul() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "methods", "mul", "usage", "guide"]
---

# 📖 `FloatUtils.mul()`

> **Mô tả ngắn**: Nhân 2 số thực an toàn tránh sai số dấu chấm động.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Chuyển đổi các thừa số thành số nguyên, nhân nguyên và chia cho $10^{p_1 + p_2}$.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
mul(a: number | string, b: number | string): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `a` | `number | string` | `Bắt buộc` | Tham số truyền vào cho mul |
| `b` | `number | string` | `Bắt buộc` | Tham số truyền vào cho mul |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const win = FloatUtils.mul(betAmount, multiplier);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
