---
id: "cc_core_lib:ArrayUtils:methods:transpose"
title: "Cách dùng ArrayUtils.transpose() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "methods", "transpose", "usage", "guide"]
---

# 📖 `ArrayUtils.transpose()`

> **Mô tả ngắn**: Thực hiện chức năng `transpose` cho class `ArrayUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ArrayUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
transpose(matrix: Array<any>): Array<any>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `matrix` | `Array<any>` | `Bắt buộc` | Tham số truyền vào cho transpose |

- **Kiểu trả về**: `Array<any>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ArrayUtils } = globalThis.eno;
// Gọi phương thức:
// ArrayUtils.transpose(matrix: Array<any>);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
