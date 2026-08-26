---
id: "cc_core_lib:SlotUtils:methods:convertPayLine"
title: "Cách dùng SlotUtils.convertPayLine() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "methods", "convertPayLine", "usage", "guide"]
---

# 📖 `SlotUtils.convertPayLine()`

> **Mô tả ngắn**: Thực hiện chức năng `convertPayLine` cho class `SlotUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SlotUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
convertPayLine(payLines?: string[]): PayLineResult[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `payLines` | `string[]` | `Tùy chọn` | Tham số truyền vào cho convertPayLine |

- **Kiểu trả về**: `PayLineResult[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SlotUtils } = globalThis.eno;
// Gọi phương thức:
// SlotUtils.convertPayLine(payLines?: string[]);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
