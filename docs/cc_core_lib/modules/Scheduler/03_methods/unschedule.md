---
id: "cc_core_lib:Scheduler:methods:unschedule"
title: "Cách dùng Scheduler.unschedule() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "methods", "unschedule", "usage", "guide"]
---

# 📖 `Scheduler.unschedule()`

> **Mô tả ngắn**: Thực hiện chức năng `unschedule` cho class `Scheduler`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `Scheduler`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
unschedule(callback_fn: Function): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `callback_fn` | `Function` | `Bắt buộc` | Tham số truyền vào cho unschedule |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { Scheduler } = globalThis.eno;
// Gọi phương thức:
// Scheduler.unschedule(callback_fn: Function);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
