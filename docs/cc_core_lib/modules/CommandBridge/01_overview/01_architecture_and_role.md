---
id: "cc_core_lib:CommandBridge:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CommandBridge (slot-base-logic)"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CommandBridge`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.CommandBridge` / `globalThis.eno.CommandBridge`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `CommandBridge` Dùng Để Làm Gì? (Purpose & Overview)

`CommandBridge` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CommandBridge } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`registerEvent(event: string, callback: Function)`**: `void`
- **`unregisterEvent(event: string, callback: Function)`**: `void`
- **`emit(event: string, ...args: any[])`**: `Promise<void>`
