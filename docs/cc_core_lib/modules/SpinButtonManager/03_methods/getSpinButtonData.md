---
id: "cc_core_lib:SpinButtonManager:methods:getSpinButtonData"
title: "Cách dùng SpinButtonManager.getSpinButtonData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpinButtonManager", "spin_button_manager", "cc_core_lib", "methods", "getSpinButtonData", "usage", "guide"]
---

# 📖 `SpinButtonManager.getSpinButtonData()`

> **Mô tả ngắn**: Thực hiện chức năng `getSpinButtonData` cho class `SpinButtonManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SpinButtonManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getSpinButtonData(): SpinButtonData
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `SpinButtonData`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpinButtonManager } = globalThis.eno;
// Gọi phương thức:
// SpinButtonManager.getSpinButtonData();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
