---
id: "cc_core_lib:UIManagerData:methods:showWalletTrial"
title: "Cách dùng UIManagerData.showWalletTrial() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "methods", "showWalletTrial", "usage", "guide"]
---

# 📖 `UIManagerData.showWalletTrial()`

> **Mô tả ngắn**: Thực hiện chức năng `showWalletTrial` cho class `UIManagerData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `UIManagerData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
showWalletTrial(isActive: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `isActive` | `boolean` | `Bắt buộc` | Tham số truyền vào cho showWalletTrial |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { UIManagerData } = globalThis.eno;
// Gọi phương thức:
// UIManagerData.showWalletTrial(isActive: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
