---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:clearSymbols"
title: "RemovedSymbolModule.clearSymbols Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "clearSymbols"]
---

# 📖 `RemovedSymbolModule.clearSymbols()`

---

## 1. Method Signature & Overview

```typescript
clearSymbols(): void
```

- **Primary Role**: Implements clearSymbols within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
clearSymbols(): void {
		const symbolList = eno.ArrayUtils.flatOnce(this.listSymbols);
		symbolList.forEach(symbol => {
			this.symbolManager.returnSymbol(symbol);
		});
		this.listSymbols = [];
	}
```
