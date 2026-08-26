---
id: "cc_core_lib:GameStateWrap:methods:triggerGambleSpinRequest"
title: "Cách dùng GameStateWrap.triggerGambleSpinRequest() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "methods", "triggerGambleSpinRequest", "usage", "guide"]
---

# 📖 `GameStateWrap.triggerGambleSpinRequest()`

> **Mô tả ngắn**: Thực hiện chức năng `triggerGambleSpinRequest` cho class `GameStateWrap`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameStateWrap`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
triggerGambleSpinRequest(openCell: any, totalBet: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `openCell` | `any` | `Bắt buộc` | Tham số truyền vào cho triggerGambleSpinRequest |
| `totalBet` | `any` | `Bắt buộc` | Tham số truyền vào cho triggerGambleSpinRequest |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameStateWrap } = globalThis.eno;
// Gọi phương thức:
// GameStateWrap.triggerGambleSpinRequest(openCell: any, totalBet: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
