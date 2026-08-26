---
id: "cc_core_lib:SpineUtils:methods:getAnimationsName"
title: "Cách dùng SpineUtils.getAnimationsName() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "getAnimationsName", "usage", "guide"]
---

# 📖 `SpineUtils.getAnimationsName()`

> **Mô tả ngắn**: Thực hiện chức năng `getAnimationsName` cho class `SpineUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpineUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getAnimationsName(spine: sp.Skeleton): string[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spine` | `sp.Skeleton` | `Bắt buộc` | Tham số truyền vào cho getAnimationsName |

- **Kiểu trả về**: `string[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpineUtils } = globalThis.eno;
// Gọi phương thức:
// SpineUtils.getAnimationsName(spine: sp.Skeleton);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
