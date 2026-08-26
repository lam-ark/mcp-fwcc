---
id: "cc_core_lib:JackpotManager:methods:onJackpotUpdate"
title: "Cách dùng JackpotManager.onJackpotUpdate() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "methods", "onJackpotUpdate", "usage", "guide"]
---

# 📖 `JackpotManager.onJackpotUpdate()`

> **Mô tả ngắn**: Thực hiện chức năng `onJackpotUpdate` cho class `JackpotManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JackpotManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onJackpotUpdate(data: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho onJackpotUpdate |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JackpotManager } = globalThis.eno;
// Gọi phương thức:
// JackpotManager.onJackpotUpdate(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
