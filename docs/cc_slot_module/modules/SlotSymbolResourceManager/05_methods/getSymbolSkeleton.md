---
id: "cc_slot_module:SlotSymbolResourceManager:method:getSymbolSkeleton"
title: "SlotSymbolResourceManager.getSymbolSkeleton() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getSymbolSkeleton", "spine"]
---

# `SlotSymbolResourceManager.getSymbolSkeleton(symbolCode: string): sp.SkeletonData`

---

## 1. Method Signature
```typescript
public getSymbolSkeleton(symbolCode: string): sp.SkeletonData
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.skeletonAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolSkeleton(symbolCode: string): sp.SkeletonData {
	return this.skeletonAssets[symbolCode];
}
```
