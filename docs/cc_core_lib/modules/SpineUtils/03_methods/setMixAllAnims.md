---
id: "cc_core_lib:SpineUtils:methods:setMixAllAnims"
title: "Cách dùng SpineUtils.setMixAllAnims() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "setMixAllAnims", "usage", "guide"]
---

# 📖 `SpineUtils.setMixAllAnims()`

> **Mô tả ngắn**: Thực hiện chức năng `setMixAllAnims` cho class `SpineUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpineUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setMixAllAnims(spine: sp.Skeleton, mixTime?: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spine` | `sp.Skeleton` | `Bắt buộc` | Tham số truyền vào cho setMixAllAnims |
| `mixTime` | `number` | `Tùy chọn` | Tham số truyền vào cho setMixAllAnims |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpineUtils } = globalThis.eno;
// Gọi phương thức:
// SpineUtils.setMixAllAnims(spine: sp.Skeleton, mixTime?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
