---
id: "cc_core_lib:TrialModeData:methods:setTutorialPopupActive"
title: "Cách dùng TrialModeData.setTutorialPopupActive() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TrialModeData", "trial_mode_data", "cc_core_lib", "methods", "setTutorialPopupActive", "usage", "guide"]
---

# 📖 `TrialModeData.setTutorialPopupActive()`

> **Mô tả ngắn**: Thực hiện chức năng `setTutorialPopupActive` cho class `TrialModeData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TrialModeData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setTutorialPopupActive(active: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `active` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setTutorialPopupActive |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TrialModeData } = globalThis.eno;
// Gọi phương thức:
// TrialModeData.setTutorialPopupActive(active: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
