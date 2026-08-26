---
id: "cc_slot_mechanics:HorizontalReelModule:methods:recycleSymbol"
title: "HorizontalReelModule.recycleSymbol Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "recycleSymbol"]
---

# 📖 `HorizontalReelModule.recycleSymbol()`

---

## 1. Method Signature & Overview

```typescript
recycleSymbol(): void
```

- **Primary Role**: Implements recycleSymbol within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		const symbol = this.listSymbols[0];
		const comp = SlotSymbolModule.getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			this.listSymbols.shift();
		}

		this.reelManager.step--;
		if (this.reelManager.step < this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
		}

		this.spawnReelSymbol();

		if (this.reelManager.stop >= this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.STOPPED);
		}
	}
```
