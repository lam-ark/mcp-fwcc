---
id: "cc_core_lib:MoneyTween:methods:runWallet"
title: "Cách dùng MoneyTween.runWallet() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "runWallet", "usage", "guide"]
---

# 📖 `MoneyTween.runWallet()`

> **Mô tả ngắn**: Cập nhật số dư ví tiền người chơi (Wallet) với hiệu ứng tween mượt mà.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Định dạng số theo chuẩn `WALLET_FORMAT` (kèm mã tiền tệ nếu có).
- Tự động đồng bộ số dư hiển thị sau mỗi lần cược hoặc trả thưởng.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
runWallet(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho runWallet |
| `duration` | `number` | `Bắt buộc` | Tham số truyền vào cho runWallet |
| `endValue` | `number` | `Bắt buộc` | Tham số truyền vào cho runWallet |
| `options` | `Options` | `Tùy chọn` | Tham số truyền vào cho runWallet |

- **Kiểu trả về**: `cc.Tween`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
moneyTween.runWallet(this.walletLabel.node, 0.5, newBalance);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
