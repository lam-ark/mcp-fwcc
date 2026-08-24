---
id: "cc_slot_module:SlotSymbolModule:method:playSymbolIntro"
title: "SlotSymbolModule.playSymbolIntro() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playSymbolIntro"]
---

# `SlotSymbolModule.playSymbolIntro(symbolCode: string): void`

---

## 1. Method Signature
```typescript
public playSymbolIntro(symbolCode: string): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called when introducing an entrance showcase animation for featured symbols.

---

## 3. Detailed Algorithmic Execution Logic
1. Assigns target symbol via `this.changeToSymbol(symbolCode)`.
2. Starts the idle Spine track via `this.playAnimationIdle()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playSymbolIntro(symbolCode: string): void {
	this.changeToSymbol(symbolCode);
	this.playAnimationIdle();
}
```
