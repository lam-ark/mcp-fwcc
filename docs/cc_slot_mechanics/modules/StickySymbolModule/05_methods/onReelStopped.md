---
id: "cc_slot_mechanics:StickySymbolModule:methods:onReelStopped"
title: "StickySymbolModule.onReelStopped Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "onReelStopped"]
---

# 📖 `StickySymbolModule.onReelStopped()`

---

## 1. Method Signature & Overview

```typescript
onReelStopped(reel: number, resultSymbols: cc.Node[]): void
```

- **Primary Role**: Implements onReelStopped within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onReelStopped(reel: number, resultSymbols: cc.Node[]): void {
		const stickyIndexes = this.data.getStickyIndexes();
		const matrix = this.data.getMatrix();
		for (let index = 0; index < resultSymbols.length; index++) {
			const symbol = resultSymbols[index];
			const symbolIndex = this.getSymbolIndex(symbol);
			if (stickyIndexes.indexOf(symbolIndex) !== -1 && !this.stickySymbols.has(symbolIndex)) {
				this.stickySymbols.set(symbolIndex, symbol);
			}
		}

		if (reel == matrix.length - 1) {
			if (this.data.isFinishSticky()) {
				this.clearStickySymbols();
			}
		}
	}
```
