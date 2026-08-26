---
id: "cc_core_lib:DialogManager:methods:handleActionOK"
title: "Cách dùng DialogManager.handleActionOK() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DialogManager", "dialog_manager", "cc_core_lib", "methods", "handleActionOK", "usage", "guide"]
---

# 📖 `DialogManager.handleActionOK()`

> **Mô tả ngắn**: Thực hiện chức năng `handleActionOK` cho class `DialogManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DialogManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
handleActionOK(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DialogManager } = globalThis.eno;
// Gọi phương thức:
// DialogManager.handleActionOK();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
