---
id: "cc_core_lib:JsbUtils:methods:copyTextToClipboard"
title: "Cách dùng JsbUtils.copyTextToClipboard() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "methods", "copyTextToClipboard", "usage", "guide"]
---

# 📖 `JsbUtils.copyTextToClipboard()`

> **Mô tả ngắn**: Thực hiện chức năng `copyTextToClipboard` cho class `JsbUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JsbUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
copyTextToClipboard(text: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `text` | `string` | `Bắt buộc` | Tham số truyền vào cho copyTextToClipboard |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JsbUtils } = globalThis.eno;
// Gọi phương thức:
// JsbUtils.copyTextToClipboard(text: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
