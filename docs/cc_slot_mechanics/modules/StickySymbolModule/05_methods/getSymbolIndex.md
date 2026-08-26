---
id: "cc_slot_mechanics:StickySymbolModule:methods:getSymbolIndex"
title: "StickySymbolModule.getSymbolIndex Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "getSymbolIndex"]
---

# 📖 `StickySymbolModule.getSymbolIndex()`

---

## 1. Method Signature & Overview

```typescript
getSymbolIndex(symbol: cc.Node): number
```

- **Primary Role**: Implements getSymbolIndex within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getSymbolIndex(symbol: cc.Node): number {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			return symbolModule.getIndex();
		}
		return SymbolIndexType.UNUSED;
	}
```
