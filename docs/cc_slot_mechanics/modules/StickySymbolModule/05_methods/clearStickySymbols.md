---
id: "cc_slot_mechanics:StickySymbolModule:methods:clearStickySymbols"
title: "StickySymbolModule.clearStickySymbols Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "clearStickySymbols"]
---

# 📖 `StickySymbolModule.clearStickySymbols()`

---

## 1. Method Signature & Overview

```typescript
clearStickySymbols(): void
```

- **Primary Role**: Implements clearStickySymbols within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
clearStickySymbols(): void {
		this.hideStickyLayer();
		this.stickySymbols.forEach((symbol) => {
			if (symbol && symbol.isValid) {
				this.updateSymbolIndex(symbol, -1);
				this.stickyPool.removeSymbol(symbol);
			}
		});
		this.stickySymbols.clear();
		this.data.cleanStickyIndexes();
	}
```
