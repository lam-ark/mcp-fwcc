---
id: "cc_core_lib:ConnectNetwork:overview:architecture"
title: "Hướng dẫn & Cách sử dụng ConnectNetwork (share-lib)"
category: "cc_core_lib"
tags: ["ConnectNetwork", "connect_network", "cc_core_lib", "overview", "eno", "share-lib", "guide", "usage"]
---

# 📚 Hướng dẫn sử dụng: `ConnectNetwork`

> **Package**: `assets/cc-common/cc-core-lib/share-lib`  
> **Namespace**: `eno.ConnectNetwork` / `globalThis.eno.ConnectNetwork`  
> **Kế thừa**: `Object`

---

## 🎯 1. `ConnectNetwork` Dùng Để Làm Gì? (Purpose & Overview)

`ConnectNetwork` là một class tiện ích/logic cốt lõi trong thư viện **`share-lib`**. Nó cung cấp các công cụ sẵn có giúp các module game slot thao tác nhanh chóng, chuẩn xác và tối ưu hiệu năng $60\text{ FPS}$ trên mobile.

---

## 💡 2. Cách Sử Dụng Nhanh (Quick Start)

```typescript
// 1. Lấy class từ global namespace 'eno'
const { ConnectNetwork } = globalThis.eno;

// 2. Khởi tạo hoặc sử dụng static methods
// Ví dụ sử dụng cơ bản:
// ...
```

---

## 📋 3. Danh Sách Các Phương Thức Chính
- **`setGameNetwork(network: any)`**: `void`
- **`getToken()`**: `any`
- **`getRefreshToken()`**: `string`
