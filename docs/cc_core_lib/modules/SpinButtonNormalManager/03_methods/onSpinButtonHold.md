---
id: "cc_core_lib:SpinButtonNormalManager:methods:onSpinButtonHold"
title: "Cách dùng SpinButtonNormalManager.onSpinButtonHold() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpinButtonNormalManager", "spin_button_normal_manager", "cc_core_lib", "methods", "onSpinButtonHold", "usage", "guide"]
---

# 📖 `SpinButtonNormalManager.onSpinButtonHold()`

> **Mô tả ngắn**: Thực hiện chức năng `onSpinButtonHold` cho class `SpinButtonNormalManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpinButtonNormalManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onSpinButtonHold(spinTimes?: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spinTimes` | `number` | `Tùy chọn` | Tham số truyền vào cho onSpinButtonHold |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpinButtonNormalManager } = globalThis.eno;
// Gọi phương thức:
// SpinButtonNormalManager.onSpinButtonHold(spinTimes?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
