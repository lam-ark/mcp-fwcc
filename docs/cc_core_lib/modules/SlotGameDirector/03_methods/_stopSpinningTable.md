---
id: "cc_core_lib:SlotGameDirector:methods:_stopSpinningTable"
title: "Cách dùng SlotGameDirector._stopSpinningTable() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SlotGameDirector", "slot_game_director", "cc_core_lib", "methods", "_stopSpinningTable", "usage", "guide"]
---

# 📖 `SlotGameDirector._stopSpinningTable()`

> **Mô tả ngắn**: Thực hiện chức năng `_stopSpinningTable` cho class `SlotGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SlotGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_stopSpinningTable(data: any): Promise<void>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `data` | `any` | `Bắt buộc` | Tham số truyền vào cho _stopSpinningTable |

- **Kiểu trả về**: `Promise<void>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SlotGameDirector } = globalThis.eno;
// Gọi phương thức:
// SlotGameDirector._stopSpinningTable(data: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
