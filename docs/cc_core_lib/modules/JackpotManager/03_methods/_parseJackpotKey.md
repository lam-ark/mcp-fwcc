---
id: "cc_core_lib:JackpotManager:methods:_parseJackpotKey"
title: "Cách dùng JackpotManager._parseJackpotKey() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "methods", "_parseJackpotKey", "usage", "guide"]
---

# 📖 `JackpotManager._parseJackpotKey()`

> **Mô tả ngắn**: Thực hiện chức năng `_parseJackpotKey` cho class `JackpotManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JackpotManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_parseJackpotKey(jpName: string): { keyBet: string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `jpName` | `string` | `Bắt buộc` | Tham số truyền vào cho _parseJackpotKey |

- **Kiểu trả về**: `{ keyBet: string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JackpotManager } = globalThis.eno;
// Gọi phương thức:
// JackpotManager._parseJackpotKey(jpName: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
