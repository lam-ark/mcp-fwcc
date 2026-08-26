---
id: "cc_core_lib:ObserverObject:methods:recursive"
title: "Cách dùng ObserverObject.recursive() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "recursive", "usage", "guide"]
---

# 📖 `ObserverObject.recursive()`

> **Mô tả ngắn**: Thực hiện chức năng `recursive` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
recursive(target: any, path?: string, paths?: string[], visited?: WeakSet<any>): string[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `any` | `Bắt buộc` | Tham số truyền vào cho recursive |
| `path` | `string` | `Tùy chọn` | Tham số truyền vào cho recursive |
| `paths` | `string[]` | `Tùy chọn` | Tham số truyền vào cho recursive |
| `visited` | `WeakSet<any>` | `Tùy chọn` | Tham số truyền vào cho recursive |

- **Kiểu trả về**: `string[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject.recursive(target: any, path?: string, paths?: string[], visited?: WeakSet<any>);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
