---
id: "cc_core_lib:ObserverObject:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ObserverObject (slot-base-logic)"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "overview", "eno", "slot-base-logic", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `ObserverObject`

> **Package**: `assets/cc-common/cc-core-lib/slot-base-logic`  
> **Namespace**: `eno.ObserverObject` / `globalThis.eno.ObserverObject`  
> **Kế thừa**: `Object`

---

## 🎯 1. `ObserverObject` Dùng Để Làm Gì? (Purpose & Overview)

`ObserverObject` là một class tiện ích/logic cốt lõi trong thư viện **`slot-base-logic`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { ObserverObject } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`_defineProperty(rootObj: any, obj: any, key: string, basePath: string)`**: `void`
- **`_trigger(rootObj: any, path: string, oldValue: any, newValue: any)`**: `void`
- **`_registerData(target: any, rootObj?: any, path?: string, visited?: WeakSet<any>)`**: `void`
- **`register(obj: any)`**: `any`
- **`registerChild(rootObj: any, childObj: any, path: string)`**: `any`
- **`isValidObject(obj: any)`**: `boolean`
- **`watch(target: any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions)`**: `Function`
- **`watchAll(target: any, callback: CallbackFunction, context?: any)`**: `Function`
- **`recursive(target: any, path?: string, paths?: string[], visited?: WeakSet<any>)`**: `string[]`
- **`release(obj: any, callback: Function, context?: any)`**: `void`
- **`releaseAll(obj: any, context: any)`**: `void`
- **`releaseAllObservers()`**: `void`
- **`unregister(obj: any)`**: `void`
