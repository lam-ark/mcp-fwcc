---
id: "cc_core_lib:SlotUtils:methods:convertSlotMatrix"
title: "Cách dùng SlotUtils.convertSlotMatrix() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "methods", "convertSlotMatrix", "usage", "guide"]
---

# 📖 `SlotUtils.convertSlotMatrix()`

> **Mô tả ngắn**: Thực hiện chức năng `convertSlotMatrix` cho class `SlotUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SlotUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
convertSlotMatrix(arr?: string[], format?: number[]): string[][]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `arr` | `string[]` | `Tùy chọn` | Tham số truyền vào cho convertSlotMatrix |
| `format` | `number[]` | `Tùy chọn` | Tham số truyền vào cho convertSlotMatrix |

- **Kiểu trả về**: `string[][]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SlotUtils } = globalThis.eno;
// Gọi phương thức:
// SlotUtils.convertSlotMatrix(arr?: string[], format?: number[]);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
