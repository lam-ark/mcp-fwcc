---
id: "cc_slot_module:SlotSymbolResourceManager:method:getBlurSymbolFrame"
title: "SlotSymbolResourceManager.getBlurSymbolFrame() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getBlurSymbolFrame", "fallback"]
---

# `SlotSymbolResourceManager.getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame`

---

## 1. Method Signature
```typescript
public getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.blurFrameAssets[symbolCode]`.
2. **Safe Fallback**: If no motion blur texture is assigned for `symbolCode`, falls back automatically to `this.staticFrameAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame {
	return this.blurFrameAssets[symbolCode] || this.staticFrameAssets[symbolCode];
}
```
