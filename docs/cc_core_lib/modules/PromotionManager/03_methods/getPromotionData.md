---
id: "cc_core_lib:PromotionManager:methods:getPromotionData"
title: "Cách dùng PromotionManager.getPromotionData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["PromotionManager", "promotion_manager", "cc_core_lib", "methods", "getPromotionData", "usage", "guide"]
---

# 📖 `PromotionManager.getPromotionData()`

> **Mô tả ngắn**: Thực hiện chức năng `getPromotionData` cho class `PromotionManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `PromotionManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getPromotionData(): PromotionData
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `PromotionData`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { PromotionManager } = globalThis.eno;
// Gọi phương thức:
// PromotionManager.getPromotionData();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
