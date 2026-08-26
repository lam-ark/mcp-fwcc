---
id: "cc_core_lib:CoreDataStore:methods:setAllowCountFTR"
title: "Cách dùng CoreDataStore.setAllowCountFTR() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "methods", "setAllowCountFTR", "usage", "guide"]
---

# 📖 `CoreDataStore.setAllowCountFTR()`

> **Mô tả ngắn**: Thực hiện chức năng `setAllowCountFTR` cho class `CoreDataStore`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CoreDataStore`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setAllowCountFTR(value: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `value` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setAllowCountFTR |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CoreDataStore } = globalThis.eno;
// Gọi phương thức:
// CoreDataStore.setAllowCountFTR(value: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
