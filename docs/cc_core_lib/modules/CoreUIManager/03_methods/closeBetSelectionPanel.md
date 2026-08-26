---
id: "cc_core_lib:CoreUIManager:methods:closeBetSelectionPanel"
title: "Cách dùng CoreUIManager.closeBetSelectionPanel() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["CoreUIManager", "core_uimanager", "cc_core_lib", "methods", "closeBetSelectionPanel", "usage", "guide"]
---

# 📖 `CoreUIManager.closeBetSelectionPanel()`

> **Mô tả ngắn**: Thực hiện chức năng `closeBetSelectionPanel` cho class `CoreUIManager`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `CoreUIManager`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
closeBetSelectionPanel(): void
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `void`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { CoreUIManager } = globalThis.eno;
// Gọi phương thức:
// CoreUIManager.closeBetSelectionPanel();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
