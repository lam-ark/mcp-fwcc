---
id: "cc_core_lib:Scheduler:overview:architecture"
title: "Hướng dẫn & Cách sử dụng Scheduler (cc-wrap-func)"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `Scheduler`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.Scheduler` / `globalThis.eno.Scheduler`  
> **Kế thừa**: `Object`

---

## 🎯 1. `Scheduler` Dùng Để Làm Gì? (Purpose & Overview)

`Scheduler` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { Scheduler } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`scheduleInterval(callback: Function, time: number)`**: `any`
- **`schedule(callback: Function, interval: number, repeat: number, delay: number)`**: `any`
- **`unschedule(callback_fn: Function)`**: `void`
- **`destroy()`**: `void`
