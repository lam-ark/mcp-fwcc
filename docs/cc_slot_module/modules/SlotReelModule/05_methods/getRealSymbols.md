---
id: "cc_slot_module:SlotReelModule:method:getRealSymbols"
title: "SlotReelModule.getRealSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "getRealSymbols", "visible_symbols", "matrix"]
---

# `SlotReelModule.getRealSymbols(): cc.Node[]`

---

## 1. Method Signature
```typescript
public getRealSymbols(): cc.Node[]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule` and payline highlighting components to extract only the active visible onscreen symbol nodes (ignoring offscreen top and bottom buffer rows).

---

## 3. Detailed Algorithmic Execution Logic
1. Clones and sorts `listSymbols` descending by Y coordinate.
2. Filters nodes using `isRealSymbol(count + bufferSize)` to strip out top and bottom buffer rows.
3. Returns array of real, visible symbol nodes.

---

## 4. Un-truncated Source Code Implementation
```typescript
getRealSymbols(): cc.Node[] {
	const cloneSymbol = [...this.listSymbols];
	cloneSymbol.sort((a: cc.Node, b: cc.Node) => b.position.y - a.position.y);
	let count = 0;
	const realSymbols = cloneSymbol.filter((symbol) => {
		const size = SlotSymbolModule.getModuleComponent(symbol).size.y;
		const bufferSize = size > this.DEFAULT_SIZE.y ? size - this.DEFAULT_SIZE.y : 0;
		const isReal = this.isRealSymbol(count + bufferSize);
		count += size;
		return isReal;
	});
	return realSymbols;
}
```
