---
id: "cc_core_lib:ObjectUtils:methods:cloneDeep"
title: "Cách dùng ObjectUtils.cloneDeep() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObjectUtils", "object_utils", "cc_core_lib", "methods", "cloneDeep", "usage", "guide"]
---

# 📖 `ObjectUtils.cloneDeep()`

> **Mô tả ngắn**: Thực hiện chức năng `cloneDeep` cho class `ObjectUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObjectUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
cloneDeep(value: any, cache?: WeakMap<object, any>): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `value` | `any` | `Bắt buộc` | Tham số truyền vào cho cloneDeep |
| `cache` | `WeakMap<object` | `Tùy chọn` | Tham số truyền vào cho cloneDeep |
| `any>` | `any` | `Bắt buộc` | Tham số truyền vào cho cloneDeep |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObjectUtils } = globalThis.eno;
// Gọi phương thức:
// ObjectUtils.cloneDeep(value: any, cache?: WeakMap<object, any>);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
