---
id: "cc_core_lib:BetHistoryDetailManagerBase:methods:_updateButtonState"
title: "Cách dùng BetHistoryDetailManagerBase._updateButtonState() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "methods", "_updateButtonState", "usage", "guide"]
---

# 📖 `BetHistoryDetailManagerBase._updateButtonState()`

> **Mô tả ngắn**: Thực hiện chức năng `_updateButtonState` cho class `BetHistoryDetailManagerBase`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryDetailManagerBase`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_updateButtonState(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryDetailManagerBase } = globalThis.eno;
// Gọi phương thức:
// BetHistoryDetailManagerBase._updateButtonState();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
