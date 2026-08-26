---
id: "cc_core_lib:FreeGameWriter:methods:makeScriptShowResult"
title: "Cách dùng FreeGameWriter.makeScriptShowResult() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["FreeGameWriter", "free_game_writer", "cc_core_lib", "methods", "makeScriptShowResult", "usage", "guide"]
---

# 📖 `FreeGameWriter.makeScriptShowResult()`

> **Mô tả ngắn**: Thực hiện chức năng `makeScriptShowResult` cho class `FreeGameWriter`.

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Nhận các tham số đầu vào và xử lý theo logic của `FreeGameWriter`.
- Đảm bảo an toàn kiểu dữ liệu và không gây rò rỉ bộ nhớ.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
makeScriptShowResult(): IScriptWriter[]
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| *Không có* | `void` | `-` | Hàm không yêu cầu tham số |

- **Kiểu trả về**: `IScriptWriter[]`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { FreeGameWriter } = globalThis.eno;
// Gọi phương thức:
// FreeGameWriter.makeScriptShowResult();
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
