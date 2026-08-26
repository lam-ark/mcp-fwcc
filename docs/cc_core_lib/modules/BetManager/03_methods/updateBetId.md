---
id: "cc_core_lib:BetManager:methods:updateBetId"
title: "Cách dùng BetManager.updateBetId() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "methods", "updateBetId", "usage", "guide"]
---

# 📖 `BetManager.updateBetId()`

> **Mô tả ngắn**: Thực hiện chức năng `updateBetId` cho class `BetManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
updateBetId(betId: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `betId` | `any` | `Bắt buộc` | Tham số truyền vào cho updateBetId |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetManager } = globalThis.eno;
// Gọi phương thức:
// BetManager.updateBetId(betId: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
