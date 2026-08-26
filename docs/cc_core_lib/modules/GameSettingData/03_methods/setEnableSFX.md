---
id: "cc_core_lib:GameSettingData:methods:setEnableSFX"
title: "Cách dùng GameSettingData.setEnableSFX() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "methods", "setEnableSFX", "usage", "guide"]
---

# 📖 `GameSettingData.setEnableSFX()`

> **Mô tả ngắn**: Thực hiện chức năng `setEnableSFX` cho class `GameSettingData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `GameSettingData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setEnableSFX(isEnable: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `isEnable` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setEnableSFX |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { GameSettingData } = globalThis.eno;
// Gọi phương thức:
// GameSettingData.setEnableSFX(isEnable: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
