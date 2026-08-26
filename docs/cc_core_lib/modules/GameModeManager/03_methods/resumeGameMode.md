---
id: "cc_core_lib:GameModeManager:methods:resumeGameMode"
title: "Cách dùng GameModeManager.resumeGameMode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameModeManager", "game_mode_manager", "cc_core_lib", "methods", "resumeGameMode", "usage", "guide"]
---

# 📖 `GameModeManager.resumeGameMode()`

> **Mô tả ngắn**: Thực hiện chức năng `resumeGameMode` cho class `GameModeManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameModeManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
resumeGameMode(type: number): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `type` | `number` | `Bắt buộc` | Tham số truyền vào cho resumeGameMode |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameModeManager } = globalThis.eno;
// Gọi phương thức:
// GameModeManager.resumeGameMode(type: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
