---
id: "cc_core_lib:AlignFullScreenButtonWrapper:methods:alignBotLeft23"
title: "Cách dùng AlignFullScreenButtonWrapper.alignBotLeft23() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["AlignFullScreenButtonWrapper", "align_full_screen_button_wrapper", "cc_core_lib", "methods", "alignBotLeft23", "usage", "guide"]
---

# 📖 `AlignFullScreenButtonWrapper.alignBotLeft23()`

> **Mô tả ngắn**: Thực hiện chức năng `alignBotLeft23` cho class `AlignFullScreenButtonWrapper`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `AlignFullScreenButtonWrapper`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
alignBotLeft23(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { AlignFullScreenButtonWrapper } = globalThis.eno;
// Gọi phương thức:
// AlignFullScreenButtonWrapper.alignBotLeft23();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
