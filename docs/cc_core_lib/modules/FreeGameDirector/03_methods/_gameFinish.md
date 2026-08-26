---
id: "cc_core_lib:FreeGameDirector:methods:_gameFinish"
title: "Cách dùng FreeGameDirector._gameFinish() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FreeGameDirector", "free_game_director", "cc_core_lib", "methods", "_gameFinish", "usage", "guide"]
---

# 📖 `FreeGameDirector._gameFinish()`

> **Mô tả ngắn**: Thực hiện chức năng `_gameFinish` cho class `FreeGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `FreeGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_gameFinish(data: any): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho _gameFinish |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { FreeGameDirector } = globalThis.eno;
// Gọi phương thức:
// FreeGameDirector._gameFinish(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
