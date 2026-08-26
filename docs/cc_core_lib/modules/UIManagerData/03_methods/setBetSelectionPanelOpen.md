---
id: "cc_core_lib:UIManagerData:methods:setBetSelectionPanelOpen"
title: "Cách dùng UIManagerData.setBetSelectionPanelOpen() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "methods", "setBetSelectionPanelOpen", "usage", "guide"]
---

# 📖 `UIManagerData.setBetSelectionPanelOpen()`

> **Mô tả ngắn**: Thực hiện chức năng `setBetSelectionPanelOpen` cho class `UIManagerData`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `UIManagerData`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
setBetSelectionPanelOpen(isOpen: boolean): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `isOpen` | `boolean` | `Bắt buộc` | Tham số truyền vào cho setBetSelectionPanelOpen |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { UIManagerData } = globalThis.eno;
// Gọi phương thức:
// UIManagerData.setBetSelectionPanelOpen(isOpen: boolean);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
