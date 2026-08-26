---
id: "cc_core_lib:DialogData:methods:setMessage"
title: "Cách dùng DialogData.setMessage() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "methods", "setMessage", "usage", "guide"]
---

# 📖 `DialogData.setMessage()`

> **Mô tả ngắn**: Thực hiện chức năng `setMessage` cho class `DialogData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DialogData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setMessage(message: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `message` | `string` | `Bắt buộc` | Tham số truyền vào cho setMessage |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DialogData } = globalThis.eno;
// Gọi phương thức:
// DialogData.setMessage(message: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
