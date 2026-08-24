---
id: "cc_slot_module:SlotReelModule:method:getSymbolByRow"
title: "SlotReelModule.getSymbolByRow() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "getSymbolByRow", "coordinate_query", "row"]
---

# `SlotReelModule.getSymbolByRow(row: number): cc.Node`

---

## 1. Method Signature
```typescript
public getSymbolByRow(row: number): cc.Node
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by payline drawers, symbol win effect animators, and wildcard multipliers to target an exact symbol at `[reelIndex, row]`.

---

## 3. Detailed Algorithmic Execution Logic
1. Obtains visible real symbols array via `this.getRealSymbols()`.
2. Indexes and returns `realSymbols[row]`.

---

## 4. Un-truncated Source Code Implementation
```typescript
getSymbolByRow(row: number): cc.Node {
	let realSymbols = this.getRealSymbols();
	const symbol = realSymbols[row];
	return symbol;
}
```
