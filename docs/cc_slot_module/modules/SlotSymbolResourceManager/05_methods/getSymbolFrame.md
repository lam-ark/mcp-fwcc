---
id: "cc_slot_module:SlotSymbolResourceManager:method:getSymbolFrame"
title: "SlotSymbolResourceManager.getSymbolFrame() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getSymbolFrame"]
---

# `SlotSymbolResourceManager.getSymbolFrame(symbolCode: string): cc.SpriteFrame`

---

## 1. Method Signature
```typescript
public getSymbolFrame(symbolCode: string): cc.SpriteFrame
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.staticFrameAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolFrame(symbolCode: string): cc.SpriteFrame {
	return this.staticFrameAssets[symbolCode];
}
```
