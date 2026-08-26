---
id: "cc_core_lib:FreeOptionData:methods:getOptions"
title: "Cách dùng FreeOptionData.getOptions() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FreeOptionData", "free_option_data", "cc_core_lib", "methods", "getOptions", "usage", "guide"]
---

# 📖 `FreeOptionData.getOptions()`

> **Mô tả ngắn**: Thực hiện chức năng `getOptions` cho class `FreeOptionData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `FreeOptionData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getOptions(): any[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `any[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { FreeOptionData } = globalThis.eno;
// Gọi phương thức:
// FreeOptionData.getOptions();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
