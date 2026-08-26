---
id: "cc_core_lib:JackpotManager:methods:getJackpotData"
title: "Cách dùng JackpotManager.getJackpotData() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "methods", "getJackpotData", "usage", "guide"]
---

# 📖 `JackpotManager.getJackpotData()`

> **Mô tả ngắn**: Thực hiện chức năng `getJackpotData` cho class `JackpotManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JackpotManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getJackpotData(): JackpotData
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `JackpotData`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JackpotManager } = globalThis.eno;
// Gọi phương thức:
// JackpotManager.getJackpotData();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
