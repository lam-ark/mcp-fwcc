---
id: "cc_core_lib:ExitButtonManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ExitButtonManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["ExitButtonManager", "exit_button_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `ExitButtonManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.ExitButtonManager` / `globalThis.eno.ExitButtonManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `ExitButtonManager` Dùng Để Làm Gì? (Purpose & Overview)

`ExitButtonManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { ExitButtonManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`init()`**: `void`
- **`backToLobby()`**: `void`
