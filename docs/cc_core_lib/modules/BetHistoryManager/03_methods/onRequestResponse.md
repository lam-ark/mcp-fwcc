---
id: "cc_core_lib:BetHistoryManager:methods:onRequestResponse"
title: "Cách dùng BetHistoryManager.onRequestResponse() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "methods", "onRequestResponse", "usage", "guide"]
---

# 📖 `BetHistoryManager.onRequestResponse()`

> **Mô tả ngắn**: Thực hiện chức năng `onRequestResponse` cho class `BetHistoryManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onRequestResponse(res: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `res` | `any` | `Bắt buộc` | Tham số truyền vào cho onRequestResponse |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryManager } = globalThis.eno;
// Gọi phương thức:
// BetHistoryManager.onRequestResponse(res: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
