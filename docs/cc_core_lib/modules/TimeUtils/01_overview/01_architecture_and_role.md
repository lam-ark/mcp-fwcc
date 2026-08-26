---
id: "cc_core_lib:TimeUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng TimeUtils (share-lib)"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `TimeUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.TimeUtils` / `globalThis.eno.TimeUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `TimeUtils` Dùng Để Làm Gì? (Purpose & Overview)

`TimeUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { TimeUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`toLocalTime(ts: number, format: string)`**: `string`
- **`customDateFormat(date: Date, formatString: string)`**: `string`
- **`toLocalTimeHHMM(ts: number)`**: `string`
- **`toLocalClockTime(ts: number)`**: `string`
- **`getTime()`**: `string`
- **`formatTimeStamp(ts: number, timeFormat?: string, breakLine?: boolean)`**: `string`
- **`addZero(i: number)`**: `string`
- **`secondsToHHMMSS(secs: number)`**: `string`
- **`getLeftTime(endTime: number, serverTime: number, millisecond?: number)`**: `number`
