---
id: "cc_core_lib:BonusGameWriter:methods:makeScriptTriggerBonusGame"
title: "Cách dùng BonusGameWriter.makeScriptTriggerBonusGame() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "methods", "makeScriptTriggerBonusGame", "usage", "guide"]
---

# 📖 `BonusGameWriter.makeScriptTriggerBonusGame()`

> **Mô tả ngắn**: Thực hiện chức năng `makeScriptTriggerBonusGame` cho class `BonusGameWriter`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BonusGameWriter`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
makeScriptTriggerBonusGame(cellId: number): IScriptWriter[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `cellId` | `number` | `Bắt buộc` | Tham số truyền vào cho makeScriptTriggerBonusGame |

- **Kiểu trả về**: `IScriptWriter[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BonusGameWriter } = globalThis.eno;
// Gọi phương thức:
// BonusGameWriter.makeScriptTriggerBonusGame(cellId: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
