---
id: "cc_core_lib:NormalGameDirector:methods:_updateWalletAfterSpin"
title: "Cách dùng NormalGameDirector._updateWalletAfterSpin() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NormalGameDirector", "normal_game_director", "cc_core_lib", "methods", "_updateWalletAfterSpin", "usage", "guide"]
---

# 📖 `NormalGameDirector._updateWalletAfterSpin()`

> **Mô tả ngắn**: Thực hiện chức năng `_updateWalletAfterSpin` cho class `NormalGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `NormalGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_updateWalletAfterSpin(data: any): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho _updateWalletAfterSpin |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NormalGameDirector } = globalThis.eno;
// Gọi phương thức:
// NormalGameDirector._updateWalletAfterSpin(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
