---
id: "cc_core_lib:ObserverObject:methods:register"
title: "Cách dùng ObserverObject.register() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "register", "usage", "guide"]
---

# 📖 `ObserverObject.register()`

> **Mô tả ngắn**: Thực hiện chức năng `register` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
register(obj: any): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `obj` | `any` | `Bắt buộc` | Tham số truyền vào cho register |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject.register(obj: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
