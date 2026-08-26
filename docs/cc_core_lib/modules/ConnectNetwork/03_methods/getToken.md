---
id: "cc_core_lib:ConnectNetwork:methods:getToken"
title: "Cách dùng ConnectNetwork.getToken() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["ConnectNetwork", "connect_network", "cc_core_lib", "methods", "getToken", "usage", "guide"]
---

# 📖 `ConnectNetwork.getToken()`

> **Mô tả ngắn**: Thực hiện chức năng `getToken` cho class `ConnectNetwork`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `ConnectNetwork`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getToken(): any
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `any`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { ConnectNetwork } = globalThis.eno;
// Gọi phương thức:
// ConnectNetwork.getToken();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
