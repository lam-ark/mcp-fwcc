---
id: "cc_core_lib:MoneyTween:methods:stopAllMoneyTweens"
title: "Cách dùng MoneyTween.stopAllMoneyTweens() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "stopAllMoneyTweens", "usage", "guide"]
---

# 📖 `MoneyTween.stopAllMoneyTweens()`

> **Mô tả ngắn**: Dừng toàn bộ các tween tiền tệ đang chạy và xóa sạch bộ nhớ cache.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Thường được gọi khi chuyển scene hoặc khi người chơi bấm nút Fast Stop / Skip.
- Ngăn ngừa memory leak và lỗi cập nhật label sau khi node đã bị hủy.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
stopAllMoneyTweens(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
onDestroy() {
    this.moneyTween.stopAllMoneyTweens();
}
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
