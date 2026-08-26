---
id: "cc_core_lib:DataModel:methods:get"
title: "Cách dùng DataModel.get() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["DataModel", "data_model", "cc_core_lib", "methods", "get", "usage", "guide"]
---

# 📖 `DataModel.get()`

> **Mô tả ngắn**: Thực hiện chức năng `get` cho class `DataModel`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `DataModel`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
get(key: string): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `key` | `string` | `Bắt buộc` | Tham số truyền vào cho get |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { DataModel } = globalThis.eno;
// Gọi phương thức:
// DataModel.get(key: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
