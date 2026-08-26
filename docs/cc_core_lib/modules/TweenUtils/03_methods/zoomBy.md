---
id: "cc_core_lib:TweenUtils:methods:zoomBy"
title: "Cách dùng TweenUtils.zoomBy() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TweenUtils", "tween_utils", "cc_core_lib", "methods", "zoomBy", "usage", "guide"]
---

# 📖 `TweenUtils.zoomBy()`

> **Mô tả ngắn**: Thực hiện chức năng `zoomBy` cho class `TweenUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TweenUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
zoomBy(node: cc.Node, duration: number, scale: number, options?: ITweenOptions): cc.Tween
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `node` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho zoomBy |
| `duration` | `number` | `Bắt buộc` | Tham số truyền vào cho zoomBy |
| `scale` | `number` | `Bắt buộc` | Tham số truyền vào cho zoomBy |
| `options` | `ITweenOptions` | `Tùy chọn` | Tham số truyền vào cho zoomBy |

- **Kiểu trả về**: `cc.Tween`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TweenUtils } = globalThis.eno;
// Gọi phương thức:
// TweenUtils.zoomBy(node: cc.Node, duration: number, scale: number, options?: ITweenOptions);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
