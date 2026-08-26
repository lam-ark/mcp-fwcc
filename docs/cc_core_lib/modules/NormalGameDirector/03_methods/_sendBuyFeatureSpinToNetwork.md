---
id: "cc_core_lib:NormalGameDirector:methods:_sendBuyFeatureSpinToNetwork"
title: "Cách dùng NormalGameDirector._sendBuyFeatureSpinToNetwork() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NormalGameDirector", "normal_game_director", "cc_core_lib", "methods", "_sendBuyFeatureSpinToNetwork", "usage", "guide"]
---

# 📖 `NormalGameDirector._sendBuyFeatureSpinToNetwork()`

> **Mô tả ngắn**: Thực hiện chức năng `_sendBuyFeatureSpinToNetwork` cho class `NormalGameDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `NormalGameDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
_sendBuyFeatureSpinToNetwork(currentBetData: string): Promise<boolean>
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `currentBetData` | `string` | `Bắt buộc` | Tham số truyền vào cho _sendBuyFeatureSpinToNetwork |

- **Kiểu trả về**: `Promise<boolean>`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NormalGameDirector } = globalThis.eno;
// Gọi phương thức:
// NormalGameDirector._sendBuyFeatureSpinToNetwork(currentBetData: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
