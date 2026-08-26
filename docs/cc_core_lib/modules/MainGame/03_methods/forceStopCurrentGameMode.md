---
id: "cc_core_lib:MainGame:methods:forceStopCurrentGameMode"
title: "Cách dùng MainGame.forceStopCurrentGameMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MainGame", "main_game", "cc_core_lib", "methods", "forceStopCurrentGameMode", "usage", "guide"]
---

# 📖 `MainGame.forceStopCurrentGameMode()`

> **Mô tả ngắn**: Thực hiện chức năng `forceStopCurrentGameMode` cho class `MainGame`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MainGame`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
forceStopCurrentGameMode(): Promise<void>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `Promise<void>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MainGame } = globalThis.eno;
// Gọi phương thức:
// MainGame.forceStopCurrentGameMode();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
