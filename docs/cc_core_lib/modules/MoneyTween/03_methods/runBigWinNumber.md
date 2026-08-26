---
id: "cc_core_lib:MoneyTween:methods:runBigWinNumber"
title: "Cách dùng MoneyTween.runBigWinNumber() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "runBigWinNumber", "usage", "guide"]
---

# 📖 `MoneyTween.runBigWinNumber()`

> **Mô tả ngắn**: Chạy hiệu ứng số tiền thắng lớn (Big Win) với đường cong gia tốc 2 pha (Quadratic Ease-In / Ease-Out).

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Pha 1 (0 -> 50% thời gian): Tăng tốc theo đường cong bậc 2 `t * t` lên 50% giá trị.
- Pha 2 (50% -> 100% thời gian): Giảm tốc mượt mà `1 - (1-t)^2` về đích `endValue`.
- Tạo cảm giác bùng nổ, hồi hộp cho các cutscene BigWin / MegaWin / SuperWin.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
runBigWinNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `target` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho runBigWinNumber |
| `duration` | `number` | `Bắt buộc` | Tham số truyền vào cho runBigWinNumber |
| `endValue` | `number` | `Bắt buộc` | Tham số truyền vào cho runBigWinNumber |
| `options` | `Options` | `Tùy chọn` | Tham số truyền vào cho runBigWinNumber |

- **Kiểu trả về**: `cc.Tween`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MoneyTween } = globalThis.eno;
const moneyTween = new MoneyTween(this.formatter);

// Chạy số Big Win lên 5,000,000 trong 4 giây với đường cong gia tốc 2 pha
moneyTween.runBigWinNumber(this.bigWinLabel.node, 4.0, 5000000, {
    gap: 3,
    onComplete: () => {
        this.showCelebrationParticle();
    }
});
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
