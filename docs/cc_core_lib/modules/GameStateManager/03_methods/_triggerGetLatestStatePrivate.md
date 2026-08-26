---
id: "cc_core_lib:GameStateManager:methods:_triggerGetLatestStatePrivate"
title: "Cách dùng GameStateManager._triggerGetLatestStatePrivate() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "methods", "_triggerGetLatestStatePrivate", "usage", "guide"]
---

# 📖 `GameStateManager._triggerGetLatestStatePrivate()`

> **Mô tả ngắn**: Thực hiện chức năng `_triggerGetLatestStatePrivate` cho class `GameStateManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameStateManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_triggerGetLatestStatePrivate(metaData: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `metaData` | `any` | `Bắt buộc` | Tham số truyền vào cho _triggerGetLatestStatePrivate |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameStateManager } = globalThis.eno;
// Gọi phương thức:
// GameStateManager._triggerGetLatestStatePrivate(metaData: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
