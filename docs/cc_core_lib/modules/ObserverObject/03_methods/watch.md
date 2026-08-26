---
id: "cc_core_lib:ObserverObject:methods:watch"
title: "Cách dùng ObserverObject.watch() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "methods", "watch", "usage", "guide"]
---

# 📖 `ObserverObject.watch()`

> **Mô tả ngắn**: Thực hiện chức năng `watch` cho class `ObserverObject`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ObserverObject`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
watch(target: any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions): Function
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `any` | `Bắt buộc` | Tham số truyền vào cho watch |
| `targetPath` | `string` | `Bắt buộc` | Tham số truyền vào cho watch |
| `callback` | `CallbackFunction` | `Bắt buộc` | Tham số truyền vào cho watch |
| `context` | `any` | `Tùy chọn` | Tham số truyền vào cho watch |
| `options` | `WatchOptions` | `Tùy chọn` | Tham số truyền vào cho watch |

- **Kiểu trả về**: `Function`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ObserverObject } = globalThis.eno;
// Gọi phương thức:
// ObserverObject.watch(target: any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
