---
id: "cc_core_lib:GameStateWrap:methods:_fireEventJackpotWin"
title: "Cách dùng GameStateWrap._fireEventJackpotWin() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "methods", "_fireEventJackpotWin", "usage", "guide"]
---

# 📖 `GameStateWrap._fireEventJackpotWin()`

> **Mô tả ngắn**: Thực hiện chức năng `_fireEventJackpotWin` cho class `GameStateWrap`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameStateWrap`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_fireEventJackpotWin(data: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho _fireEventJackpotWin |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameStateWrap } = globalThis.eno;
// Gọi phương thức:
// GameStateWrap._fireEventJackpotWin(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
