---
id: "cc_core_lib:CancelToken:methods:cancel"
title: "Cách dùng CancelToken.cancel() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CancelToken", "cancel_token", "cc_core_lib", "methods", "cancel", "usage", "guide"]
---

# 📖 `CancelToken.cancel()`

> **Mô tả ngắn**: Thực hiện chức năng `cancel` cho class `CancelToken`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CancelToken`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
cancel(reason?: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `reason` | `any` | `Tùy chọn` | Tham số truyền vào cho cancel |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CancelToken } = globalThis.eno;
// Gọi phương thức:
// CancelToken.cancel(reason?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
