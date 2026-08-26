---
id: "cc_core_lib:NodeUtils:methods:getOrAddComponent"
title: "Cách dùng NodeUtils.getOrAddComponent() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "getOrAddComponent", "usage", "guide"]
---

# 📖 `NodeUtils.getOrAddComponent()`

> **Mô tả ngắn**: Thực hiện chức năng `getOrAddComponent` cho class `NodeUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `NodeUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getOrAddComponent(node: cc.Node, component: string): any | null
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `node` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho getOrAddComponent |
| `component` | `string` | `Bắt buộc` | Tham số truyền vào cho getOrAddComponent |

- **Kiểu trả về**: `any | null`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NodeUtils } = globalThis.eno;
// Gọi phương thức:
// NodeUtils.getOrAddComponent(node: cc.Node, component: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
