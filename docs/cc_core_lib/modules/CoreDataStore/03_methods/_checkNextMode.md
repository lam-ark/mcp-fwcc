---
id: "cc_core_lib:CoreDataStore:methods:_checkNextMode"
title: "Cách dùng CoreDataStore._checkNextMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "methods", "_checkNextMode", "usage", "guide"]
---

# 📖 `CoreDataStore._checkNextMode()`

> **Mô tả ngắn**: Thực hiện chức năng `_checkNextMode` cho class `CoreDataStore`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CoreDataStore`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_checkNextMode(playSession: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `playSession` | `any` | `Bắt buộc` | Tham số truyền vào cho _checkNextMode |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CoreDataStore } = globalThis.eno;
// Gọi phương thức:
// CoreDataStore._checkNextMode(playSession: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
