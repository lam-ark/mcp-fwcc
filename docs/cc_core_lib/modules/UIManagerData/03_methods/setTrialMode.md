---
id: "cc_core_lib:UIManagerData:methods:setTrialMode"
title: "Cách dùng UIManagerData.setTrialMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "methods", "setTrialMode", "usage", "guide"]
---

# 📖 `UIManagerData.setTrialMode()`

> **Mô tả ngắn**: Thực hiện chức năng `setTrialMode` cho class `UIManagerData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `UIManagerData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setTrialMode(isTrial: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `isTrial` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setTrialMode |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { UIManagerData } = globalThis.eno;
// Gọi phương thức:
// UIManagerData.setTrialMode(isTrial: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
