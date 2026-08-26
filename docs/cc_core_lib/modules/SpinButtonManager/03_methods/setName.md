---
id: "cc_core_lib:SpinButtonManager:methods:setName"
title: "Cách dùng SpinButtonManager.setName() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpinButtonManager", "spin_button_manager", "cc_core_lib", "methods", "setName", "usage", "guide"]
---

# 📖 `SpinButtonManager.setName()`

> **Mô tả ngắn**: Thực hiện chức năng `setName` cho class `SpinButtonManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpinButtonManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setName(name: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `name` | `string` | `Bắt buộc` | Tham số truyền vào cho setName |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpinButtonManager } = globalThis.eno;
// Gọi phương thức:
// SpinButtonManager.setName(name: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
