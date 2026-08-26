---
id: "cc_core_lib:JsbUtils:methods:loadAvatarFacebook"
title: "Cách dùng JsbUtils.loadAvatarFacebook() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "methods", "loadAvatarFacebook", "usage", "guide"]
---

# 📖 `JsbUtils.loadAvatarFacebook()`

> **Mô tả ngắn**: Thực hiện chức năng `loadAvatarFacebook` cho class `JsbUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `JsbUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
loadAvatarFacebook(avatarSprite: any, ava: any, atlas: any, prefix?: string, leadingZeroLength?: number, avatarDefault?: string): boolean
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `avatarSprite` | `any` | `Bắt buộc` | Tham số truyền vào cho loadAvatarFacebook |
| `ava` | `any` | `Bắt buộc` | Tham số truyền vào cho loadAvatarFacebook |
| `atlas` | `any` | `Bắt buộc` | Tham số truyền vào cho loadAvatarFacebook |
| `prefix` | `string` | `Tùy chọn` | Tham số truyền vào cho loadAvatarFacebook |
| `leadingZeroLength` | `number` | `Tùy chọn` | Tham số truyền vào cho loadAvatarFacebook |
| `avatarDefault` | `string` | `Tùy chọn` | Tham số truyền vào cho loadAvatarFacebook |

- **Kiểu trả về**: `boolean`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { JsbUtils } = globalThis.eno;
// Gọi phương thức:
// JsbUtils.loadAvatarFacebook(avatarSprite: any, ava: any, atlas: any, prefix?: string, leadingZeroLength?: number, avatarDefault?: string);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
