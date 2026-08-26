---
id: "cc_core_lib:ObserverObject:methods:_defineProperty"
title: "Cách dùng ObserverObject._defineProperty() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "_defineProperty", "usage", "guide"]
---

# 📖 `ObserverObject._defineProperty()`

> **Mô tả ngắn**: Thực hiện chức năng `_defineProperty` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_defineProperty(rootObj: any, obj: any, key: string, basePath: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `rootObj` | `any` | `Bắt buộc` | Tham số truyền vào cho _defineProperty |
| `obj` | `any` | `Bắt buộc` | Tham số truyền vào cho _defineProperty |
| `key` | `string` | `Bắt buộc` | Tham số truyền vào cho _defineProperty |
| `basePath` | `string` | `Bắt buộc` | Tham số truyền vào cho _defineProperty |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject._defineProperty(rootObj: any, obj: any, key: string, basePath: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
