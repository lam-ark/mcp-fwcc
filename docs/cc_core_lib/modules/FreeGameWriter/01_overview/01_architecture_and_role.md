---
id: "cc_core_lib:FreeGameWriter:overview:architecture"
title: "Hướng dẫn & Cách sử dụng FreeGameWriter (slot-base-logic)"
category: "cc_core_lib"
tags: ["FreeGameWriter", "free_game_writer", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `FreeGameWriter`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.FreeGameWriter` / `globalThis.eno.FreeGameWriter`  
> **Kế thừa**: `BaseWriter`

---

## 🎯 1. `FreeGameWriter` Dùng Để Làm Gì? (Purpose & Overview)

`FreeGameWriter` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { FreeGameWriter } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`makeScriptSpinClickFree()`**: `IScriptWriter[]`
- **`makeScriptResultReceived()`**: `IScriptWriter[]`
- **`makeScriptShowResult()`**: `IScriptWriter[]`
- **`makeScriptPlayGameMode()`**: `IScriptWriter[]`
- **`makeScriptPlayRespinGameMode()`**: `IScriptWriter[]`
- **`makeScriptExitGameMode()`**: `IScriptWriter[]`
