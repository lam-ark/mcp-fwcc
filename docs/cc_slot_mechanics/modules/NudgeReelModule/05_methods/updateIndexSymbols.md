---
id: "cc_slot_mechanics:NudgeReelModule:methods:updateIndexSymbols"
title: "NudgeReelModule.updateIndexSymbols Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "updateIndexSymbols"]
---

# 📖 `NudgeReelModule.updateIndexSymbols()`

---

## 1. Method Signature & Overview

```typescript
updateIndexSymbols(): void
```

- **Primary Role**: Implements updateIndexSymbols within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateIndexSymbols(): void {
		this.resultSymbols = [];
        
		const startIndex = this.config.BUFFER_TOP;
		const endIndex = this.reelManager.totalSymbol - this.config.BUFFER_BOT;
		const symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]].reverse();
		let index = 0;
		for (let i = endIndex - 1; i >= startIndex; i--) {
			const symbol = this.listSymbols[i];
			SlotSymbolModule.getModuleComponent(symbol).setIndex(symbolsIndex[index++]);
			this.resultSymbols.push(symbol);
		}
	}
```
