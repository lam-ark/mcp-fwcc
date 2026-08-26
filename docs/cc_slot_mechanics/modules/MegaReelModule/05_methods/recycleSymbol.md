---
id: "cc_slot_mechanics:MegaReelModule:methods:recycleSymbol"
title: "MegaReelModule.recycleSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "recycleSymbol"]
---

# 📖 `MegaReelModule.recycleSymbol()`

---

## 1. Method Signature & Overview

```typescript
recycleSymbol(): void
```

- **Primary Role**: Implements recycleSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		if (this.megaSymbolList.length > 0) {
			//when megas symbol out of screen (compares with the bottom symbol), remove it from the list
			const megaSymbol = this.megaSymbolList[this.megaSymbolList.length - 1];
			const symbol = this.listSymbols[this.listSymbols.length - 1];
			if (megaSymbol.position.y < symbol.position.y) {
				this.symbolManager.removeSymbol(megaSymbol);
				this.megaSymbolList.pop();
			}
		}

		super.recycleSymbol();
	}
```
