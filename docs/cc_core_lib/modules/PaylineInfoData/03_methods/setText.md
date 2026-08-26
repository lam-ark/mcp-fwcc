---
id: "cc_core_lib:PaylineInfoData:methods:setText"
title: "Cách dùng PaylineInfoData.setText() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["PaylineInfoData", "payline_info_data", "cc_core_lib", "methods", "setText", "usage", "guide"]
---

# 📖 `PaylineInfoData.setText()`

> **Mô tả ngắn**: Thực hiện chức năng `setText` cho class `PaylineInfoData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `PaylineInfoData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setText(winText: any, lineText: any, creditText: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `winText` | `any` | `Bắt buộc` | Tham số truyền vào cho setText |
| `lineText` | `any` | `Bắt buộc` | Tham số truyền vào cho setText |
| `creditText` | `any` | `Bắt buộc` | Tham số truyền vào cho setText |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { PaylineInfoData } = globalThis.eno;
// Gọi phương thức:
// PaylineInfoData.setText(winText: any, lineText: any, creditText: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
