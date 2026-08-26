---
id: "cc_slot_mechanics:StickySymbolModule:methods:showStickySymbols"
title: "StickySymbolModule.showStickySymbols Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "showStickySymbols"]
---

# 📖 `StickySymbolModule.showStickySymbols()`

---

## 1. Method Signature & Overview

```typescript
showStickySymbols(): void
```

- **Primary Role**: Implements showStickySymbols within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showStickySymbols(): void {
		this.showStickyLayer();
		this.stickySymbols.forEach((symbol) => {
			if (symbol && symbol.isValid) {
				symbol.active = true;
				symbol.emit("ENABLE_HIGHLIGHT");
				this.updateSymbolIndex(symbol, this.config.STICKY_SYMBOL_INDEX);
				eno.changeParent(symbol, this.stickyLayer);
			}
		});
	}
```
