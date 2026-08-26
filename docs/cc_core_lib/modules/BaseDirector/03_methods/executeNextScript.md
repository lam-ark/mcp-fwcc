---
id: "cc_core_lib:BaseDirector:methods:executeNextScript"
title: "Cách dùng BaseDirector.executeNextScript() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "methods", "executeNextScript", "usage", "guide"]
---

# 📖 `BaseDirector.executeNextScript()`

> **Mô tả ngắn**: Thực hiện chức năng `executeNextScript` cho class `BaseDirector`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `BaseDirector`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
executeNextScript(actionName: any): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `actionName` | `any` | `Bắt buộc` | Tham số truyền vào cho executeNextScript |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { BaseDirector } = globalThis.eno;
// Gọi phương thức:
// BaseDirector.executeNextScript(actionName: any);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
