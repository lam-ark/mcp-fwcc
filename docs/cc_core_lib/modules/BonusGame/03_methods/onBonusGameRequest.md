---
id: "cc_core_lib:BonusGame:methods:onBonusGameRequest"
title: "Cách dùng BonusGame.onBonusGameRequest() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BonusGame", "bonus_game", "cc_core_lib", "methods", "onBonusGameRequest", "usage", "guide"]
---

# 📖 `BonusGame.onBonusGameRequest()`

> **Mô tả ngắn**: Thực hiện chức năng `onBonusGameRequest` cho class `BonusGame`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BonusGame`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onBonusGameRequest(cellId: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `cellId` | `number` | `Bắt buộc` | Tham số truyền vào cho onBonusGameRequest |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BonusGame } = globalThis.eno;
// Gọi phương thức:
// BonusGame.onBonusGameRequest(cellId: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
