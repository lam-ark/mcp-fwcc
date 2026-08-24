---
id: "cc_slot_module:SlotSymbolResourceManager:method:getColorDim"
title: "SlotSymbolResourceManager.getColorDim() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getColorDim"]
---

# `SlotSymbolResourceManager.getColorDim(): cc.Color`

---

## 1. Method Signature
```typescript
public getColorDim(): cc.Color
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.colorDim` (default `(100, 100, 100, 255)`).

---

## 3. Un-truncated Source Code Implementation
```typescript
getColorDim(): cc.Color {
	return this.colorDim;
}
```
