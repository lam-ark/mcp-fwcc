---
id: "cc_core_lib:SpineUtils:methods:hasAnimation"
title: "Cách dùng SpineUtils.hasAnimation() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "hasAnimation", "usage", "guide"]
---

# 📖 `SpineUtils.hasAnimation()`

> **Mô tả ngắn**: Thực hiện chức năng `hasAnimation` cho class `SpineUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpineUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
hasAnimation(spine: sp.Skeleton, name: string): boolean
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spine` | `sp.Skeleton` | `Bắt buộc` | Tham số truyền vào cho hasAnimation |
| `name` | `string` | `Bắt buộc` | Tham số truyền vào cho hasAnimation |

- **Kiểu trả về**: `boolean`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpineUtils } = globalThis.eno;
// Gọi phương thức:
// SpineUtils.hasAnimation(spine: sp.Skeleton, name: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
