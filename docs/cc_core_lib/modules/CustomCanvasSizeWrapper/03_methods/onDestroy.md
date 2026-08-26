---
id: "cc_core_lib:CustomCanvasSizeWrapper:methods:onDestroy"
title: "Cách dùng CustomCanvasSizeWrapper.onDestroy() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CustomCanvasSizeWrapper", "custom_canvas_size_wrapper", "cc_core_lib", "methods", "onDestroy", "usage", "guide"]
---

# 📖 `CustomCanvasSizeWrapper.onDestroy()`

> **Mô tả ngắn**: Thực hiện chức năng `onDestroy` cho class `CustomCanvasSizeWrapper`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CustomCanvasSizeWrapper`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onDestroy(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CustomCanvasSizeWrapper } = globalThis.eno;
// Gọi phương thức:
// CustomCanvasSizeWrapper.onDestroy();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
