---
id: "cc_core_lib:BetLineManager:methods:setMaxBetLine"
title: "Cách dùng BetLineManager.setMaxBetLine() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetLineManager", "bet_line_manager", "cc_core_lib", "methods", "setMaxBetLine", "usage", "guide"]
---

# 📖 `BetLineManager.setMaxBetLine()`

> **Mô tả ngắn**: Thực hiện chức năng `setMaxBetLine` cho class `BetLineManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetLineManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setMaxBetLine(data?: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Tùy chọn` | Tham số truyền vào cho setMaxBetLine |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetLineManager } = globalThis.eno;
// Gọi phương thức:
// BetLineManager.setMaxBetLine(data?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
