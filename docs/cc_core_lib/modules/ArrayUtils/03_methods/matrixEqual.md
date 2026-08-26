---
id: "cc_core_lib:ArrayUtils:methods:matrixEqual"
title: "Cách dùng ArrayUtils.matrixEqual() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "methods", "matrixEqual", "usage", "guide"]
---

# 📖 `ArrayUtils.matrixEqual()`

> **Mô tả ngắn**: Thực hiện chức năng `matrixEqual` cho class `ArrayUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ArrayUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
matrixEqual(a: any[], b: any[]): boolean
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `a` | `any[]` | `Bắt buộc` | Tham số truyền vào cho matrixEqual |
| `b` | `any[]` | `Bắt buộc` | Tham số truyền vào cho matrixEqual |

- **Kiểu trả về**: `boolean`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ArrayUtils } = globalThis.eno;
// Gọi phương thức:
// ArrayUtils.matrixEqual(a: any[], b: any[]);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
