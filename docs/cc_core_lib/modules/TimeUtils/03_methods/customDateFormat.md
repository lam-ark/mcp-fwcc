---
id: "cc_core_lib:TimeUtils:methods:customDateFormat"
title: "Cách dùng TimeUtils.customDateFormat() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "methods", "customDateFormat", "usage", "guide"]
---

# 📖 `TimeUtils.customDateFormat()`

> **Mô tả ngắn**: Thực hiện chức năng `customDateFormat` cho class `TimeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TimeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
customDateFormat(date: Date, formatString: string): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `date` | `Date` | `Bắt buộc` | Tham số truyền vào cho customDateFormat |
| `formatString` | `string` | `Bắt buộc` | Tham số truyền vào cho customDateFormat |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TimeUtils } = globalThis.eno;
// Gọi phương thức:
// TimeUtils.customDateFormat(date: Date, formatString: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
