---
id: "cc_core_lib:BaseDirector:overview:architecture"
title: "Hướng dẫn & Cách sử dụng BaseDirector (slot-base-logic)"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `BaseDirector`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.BaseDirector` / `globalThis.eno.BaseDirector`  
> **Kế thừa**: `Object`

---

## 🎯 1. `BaseDirector` Dùng Để Làm Gì? (Purpose & Overview)

`BaseDirector` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { BaseDirector } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`runAction(actionName: any, data?: any)`**: `Promise<any>`
- **`executeNextScript(actionName: any)`**: `void`
- **`onFinishScript(actionName: any)`**: `void`
- **`onResetAllScripts()`**: `void`
- **`_exitGameMode(data?: any)`**: `Promise<void>`
- **`_playResumeMode(data?: any)`**: `Promise<boolean>`
