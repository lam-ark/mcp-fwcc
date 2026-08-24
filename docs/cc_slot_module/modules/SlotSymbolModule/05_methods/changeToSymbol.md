---
id: "cc_slot_module:SlotSymbolModule:method:changeToSymbol"
title: "SlotSymbolModule.changeToSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "changeToSymbol", "sprite_frame"]
---

# `SlotSymbolModule.changeToSymbol(symbolValue: string): void`

---

## 1. Method Signature
```typescript
public changeToSymbol(symbolValue: string): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called when changing the symbol visual appearance (e.g. symbol transformation, column stop target update).

---

## 3. Detailed Algorithmic Execution Logic
1. Extracts `symbolCode` and `symbolName` from `symbolValue`.
2. Fetches sprite frame from `this.resourceManager.getSymbolFrame(symbolName)` and updates `this.sprite`.
3. Fetches background frame from `this.resourceManager.getBackgroundFrame(symbolName)` and updates `this.bg`.
4. Flushes old skeleton assets via `this.clearSkeletonData()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
changeToSymbol(symbolValue: string): void {
	this.symbolCode = this.mapSymbolData(symbolValue).symbolCode;
	const symbolName = this.getSymbolName();

	this.node["symbolCode"] = this.symbolCode;
	this.node["symbolName"] = symbolName;

	const symbolFrame = this.resourceManager.getSymbolFrame(symbolName);
	this.updateSymbolFrame(symbolFrame);

	const backgroundFrame = this.resourceManager.getBackgroundFrame(symbolName);
	this.updateBackgroundFrame(backgroundFrame);
	this.clearSkeletonData();
}
```
