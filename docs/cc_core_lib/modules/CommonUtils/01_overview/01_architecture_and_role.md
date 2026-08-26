---
id: "cc_core_lib:CommonUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng CommonUtils (share-lib)"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `CommonUtils`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.CommonUtils` / `globalThis.eno.CommonUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `CommonUtils` Dùng Để Làm Gì? (Purpose & Overview)

`CommonUtils` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { CommonUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`updateUtilConfig(key: string, value: any)`**: `void`
- **`getUtilConfig()`**: `any`
- **`MD5(e: any)`**: `string`
- **`findKeyByValue(object: any, value: any)`**: `string`
- **`convertObjectToArrayKey(object: any)`**: `string[]`
- **`convertObjectToArray(object: any)`**: `number[]`
- **`convertElementArrayToString(arr: any[])`**: `string[]`
- **`convertAssetArrayToObject(arr: any[], removeGameId?: boolean)`**: `any`
- **`mapObjectKey(obj: any, keysMap: any)`**: `any`
- **`pickOutRandomElements(array: any[], pickNumber?: number)`**: `any[]`
- **`generateId()`**: `string`
- **`uuid()`**: `string`
- **`formatUserName(userName: string, maxChar?: number)`**: `string`
