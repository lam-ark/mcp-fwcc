---
id: "cc_core_lib:DialogManager:methods:showDialog"
title: "Cách dùng DialogManager.showDialog() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DialogManager", "dialog_manager", "cc_core_lib", "methods", "showDialog", "usage", "guide"]
---

# 📖 `DialogManager.showDialog()`

> **Mô tả ngắn**: Thực hiện chức năng `showDialog` cho class `DialogManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DialogManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
showDialog(message: string, actionOK?: any, actionCancel?: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `message` | `string` | `Bắt buộc` | Tham số truyền vào cho showDialog |
| `actionOK` | `any` | `Tùy chọn` | Tham số truyền vào cho showDialog |
| `actionCancel` | `any` | `Tùy chọn` | Tham số truyền vào cho showDialog |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DialogManager } = globalThis.eno;
// Gọi phương thức:
// DialogManager.showDialog(message: string, actionOK?: any, actionCancel?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
