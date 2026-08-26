---
id: "cc_core_lib:BonusGameWriter:methods:makeScriptShowResult2"
title: "Cách dùng BonusGameWriter.makeScriptShowResult2() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "methods", "makeScriptShowResult2", "usage", "guide"]
---

# 📖 `BonusGameWriter.makeScriptShowResult2()`

> **Mô tả ngắn**: Thực hiện chức năng `makeScriptShowResult2` cho class `BonusGameWriter`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BonusGameWriter`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
makeScriptShowResult2(): IScriptWriter[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `IScriptWriter[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BonusGameWriter } = globalThis.eno;
// Gọi phương thức:
// BonusGameWriter.makeScriptShowResult2();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
