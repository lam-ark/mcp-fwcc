---
id: "cc_core_lib:CoreDataStore:methods:getLightningGameRemain"
title: "Cách dùng CoreDataStore.getLightningGameRemain() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "methods", "getLightningGameRemain", "usage", "guide"]
---

# 📖 `CoreDataStore.getLightningGameRemain()`

> **Mô tả ngắn**: Thực hiện chức năng `getLightningGameRemain` cho class `CoreDataStore`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CoreDataStore`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getLightningGameRemain(): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CoreDataStore } = globalThis.eno;
// Gọi phương thức:
// CoreDataStore.getLightningGameRemain();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
