---
id: "cc_core_lib:DialogData:methods:setButtonCancelDisplay"
title: "Cách dùng DialogData.setButtonCancelDisplay() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "methods", "setButtonCancelDisplay", "usage", "guide"]
---

# 📖 `DialogData.setButtonCancelDisplay()`

> **Mô tả ngắn**: Thực hiện chức năng `setButtonCancelDisplay` cho class `DialogData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DialogData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setButtonCancelDisplay(isActive: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `isActive` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setButtonCancelDisplay |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DialogData } = globalThis.eno;
// Gọi phương thức:
// DialogData.setButtonCancelDisplay(isActive: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
