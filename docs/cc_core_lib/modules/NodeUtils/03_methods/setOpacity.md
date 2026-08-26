---
id: "cc_core_lib:NodeUtils:methods:setOpacity"
title: "Cách dùng NodeUtils.setOpacity() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "setOpacity", "usage", "guide"]
---

# 📖 `NodeUtils.setOpacity()`

> **Mô tả ngắn**: Thực hiện chức năng `setOpacity` cho class `NodeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `NodeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setOpacity(node: cc.Node, opacity: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `node` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho setOpacity |
| `opacity` | `number` | `Bắt buộc` | Tham số truyền vào cho setOpacity |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NodeUtils } = globalThis.eno;
// Gọi phương thức:
// NodeUtils.setOpacity(node: cc.Node, opacity: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
