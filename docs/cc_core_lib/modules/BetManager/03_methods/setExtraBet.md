---
id: "cc_core_lib:BetManager:methods:setExtraBet"
title: "Cách dùng BetManager.setExtraBet() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "methods", "setExtraBet", "usage", "guide"]
---

# 📖 `BetManager.setExtraBet()`

> **Mô tả ngắn**: Thực hiện chức năng `setExtraBet` cho class `BetManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setExtraBet(extraBetKey: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `extraBetKey` | `string` | `Bắt buộc` | Tham số truyền vào cho setExtraBet |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetManager } = globalThis.eno;
// Gọi phương thức:
// BetManager.setExtraBet(extraBetKey: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
