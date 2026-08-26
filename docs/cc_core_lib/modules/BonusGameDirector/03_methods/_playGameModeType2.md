---
id: "cc_core_lib:BonusGameDirector:methods:_playGameModeType2"
title: "Cách dùng BonusGameDirector._playGameModeType2() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BonusGameDirector", "bonus_game_director", "cc_core_lib", "methods", "_playGameModeType2", "usage", "guide"]
---

# 📖 `BonusGameDirector._playGameModeType2()`

> **Mô tả ngắn**: Thực hiện chức năng `_playGameModeType2` cho class `BonusGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BonusGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_playGameModeType2(): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BonusGameDirector } = globalThis.eno;
// Gọi phương thức:
// BonusGameDirector._playGameModeType2();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
