---
id: "cc_core_lib:ConnectNetwork:methods:setGameNetwork"
title: "Cách dùng ConnectNetwork.setGameNetwork() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ConnectNetwork", "connect_network", "cc_core_lib", "methods", "setGameNetwork", "usage", "guide"]
---

# 📖 `ConnectNetwork.setGameNetwork()`

> **Mô tả ngắn**: Thực hiện chức năng `setGameNetwork` cho class `ConnectNetwork`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ConnectNetwork`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setGameNetwork(network: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `network` | `any` | `Bắt buộc` | Tham số truyền vào cho setGameNetwork |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ConnectNetwork } = globalThis.eno;
// Gọi phương thức:
// ConnectNetwork.setGameNetwork(network: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
