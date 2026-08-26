---
id: "cc_core_lib:NodeUtils:methods:setZIndex"
title: "Cách dùng NodeUtils.setZIndex() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "setZIndex", "usage", "guide"]
---

# 📖 `NodeUtils.setZIndex()`

> **Mô tả ngắn**: Thiết lập chỉ số Z-Index hiển thị và cập nhật thứ tự vẽ (Sibling Index) trong danh sách con.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Đảm bảo node được vẽ đè lên các node khác mà không cần thay đổi cấu trúc cây node.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setZIndex(node: cc.Node, index: number, forceUpdate?: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `node` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho setZIndex |
| `index` | `number` | `Bắt buộc` | Tham số truyền vào cho setZIndex |
| `forceUpdate` | `boolean` | `Tùy chọn` | Tham số truyền vào cho setZIndex |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
NodeUtils.setZIndex(highlightFrameNode, 999, true);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
