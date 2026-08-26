---
id: "cc_core_lib:SpinButtonData:methods:setAutoSpin"
title: "Cách dùng SpinButtonData.setAutoSpin() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpinButtonData", "spin_button_data", "cc_core_lib", "methods", "setAutoSpin", "usage", "guide"]
---

# 📖 `SpinButtonData.setAutoSpin()`

> **Mô tả ngắn**: Thực hiện chức năng `setAutoSpin` cho class `SpinButtonData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpinButtonData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setAutoSpin(count: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `count` | `number` | `Bắt buộc` | Tham số truyền vào cho setAutoSpin |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpinButtonData } = globalThis.eno;
// Gọi phương thức:
// SpinButtonData.setAutoSpin(count: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
