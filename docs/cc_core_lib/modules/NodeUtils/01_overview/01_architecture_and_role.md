---
id: "cc_core_lib:NodeUtils:overview:architecture"
title: "Hướng dẫn & Cách sử dụng NodeUtils (cc-wrap-func)"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "overview", "eno", "cc-wrap-func", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `NodeUtils`

> **Package**: `assets/cc-common/cc-core-lib/cc-wrap-func`  
> **Namespace**: `eno.NodeUtils` / `globalThis.eno.NodeUtils`  
> **Kế thừa**: `Object`

---

## 🎯 1. `NodeUtils` Dùng Để Làm Gì? (Purpose & Overview)

`NodeUtils` là một class tiện ích/logic cốt lõi trong thư viện **`cc-wrap-func`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { NodeUtils } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`changeColor(node: cc.Node, color: cc.Color)`**: `void`
- **`setZIndex(node: cc.Node, index: number, forceUpdate?: boolean)`**: `void`
- **`updateSiblingIndex(parent: cc.Node)`**: `void`
- **`getPositionInOtherNode(spaceNode: cc.Node, targetNode: cc.Node)`**: `cc.Vec3 | null`
- **`getOrAddComponent(node: cc.Node, component: string)`**: `any | null`
- **`setRenderColor(node: cc.Node, alpha: number)`**: `void`
- **`getWorldRotation(node: cc.Node)`**: `number`
- **`setOpacityDeep(node: cc.Node, opacity: number)`**: `void`
- **`getOpacity(node: cc.Node)`**: `number`
- **`setOpacity(node: cc.Node, opacity: number)`**: `void`
- **`changeParent(node: cc.Node, newParent: cc.Node)`**: `void`
- **`getGameIdFromNode(node: cc.Node)`**: `string`
