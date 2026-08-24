---
id: "cc_slot_module:SlotSymbolModule:method:changeToBlurSymbol"
title: "SlotSymbolModule.changeToBlurSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "changeToBlurSymbol", "motion_blur"]
---

# `SlotSymbolModule.changeToBlurSymbol(): void`

---

## 1. Method Signature
```typescript
public changeToBlurSymbol(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotReelModule.spawnSymbol()` and `SlotSymbolManager.createBlurSymbol()` during active reel spinning.

---

## 3. Detailed Algorithmic Execution Logic
1. Obtains blurred texture frame from `this.resourceManager.getBlurSymbolFrame(symbolName)`.
2. Updates `this.sprite.spriteFrame` with the motion-blurred asset.
3. Hides the background card frame (`updateBackgroundFrame(null)`).

---

## 4. Un-truncated Source Code Implementation
```typescript
changeToBlurSymbol(): void {
	const symbolName = this.getSymbolName();
	const symbolFrame = this.resourceManager.getBlurSymbolFrame(symbolName);
	this.updateSymbolFrame(symbolFrame);
	this.updateBackgroundFrame(null);
}
```
