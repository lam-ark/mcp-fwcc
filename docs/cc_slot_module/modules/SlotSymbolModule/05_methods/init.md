---
id: "cc_slot_module:SlotSymbolModule:method:init"
title: "SlotSymbolModule.init() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "init", "initialization"]
---

# `SlotSymbolModule.init(symbolValue: string, initSize: cc.Vec2 = null): void`

---

## 1. Method Signature
```typescript
public init(symbolValue: string, initSize: cc.Vec2 = null): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotSymbolManager.createSymbol()` when checking out a symbol node from `cc.NodePool`.

---

## 3. Detailed Algorithmic Execution Logic
1. Ensures `this.resourceManager` is resolved.
2. Parses composite string via `this.mapSymbolData(symbolValue, initSize)`.
3. If new symbol code differs from previous code, nulls `spine.skeletonData` (unless flagged with `SPECIAL_SYMBOL_KEY`).
4. Sets `this.symbolCode` and assigns dimensions via `this.setSize(symbolSize)`.
5. Annotates node with custom properties: `node["symbolCode"]` and `node["symbolName"]`.
6. Invokes virtual extension hook: `this.initExtend(symbolCode, symbolSize)`.

---

## 4. Un-truncated Source Code Implementation
```typescript
init(symbolValue: string, initSize: cc.Vec2 = null): void {
	if (!this.resourceManager) {
		this.setResourceManager();
	}

	const { symbolCode, symbolSize } = this.mapSymbolData(symbolValue, initSize);
	if (this.spine && this.symbolCode != symbolCode && !this.node[SPECIAL_SYMBOL_KEY]) {
		this.spine.skeletonData = null;
	}
	this.symbolCode = symbolCode;
	this.setSize(symbolSize);
	this.node["symbolCode"] = this.symbolCode;
	this.node["symbolName"] = this.getSymbolName();
	this.initExtend(symbolCode, symbolSize);
}
```
