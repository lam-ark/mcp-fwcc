---
id: "cc_core_lib:PromotionManager:overview:architecture"
title: "Hướng dẫn & Cách sử dụng PromotionManager (slot-base-logic)"
category: "cc_core_lib"
tags: ["PromotionManager", "promotion_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `PromotionManager`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.PromotionManager` / `globalThis.eno.PromotionManager`  
> **Kế thừa**: `BaseManager`

---

## 🎯 1. `PromotionManager` Dùng Để Làm Gì? (Purpose & Overview)

`PromotionManager` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { PromotionManager } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`getPromotionData()`**: `PromotionData`
- **`parsePromotionData(promotionString: string)`**: `void`
- **`setPromotionData(data: PromotionDataObject)`**: `void`
- **`decreasePromotionRemain()`**: `void`
- **`handleRevertPromotionData()`**: `void`
- **`activePromotion()`**: `void`
- **`resetPromotionData()`**: `void`
- **`setErrorCode(errorCode: string)`**: `void`
