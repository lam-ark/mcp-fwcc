---
id: "cc_core_lib:DataModel:methods:remove"
title: "Cách dùng DataModel.remove() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DataModel", "data_model", "cc_core_lib", "methods", "remove", "usage", "guide"]
---

# 📖 `DataModel.remove()`

> **Mô tả ngắn**: Thực hiện chức năng `remove` cho class `DataModel`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DataModel`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
remove(key: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `key` | `string` | `Bắt buộc` | Tham số truyền vào cho remove |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DataModel } = globalThis.eno;
// Gọi phương thức:
// DataModel.remove(key: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
