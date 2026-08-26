---
id: "cc_core_lib:BonusGameDirector:methods:_gameRestart"
title: "Cách dùng BonusGameDirector._gameRestart() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BonusGameDirector", "bonus_game_director", "cc_core_lib", "methods", "_gameRestart", "usage", "guide"]
---

# 📖 `BonusGameDirector._gameRestart()`

> **Mô tả ngắn**: Thực hiện chức năng `_gameRestart` cho class `BonusGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BonusGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_gameRestart(data: any): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho _gameRestart |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BonusGameDirector } = globalThis.eno;
// Gọi phương thức:
// BonusGameDirector._gameRestart(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
