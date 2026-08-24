---
id: "cc_slot_module:SlotSymbolResourceManager:method:getBackgroundFrame"
title: "SlotSymbolResourceManager.getBackgroundFrame() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getBackgroundFrame"]
---

# `SlotSymbolResourceManager.getBackgroundFrame(symbolCode: string): cc.SpriteFrame`

---

## 1. Method Signature
```typescript
public getBackgroundFrame(symbolCode: string): cc.SpriteFrame
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.backgroundFrameAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getBackgroundFrame(symbolCode: string): cc.SpriteFrame {
	return this.backgroundFrameAssets[symbolCode];
}
```
