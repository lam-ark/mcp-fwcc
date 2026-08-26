---
id: "cc_core_lib:JsbUtils:methods:getFBAvatar"
title: "Cách dùng JsbUtils.getFBAvatar() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "methods", "getFBAvatar", "usage", "guide"]
---

# 📖 `JsbUtils.getFBAvatar()`

> **Mô tả ngắn**: Thực hiện chức năng `getFBAvatar` cho class `JsbUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JsbUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getFBAvatar(url: string, spriteA: any, defaultAvatar: any, AvatarAtlas: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `url` | `string` | `Bắt buộc` | Tham số truyền vào cho getFBAvatar |
| `spriteA` | `any` | `Bắt buộc` | Tham số truyền vào cho getFBAvatar |
| `defaultAvatar` | `any` | `Bắt buộc` | Tham số truyền vào cho getFBAvatar |
| `AvatarAtlas` | `any` | `Bắt buộc` | Tham số truyền vào cho getFBAvatar |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JsbUtils } = globalThis.eno;
// Gọi phương thức:
// JsbUtils.getFBAvatar(url: string, spriteA: any, defaultAvatar: any, AvatarAtlas: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
