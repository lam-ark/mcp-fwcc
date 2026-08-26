---
id: "cc_core_lib:TimeUtils:methods:getLeftTime"
title: "Cách dùng TimeUtils.getLeftTime() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "methods", "getLeftTime", "usage", "guide"]
---

# 📖 `TimeUtils.getLeftTime()`

> **Mô tả ngắn**: Thực hiện chức năng `getLeftTime` cho class `TimeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TimeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getLeftTime(endTime: number, serverTime: number, millisecond?: number): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `endTime` | `number` | `Bắt buộc` | Tham số truyền vào cho getLeftTime |
| `serverTime` | `number` | `Bắt buộc` | Tham số truyền vào cho getLeftTime |
| `millisecond` | `number` | `Tùy chọn` | Tham số truyền vào cho getLeftTime |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TimeUtils } = globalThis.eno;
// Gọi phương thức:
// TimeUtils.getLeftTime(endTime: number, serverTime: number, millisecond?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
