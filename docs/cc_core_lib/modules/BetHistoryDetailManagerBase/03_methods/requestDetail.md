---
id: "cc_core_lib:BetHistoryDetailManagerBase:methods:requestDetail"
title: "Cách dùng BetHistoryDetailManagerBase.requestDetail() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "methods", "requestDetail", "usage", "guide"]
---

# 📖 `BetHistoryDetailManagerBase.requestDetail()`

> **Mô tả ngắn**: Thực hiện chức năng `requestDetail` cho class `BetHistoryDetailManagerBase`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryDetailManagerBase`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
requestDetail(page?: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `page` | `number` | `Tùy chọn` | Tham số truyền vào cho requestDetail |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryDetailManagerBase } = globalThis.eno;
// Gọi phương thức:
// BetHistoryDetailManagerBase.requestDetail(page?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
