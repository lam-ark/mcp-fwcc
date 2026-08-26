---
id: "cc_core_lib:ObserverObject:methods:_registerData"
title: "Cách dùng ObserverObject._registerData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "_registerData", "usage", "guide"]
---

# 📖 `ObserverObject._registerData()`

> **Mô tả ngắn**: Thực hiện chức năng `_registerData` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_registerData(target: any, rootObj?: any, path?: string, visited?: WeakSet<any>): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `any` | `Bắt buộc` | Tham số truyền vào cho _registerData |
| `rootObj` | `any` | `Tùy chọn` | Tham số truyền vào cho _registerData |
| `path` | `string` | `Tùy chọn` | Tham số truyền vào cho _registerData |
| `visited` | `WeakSet<any>` | `Tùy chọn` | Tham số truyền vào cho _registerData |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject._registerData(target: any, rootObj?: any, path?: string, visited?: WeakSet<any>);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
