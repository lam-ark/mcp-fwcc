---
id: "cc_core_lib:BaseDirector:methods:_playResumeMode"
title: "Cách dùng BaseDirector._playResumeMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "methods", "_playResumeMode", "usage", "guide"]
---

# 📖 `BaseDirector._playResumeMode()`

> **Mô tả ngắn**: Thực hiện chức năng `_playResumeMode` cho class `BaseDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BaseDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_playResumeMode(data?: any): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Tùy chọn` | Tham số truyền vào cho _playResumeMode |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BaseDirector } = globalThis.eno;
// Gọi phương thức:
// BaseDirector._playResumeMode(data?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
