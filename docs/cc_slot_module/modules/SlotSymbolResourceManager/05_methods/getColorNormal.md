---
id: "cc_slot_module:SlotSymbolResourceManager:method:getColorNormal"
title: "SlotSymbolResourceManager.getColorNormal() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getColorNormal"]
---

# `SlotSymbolResourceManager.getColorNormal(): cc.Color`

---

## 1. Method Signature
```typescript
public getColorNormal(): cc.Color
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.colorNormal` (default `(255, 255, 255, 255)`).

---

## 3. Un-truncated Source Code Implementation
```typescript
getColorNormal(): cc.Color {
	return this.colorNormal;
}
```
