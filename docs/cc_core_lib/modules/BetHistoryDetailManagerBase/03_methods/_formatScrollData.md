---
id: "cc_core_lib:BetHistoryDetailManagerBase:methods:_formatScrollData"
title: "Cách dùng BetHistoryDetailManagerBase._formatScrollData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "methods", "_formatScrollData", "usage", "guide"]
---

# 📖 `BetHistoryDetailManagerBase._formatScrollData()`

> **Mô tả ngắn**: Thực hiện chức năng `_formatScrollData` cho class `BetHistoryDetailManagerBase`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryDetailManagerBase`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_formatScrollData(gameModeData: any, scroll: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `gameModeData` | `any` | `Bắt buộc` | Tham số truyền vào cho _formatScrollData |
| `scroll` | `any` | `Bắt buộc` | Tham số truyền vào cho _formatScrollData |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryDetailManagerBase } = globalThis.eno;
// Gọi phương thức:
// BetHistoryDetailManagerBase._formatScrollData(gameModeData: any, scroll: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
