---
id: "cc_core_lib:Game:overview:architecture"
title: "Hướng dẫn & Cách sử dụng Game (slot-base-logic)"
category: "cc_core_lib"
tags: ["Game", "game", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `Game`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.Game` / `globalThis.eno.Game`  
> **Kế thừa**: `Object`

---

## 🎯 1. `Game` Dùng Để Làm Gì? (Purpose & Overview)

`Game` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { Game } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`getLogger()`**: `any`
- **`updateLoggerConfig(config: any)`**: `void`
- **`initNetwork(network: any)`**: `void`
