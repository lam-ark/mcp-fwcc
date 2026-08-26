---
id: "cc_core_lib:SlotUtils:methods:convertPayLineCluster"
title: "Cách dùng SlotUtils.convertPayLineCluster() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "methods", "convertPayLineCluster", "usage", "guide"]
---

# 📖 `SlotUtils.convertPayLineCluster()`

> **Mô tả ngắn**: Thực hiện chức năng `convertPayLineCluster` cho class `SlotUtils`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `SlotUtils`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
convertPayLineCluster(payLines?: string[], multiplier?: number, betDenom?: number): PayLineClusterResult[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `payLines` | `string[]` | `Tùy chọn` | Tham số truyền vào cho convertPayLineCluster |
| `multiplier` | `number` | `Tùy chọn` | Tham số truyền vào cho convertPayLineCluster |
| `betDenom` | `number` | `Tùy chọn` | Tham số truyền vào cho convertPayLineCluster |

- **Kiểu trả về**: `PayLineClusterResult[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { SlotUtils } = globalThis.eno;
// Gọi phương thức:
// SlotUtils.convertPayLineCluster(payLines?: string[], multiplier?: number, betDenom?: number);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
