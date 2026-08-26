---
id: "cc_core_lib:TrialModeManager:methods:showTutorialPopup"
title: "Cách dùng TrialModeManager.showTutorialPopup() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TrialModeManager", "trial_mode_manager", "cc_core_lib", "methods", "showTutorialPopup", "usage", "guide"]
---

# 📖 `TrialModeManager.showTutorialPopup()`

> **Mô tả ngắn**: Thực hiện chức năng `showTutorialPopup` cho class `TrialModeManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TrialModeManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
showTutorialPopup(message: string, hasAction?: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `message` | `string` | `Bắt buộc` | Tham số truyền vào cho showTutorialPopup |
| `hasAction` | `boolean` | `Tùy chọn` | Tham số truyền vào cho showTutorialPopup |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TrialModeManager } = globalThis.eno;
// Gọi phương thức:
// TrialModeManager.showTutorialPopup(message: string, hasAction?: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
