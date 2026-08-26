---
id: "cc_core_lib:TurboButtonManager:methods:onActiveFromTurboIntro"
title: "Cách dùng TurboButtonManager.onActiveFromTurboIntro() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TurboButtonManager", "turbo_button_manager", "cc_core_lib", "methods", "onActiveFromTurboIntro", "usage", "guide"]
---

# 📖 `TurboButtonManager.onActiveFromTurboIntro()`

> **Mô tả ngắn**: Thực hiện chức năng `onActiveFromTurboIntro` cho class `TurboButtonManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TurboButtonManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
onActiveFromTurboIntro(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TurboButtonManager } = globalThis.eno;
// Gọi phương thức:
// TurboButtonManager.onActiveFromTurboIntro();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
