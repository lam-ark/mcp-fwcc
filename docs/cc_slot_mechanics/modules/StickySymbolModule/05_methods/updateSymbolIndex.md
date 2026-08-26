---
id: "cc_slot_mechanics:StickySymbolModule:methods:updateSymbolIndex"
title: "StickySymbolModule.updateSymbolIndex Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "updateSymbolIndex"]
---

# 📖 `StickySymbolModule.updateSymbolIndex()`

---

## 1. Method Signature & Overview

```typescript
updateSymbolIndex(symbol: cc.Node, index: number): void
```

- **Primary Role**: Implements updateSymbolIndex within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateSymbolIndex(symbol: cc.Node, index: number): void {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.setIndex(index);
		}
	}
```
