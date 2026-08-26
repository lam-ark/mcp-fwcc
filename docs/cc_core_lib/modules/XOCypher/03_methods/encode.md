---
id: "cc_core_lib:XOCypher:methods:encode"
title: "Cách dùng XOCypher.encode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["XOCypher", "xocypher", "cc_core_lib", "methods", "encode", "usage", "guide"]
---

# 📖 `XOCypher.encode()`

> **Mô tả ngắn**: Thực hiện chức năng `encode` cho class `XOCypher`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `XOCypher`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
encode(key: string, data: string): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `key` | `string` | `Bắt buộc` | Tham số truyền vào cho encode |
| `data` | `string` | `Bắt buộc` | Tham số truyền vào cho encode |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { XOCypher } = globalThis.eno;
// Gọi phương thức:
// XOCypher.encode(key: string, data: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
