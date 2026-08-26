---
id: "cc_slot_mechanics:StickySymbolModule:methods:setupStickySymbols"
title: "StickySymbolModule.setupStickySymbols Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "setupStickySymbols"]
---

# 📖 `StickySymbolModule.setupStickySymbols()`

---

## 1. Method Signature & Overview

```typescript
setupStickySymbols(): void
```

- **Primary Role**: Implements setupStickySymbols within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
setupStickySymbols(): void {
		if (this.data.isFinishSticky()) {
			this.clearStickySymbols();
		} else {
			this.showStickySymbols();
		}
	}
```
