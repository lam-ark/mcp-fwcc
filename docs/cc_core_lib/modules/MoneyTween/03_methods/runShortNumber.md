---
id: "cc_core_lib:MoneyTween:methods:runShortNumber"
title: "Cách dùng MoneyTween.runShortNumber() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "runShortNumber", "usage", "guide"]
---

# 📖 `MoneyTween.runShortNumber()`

> **Mô tả ngắn**: Thực hiện chức năng `runShortNumber` cho class `MoneyTween`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MoneyTween`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
runShortNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho runShortNumber |
| `duration` | `number` | `Bắt buộc` | Tham số truyền vào cho runShortNumber |
| `endValue` | `number` | `Bắt buộc` | Tham số truyền vào cho runShortNumber |
| `options` | `Options` | `Tùy chọn` | Tham số truyền vào cho runShortNumber |

- **Kiểu trả về**: `cc.Tween`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MoneyTween } = globalThis.eno;
// Gọi phương thức:
// MoneyTween.runShortNumber(target: cc.Node, duration: number, endValue: number, options?: Options);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
