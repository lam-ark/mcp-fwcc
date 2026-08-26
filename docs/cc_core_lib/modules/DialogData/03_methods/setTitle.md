---
id: "cc_core_lib:DialogData:methods:setTitle"
title: "Cách dùng DialogData.setTitle() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "methods", "setTitle", "usage", "guide"]
---

# 📖 `DialogData.setTitle()`

> **Mô tả ngắn**: Thực hiện chức năng `setTitle` cho class `DialogData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DialogData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setTitle(title: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `title` | `string` | `Bắt buộc` | Tham số truyền vào cho setTitle |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DialogData } = globalThis.eno;
// Gọi phương thức:
// DialogData.setTitle(title: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
