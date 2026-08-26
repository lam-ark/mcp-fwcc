---
id: "cc_slot_mechanics:StackedReelModule:methods:spawnReelSymbol"
title: "StackedReelModule.spawnReelSymbol Method"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "methods", "spawnReelSymbol"]
---

# 📖 `StackedReelModule.spawnReelSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnReelSymbol(): cc.Node | undefined
```

- **Primary Role**: Implements spawnReelSymbol within the StackedReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnReelSymbol(): cc.Node | undefined {
		let symbolCode = "";
		let symbolSize = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode, symbolSize, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}

			this.reelManager.index++;
		} else {
			if (this._listRandomSymbols.length == 0) {
				this._listRandomSymbols = this.generateStackedSymbol();
			}

			({ symbolCode, symbolSize } = this.getRandomStackedSymbol());
		}

		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(symbolCode, symbolSize);

		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}
```
