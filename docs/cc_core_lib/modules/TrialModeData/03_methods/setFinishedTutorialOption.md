---
id: "cc_core_lib:TrialModeData:methods:setFinishedTutorialOption"
title: "Cách dùng TrialModeData.setFinishedTutorialOption() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TrialModeData", "trial_mode_data", "cc_core_lib", "methods", "setFinishedTutorialOption", "usage", "guide"]
---

# 📖 `TrialModeData.setFinishedTutorialOption()`

> **Mô tả ngắn**: Thực hiện chức năng `setFinishedTutorialOption` cho class `TrialModeData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TrialModeData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setFinishedTutorialOption(options: any[]): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `options` | `any[]` | `Bắt buộc` | Tham số truyền vào cho setFinishedTutorialOption |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TrialModeData } = globalThis.eno;
// Gọi phương thức:
// TrialModeData.setFinishedTutorialOption(options: any[]);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
