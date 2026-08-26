---
id: "cc_core_lib:SpineUtils:methods:getAnimationDuration"
title: "Cách dùng SpineUtils.getAnimationDuration() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "getAnimationDuration", "usage", "guide"]
---

# 📖 `SpineUtils.getAnimationDuration()`

> **Mô tả ngắn**: Lấy thời lượng chính xác (tính bằng giây) của một animation trong Spine SkeletonData.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Giúp đồng bộ chính xác thời gian tween hoặc thời gian chờ kết thúc animation trước khi chuyển step.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getAnimationDuration(spine: sp.Skeleton, name: string): number
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spine` | `sp.Skeleton` | `Bắt buộc` | Tham số truyền vào cho getAnimationDuration |
| `name` | `string` | `Bắt buộc` | Tham số truyền vào cho getAnimationDuration |

- **Kiểu trả về**: `number`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SpineUtils } = globalThis.eno;
const skeleton = this.symbolSpine.getComponent(sp.Skeleton);

const duration = SpineUtils.getAnimationDuration(skeleton, 'win_celebrate');
this.scheduleOnce(() => {
    this.goToNextStep();
}, duration);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
