---
id: "cc_core_lib:BetHistoryDetailManagerRespinPortrait:methods:requestPrevData"
title: "Cách dùng BetHistoryDetailManagerRespinPortrait.requestPrevData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerRespinPortrait", "bet_history_detail_manager_respin_portrait", "cc_core_lib", "methods", "requestPrevData", "usage", "guide"]
---

# 📖 `BetHistoryDetailManagerRespinPortrait.requestPrevData()`

> **Mô tả ngắn**: Thực hiện chức năng `requestPrevData` cho class `BetHistoryDetailManagerRespinPortrait`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetHistoryDetailManagerRespinPortrait`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
requestPrevData(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetHistoryDetailManagerRespinPortrait } = globalThis.eno;
// Gọi phương thức:
// BetHistoryDetailManagerRespinPortrait.requestPrevData();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
