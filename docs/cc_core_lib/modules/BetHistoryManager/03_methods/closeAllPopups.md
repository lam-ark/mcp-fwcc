---
id: "cc_core_lib:BetHistoryManager:methods:closeAllPopups"
title: "Cách dùng BetHistoryManager.closeAllPopups() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "methods", "closeAllPopups", "usage", "guide"]
---

# 📖 `BetHistoryManager.closeAllPopups()`

> **Mô tả ngắn**: Thực hiện chức năng `closeAllPopups` cho class `BetHistoryManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
closeAllPopups(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryManager } = globalThis.eno;
// Gọi phương thức:
// BetHistoryManager.closeAllPopups();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
