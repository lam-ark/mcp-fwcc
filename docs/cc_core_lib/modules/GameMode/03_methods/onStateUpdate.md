---
id: "cc_core_lib:GameMode:methods:onStateUpdate"
title: "Cách dùng GameMode.onStateUpdate() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "methods", "onStateUpdate", "usage", "guide"]
---

# 📖 `GameMode.onStateUpdate()`

> **Mô tả ngắn**: Thực hiện chức năng `onStateUpdate` cho class `GameMode`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameMode`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onStateUpdate(data?: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Tùy chọn` | Tham số truyền vào cho onStateUpdate |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameMode } = globalThis.eno;
// Gọi phương thức:
// GameMode.onStateUpdate(data?: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
