---
id: "cc_core_lib:Scheduler:methods:scheduleInterval"
title: "Cách dùng Scheduler.scheduleInterval() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "methods", "scheduleInterval", "usage", "guide"]
---

# 📖 `Scheduler.scheduleInterval()`

> **Mô tả ngắn**: Thực hiện chức năng `scheduleInterval` cho class `Scheduler`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `Scheduler`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
scheduleInterval(callback: Function, time: number): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `callback` | `Function` | `Bắt buộc` | Tham số truyền vào cho scheduleInterval |
| `time` | `number` | `Bắt buộc` | Tham số truyền vào cho scheduleInterval |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { Scheduler } = globalThis.eno;
// Gọi phương thức:
// Scheduler.scheduleInterval(callback: Function, time: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
