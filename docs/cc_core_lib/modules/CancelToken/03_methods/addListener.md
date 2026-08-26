---
id: "cc_core_lib:CancelToken:methods:addListener"
title: "Cách dùng CancelToken.addListener() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CancelToken", "cancel_token", "cc_core_lib", "methods", "addListener", "usage", "guide"]
---

# 📖 `CancelToken.addListener()`

> **Mô tả ngắn**: Thực hiện chức năng `addListener` cho class `CancelToken`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CancelToken`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
addListener(listener: () => void): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `listener` | `() => void` | `Bắt buộc` | Tham số truyền vào cho addListener |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CancelToken } = globalThis.eno;
// Gọi phương thức:
// CancelToken.addListener(listener: () => void);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
