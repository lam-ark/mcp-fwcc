---
id: "cc_core_lib:AlignFullScreenButtonWrapper:methods:removeAllClass"
title: "Cách dùng AlignFullScreenButtonWrapper.removeAllClass() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["AlignFullScreenButtonWrapper", "align_full_screen_button_wrapper", "cc_core_lib", "methods", "removeAllClass", "usage", "guide"]
---

# 📖 `AlignFullScreenButtonWrapper.removeAllClass()`

> **Mô tả ngắn**: Thực hiện chức năng `removeAllClass` cho class `AlignFullScreenButtonWrapper`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `AlignFullScreenButtonWrapper`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
removeAllClass(element: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `element` | `any` | `Bắt buộc` | Tham số truyền vào cho removeAllClass |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { AlignFullScreenButtonWrapper } = globalThis.eno;
// Gọi phương thức:
// AlignFullScreenButtonWrapper.removeAllClass(element: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
