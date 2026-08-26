---
id: "cc_core_lib:PromotionManager:methods:setErrorCode"
title: "Cách dùng PromotionManager.setErrorCode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["PromotionManager", "promotion_manager", "cc_core_lib", "methods", "setErrorCode", "usage", "guide"]
---

# 📖 `PromotionManager.setErrorCode()`

> **Mô tả ngắn**: Thực hiện chức năng `setErrorCode` cho class `PromotionManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `PromotionManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setErrorCode(errorCode: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `errorCode` | `string` | `Bắt buộc` | Tham số truyền vào cho setErrorCode |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { PromotionManager } = globalThis.eno;
// Gọi phương thức:
// PromotionManager.setErrorCode(errorCode: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
