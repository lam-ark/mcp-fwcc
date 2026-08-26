---
id: "cc_core_lib:CommandBridge:methods:emit"
title: "Cách dùng CommandBridge.emit() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "methods", "emit", "usage", "guide"]
---

# 📖 `CommandBridge.emit()`

> **Mô tả ngắn**: Thực hiện chức năng `emit` cho class `CommandBridge`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CommandBridge`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
emit(event: string, ...args: any[]): Promise<void>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `event` | `string` | `Bắt buộc` | Tham số truyền vào cho emit |
| `...args` | `any[]` | `Bắt buộc` | Tham số truyền vào cho emit |

- **Kiểu trả về**: `Promise<void>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CommandBridge } = globalThis.eno;
// Gọi phương thức:
// CommandBridge.emit(event: string, ...args: any[]);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
