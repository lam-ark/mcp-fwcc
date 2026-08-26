---
id: "cc_core_lib:NodeUtils:methods:getGameIdFromNode"
title: "Cách dùng NodeUtils.getGameIdFromNode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "getGameIdFromNode", "usage", "guide"]
---

# 📖 `NodeUtils.getGameIdFromNode()`

> **Mô tả ngắn**: Thực hiện chức năng `getGameIdFromNode` cho class `NodeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `NodeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getGameIdFromNode(node: cc.Node): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `node` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho getGameIdFromNode |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NodeUtils } = globalThis.eno;
// Gọi phương thức:
// NodeUtils.getGameIdFromNode(node: cc.Node);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
