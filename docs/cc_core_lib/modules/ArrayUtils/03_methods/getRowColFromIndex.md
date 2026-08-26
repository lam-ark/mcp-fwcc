---
id: "cc_core_lib:ArrayUtils:methods:getRowColFromIndex"
title: "Cách dùng ArrayUtils.getRowColFromIndex() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "methods", "getRowColFromIndex", "usage", "guide"]
---

# 📖 `ArrayUtils.getRowColFromIndex()`

> **Mô tả ngắn**: Thực hiện chức năng `getRowColFromIndex` cho class `ArrayUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ArrayUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getRowColFromIndex(formatMatrix: number[], index: number): { row: number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `formatMatrix` | `number[]` | `Bắt buộc` | Tham số truyền vào cho getRowColFromIndex |
| `index` | `number` | `Bắt buộc` | Tham số truyền vào cho getRowColFromIndex |

- **Kiểu trả về**: `{ row: number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ArrayUtils } = globalThis.eno;
// Gọi phương thức:
// ArrayUtils.getRowColFromIndex(formatMatrix: number[], index: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
