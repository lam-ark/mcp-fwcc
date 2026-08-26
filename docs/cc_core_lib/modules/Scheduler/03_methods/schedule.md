---
id: "cc_core_lib:Scheduler:methods:schedule"
title: "Cách dùng Scheduler.schedule() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "methods", "schedule", "usage", "guide"]
---

# 📖 `Scheduler.schedule()`

> **Mô tả ngắn**: Thực hiện chức năng `schedule` cho class `Scheduler`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `Scheduler`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
schedule(callback: Function, interval: number, repeat: number, delay: number): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `callback` | `Function` | `Bắt buộc` | Tham số truyền vào cho schedule |
| `interval` | `number` | `Bắt buộc` | Tham số truyền vào cho schedule |
| `repeat` | `number` | `Bắt buộc` | Tham số truyền vào cho schedule |
| `delay` | `number` | `Bắt buộc` | Tham số truyền vào cho schedule |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { Scheduler } = globalThis.eno;
// Gọi phương thức:
// Scheduler.schedule(callback: Function, interval: number, repeat: number, delay: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
