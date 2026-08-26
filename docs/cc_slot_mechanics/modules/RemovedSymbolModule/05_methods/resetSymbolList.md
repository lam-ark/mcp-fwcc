---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:resetSymbolList"
title: "RemovedSymbolModule.resetSymbolList Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "resetSymbolList"]
---

# 📖 `RemovedSymbolModule.resetSymbolList()`

---

## 1. Method Signature & Overview

```typescript
resetSymbolList(): void
```

- **Primary Role**: Implements resetSymbolList within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected resetSymbolList(): void {
		const listIndex = this.getConfig().SYMBOL_INDEXES;
		for (let i = 0; i < listIndex.length; i++) {
			this.listSymbols[i] = [];
			for (let j = 0; j < listIndex[i].length; j++) {
				this.listSymbols[i][j] = null;
			}
		}
	}
```
