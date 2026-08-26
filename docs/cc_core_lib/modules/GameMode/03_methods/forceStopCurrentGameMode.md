---
id: "cc_core_lib:GameMode:methods:forceStopCurrentGameMode"
title: "Cách dùng GameMode.forceStopCurrentGameMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "methods", "forceStopCurrentGameMode", "usage", "guide"]
---

# 📖 `GameMode.forceStopCurrentGameMode()`

> **Mô tả ngắn**: Thực hiện chức năng `forceStopCurrentGameMode` cho class `GameMode`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameMode`.
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
const { GameMode } = globalThis.eno;
// Gọi phương thức:
// GameMode.forceStopCurrentGameMode();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
