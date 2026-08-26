---
id: "cc_core_lib:Game:methods:initNetwork"
title: "Cách dùng Game.initNetwork() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["Game", "game", "cc_core_lib", "methods", "initNetwork", "usage", "guide"]
---

# 📖 `Game.initNetwork()`

> **Mô tả ngắn**: Thực hiện chức năng `initNetwork` cho class `Game`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `Game`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
initNetwork(network: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `network` | `any` | `Bắt buộc` | Tham số truyền vào cho initNetwork |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { Game } = globalThis.eno;
// Gọi phương thức:
// Game.initNetwork(network: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
