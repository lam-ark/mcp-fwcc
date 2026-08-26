---
id: "cc_core_lib:TimeUtils:methods:formatTimeStamp"
title: "Cách dùng TimeUtils.formatTimeStamp() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "methods", "formatTimeStamp", "usage", "guide"]
---

# 📖 `TimeUtils.formatTimeStamp()`

> **Mô tả ngắn**: Thực hiện chức năng `formatTimeStamp` cho class `TimeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TimeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
formatTimeStamp(ts: number, timeFormat?: string, breakLine?: boolean): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `ts` | `number` | `Bắt buộc` | Tham số truyền vào cho formatTimeStamp |
| `timeFormat` | `string` | `Tùy chọn` | Tham số truyền vào cho formatTimeStamp |
| `breakLine` | `boolean` | `Tùy chọn` | Tham số truyền vào cho formatTimeStamp |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TimeUtils } = globalThis.eno;
// Gọi phương thức:
// TimeUtils.formatTimeStamp(ts: number, timeFormat?: string, breakLine?: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
