---
id: "cc_core_lib:TrialModeData:methods:setCurrentState"
title: "Cách dùng TrialModeData.setCurrentState() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TrialModeData", "trial_mode_data", "cc_core_lib", "methods", "setCurrentState", "usage", "guide"]
---

# 📖 `TrialModeData.setCurrentState()`

> **Mô tả ngắn**: Thực hiện chức năng `setCurrentState` cho class `TrialModeData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TrialModeData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setCurrentState(state: number): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `state` | `number` | `Bắt buộc` | Tham số truyền vào cho setCurrentState |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TrialModeData } = globalThis.eno;
// Gọi phương thức:
// TrialModeData.setCurrentState(state: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
