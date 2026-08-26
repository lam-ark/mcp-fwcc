---
id: "cc_core_lib:GameStateManager:methods:triggerSpinRequestBatch1"
title: "Cách dùng GameStateManager.triggerSpinRequestBatch1() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "methods", "triggerSpinRequestBatch1", "usage", "guide"]
---

# 📖 `GameStateManager.triggerSpinRequestBatch1()`

> **Mô tả ngắn**: Thực hiện chức năng `triggerSpinRequestBatch1` cho class `GameStateManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameStateManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
triggerSpinRequestBatch1(currentBetValue: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `currentBetValue` | `number` | `Bắt buộc` | Tham số truyền vào cho triggerSpinRequestBatch1 |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameStateManager } = globalThis.eno;
// Gọi phương thức:
// GameStateManager.triggerSpinRequestBatch1(currentBetValue: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
