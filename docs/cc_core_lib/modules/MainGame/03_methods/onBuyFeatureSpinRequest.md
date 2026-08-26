---
id: "cc_core_lib:MainGame:methods:onBuyFeatureSpinRequest"
title: "Cách dùng MainGame.onBuyFeatureSpinRequest() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["MainGame", "main_game", "cc_core_lib", "methods", "onBuyFeatureSpinRequest", "usage", "guide"]
---

# 📖 `MainGame.onBuyFeatureSpinRequest()`

> **Mô tả ngắn**: Thực hiện chức năng `onBuyFeatureSpinRequest` cho class `MainGame`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `MainGame`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onBuyFeatureSpinRequest(betKey: string, extraBet: string): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `betKey` | `string` | `Bắt buộc` | Tham số truyền vào cho onBuyFeatureSpinRequest |
| `extraBet` | `string` | `Bắt buộc` | Tham số truyền vào cho onBuyFeatureSpinRequest |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { MainGame } = globalThis.eno;
// Gọi phương thức:
// MainGame.onBuyFeatureSpinRequest(betKey: string, extraBet: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
