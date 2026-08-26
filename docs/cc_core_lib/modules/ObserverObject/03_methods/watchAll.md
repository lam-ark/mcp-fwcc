---
id: "cc_core_lib:ObserverObject:methods:watchAll"
title: "Cách dùng ObserverObject.watchAll() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "watchAll", "usage", "guide"]
---

# 📖 `ObserverObject.watchAll()`

> **Mô tả ngắn**: Thực hiện chức năng `watchAll` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
watchAll(target: any, callback: CallbackFunction, context?: any): Function
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `any` | `Bắt buộc` | Tham số truyền vào cho watchAll |
| `callback` | `CallbackFunction` | `Bắt buộc` | Tham số truyền vào cho watchAll |
| `context` | `any` | `Tùy chọn` | Tham số truyền vào cho watchAll |

- **Kiểu trả về**: `Function`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject.watchAll(target: any, callback: CallbackFunction, context?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
