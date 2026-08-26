---
id: "cc_core_lib:TrialModeManager:methods:requestPlayTrial"
title: "Cách dùng TrialModeManager.requestPlayTrial() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["TrialModeManager", "trial_mode_manager", "cc_core_lib", "methods", "requestPlayTrial", "usage", "guide"]
---

# 📖 `TrialModeManager.requestPlayTrial()`

> **Mô tả ngắn**: Thực hiện chức năng `requestPlayTrial` cho class `TrialModeManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `TrialModeManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
requestPlayTrial(forceSkip?: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `forceSkip` | `boolean` | `Tùy chọn` | Tham số truyền vào cho requestPlayTrial |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { TrialModeManager } = globalThis.eno;
// Gọi phương thức:
// TrialModeManager.requestPlayTrial(forceSkip?: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
