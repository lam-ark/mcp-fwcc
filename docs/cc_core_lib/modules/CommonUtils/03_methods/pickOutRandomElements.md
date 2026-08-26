---
id: "cc_core_lib:CommonUtils:methods:pickOutRandomElements"
title: "Cách dùng CommonUtils.pickOutRandomElements() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "methods", "pickOutRandomElements", "usage", "guide"]
---

# 📖 `CommonUtils.pickOutRandomElements()`

> **Mô tả ngắn**: Thực hiện chức năng `pickOutRandomElements` cho class `CommonUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CommonUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
pickOutRandomElements(array: any[], pickNumber?: number): any[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `array` | `any[]` | `Bắt buộc` | Tham số truyền vào cho pickOutRandomElements |
| `pickNumber` | `number` | `Tùy chọn` | Tham số truyền vào cho pickOutRandomElements |

- **Kiểu trả về**: `any[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CommonUtils } = globalThis.eno;
// Gọi phương thức:
// CommonUtils.pickOutRandomElements(array: any[], pickNumber?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
