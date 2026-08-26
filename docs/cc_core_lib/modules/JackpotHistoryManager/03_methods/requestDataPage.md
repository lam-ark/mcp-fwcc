---
id: "cc_core_lib:JackpotHistoryManager:methods:requestDataPage"
title: "Cách dùng JackpotHistoryManager.requestDataPage() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "methods", "requestDataPage", "usage", "guide"]
---

# 📖 `JackpotHistoryManager.requestDataPage()`

> **Mô tả ngắn**: Thực hiện chức năng `requestDataPage` cho class `JackpotHistoryManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JackpotHistoryManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
requestDataPage(page: number, quantity: number, callback: Function, callbackErr: Function): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `page` | `number` | `Bắt buộc` | Tham số truyền vào cho requestDataPage |
| `quantity` | `number` | `Bắt buộc` | Tham số truyền vào cho requestDataPage |
| `callback` | `Function` | `Bắt buộc` | Tham số truyền vào cho requestDataPage |
| `callbackErr` | `Function` | `Bắt buộc` | Tham số truyền vào cho requestDataPage |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JackpotHistoryManager } = globalThis.eno;
// Gọi phương thức:
// JackpotHistoryManager.requestDataPage(page: number, quantity: number, callback: Function, callbackErr: Function);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
