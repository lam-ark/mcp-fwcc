---
id: "cc_core_lib:PaylineInfoData:methods:setPaylineInfo"
title: "Cách dùng PaylineInfoData.setPaylineInfo() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["PaylineInfoData", "payline_info_data", "cc_core_lib", "methods", "setPaylineInfo", "usage", "guide"]
---

# 📖 `PaylineInfoData.setPaylineInfo()`

> **Mô tả ngắn**: Thực hiện chức năng `setPaylineInfo` cho class `PaylineInfoData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `PaylineInfoData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setPaylineInfo(paylineInfo: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `paylineInfo` | `any` | `Bắt buộc` | Tham số truyền vào cho setPaylineInfo |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { PaylineInfoData } = globalThis.eno;
// Gọi phương thức:
// PaylineInfoData.setPaylineInfo(paylineInfo: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
