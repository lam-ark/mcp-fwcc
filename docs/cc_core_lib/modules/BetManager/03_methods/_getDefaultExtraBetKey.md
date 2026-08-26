---
id: "cc_core_lib:BetManager:methods:_getDefaultExtraBetKey"
title: "Cách dùng BetManager._getDefaultExtraBetKey() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "methods", "_getDefaultExtraBetKey", "usage", "guide"]
---

# 📖 `BetManager._getDefaultExtraBetKey()`

> **Mô tả ngắn**: Thực hiện chức năng `_getDefaultExtraBetKey` cho class `BetManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BetManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_getDefaultExtraBetKey(): string
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `string`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BetManager } = globalThis.eno;
// Gọi phương thức:
// BetManager._getDefaultExtraBetKey();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
