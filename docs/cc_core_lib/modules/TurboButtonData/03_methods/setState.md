---
id: "cc_core_lib:TurboButtonData:methods:setState"
title: "Cách dùng TurboButtonData.setState() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TurboButtonData", "turbo_button_data", "cc_core_lib", "methods", "setState", "usage", "guide"]
---

# 📖 `TurboButtonData.setState()`

> **Mô tả ngắn**: Thực hiện chức năng `setState` cho class `TurboButtonData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TurboButtonData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setState(state: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `state` | `number` | `Bắt buộc` | Tham số truyền vào cho setState |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TurboButtonData } = globalThis.eno;
// Gọi phương thức:
// TurboButtonData.setState(state: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
