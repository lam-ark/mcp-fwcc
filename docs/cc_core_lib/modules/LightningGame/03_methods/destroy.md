---
id: "cc_core_lib:LightningGame:methods:destroy"
title: "Cách dùng LightningGame.destroy() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "methods", "destroy", "usage", "guide"]
---

# 📖 `LightningGame.destroy()`

> **Mô tả ngắn**: Thực hiện chức năng `destroy` cho class `LightningGame`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `LightningGame`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
destroy(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { LightningGame } = globalThis.eno;
// Gọi phương thức:
// LightningGame.destroy();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
