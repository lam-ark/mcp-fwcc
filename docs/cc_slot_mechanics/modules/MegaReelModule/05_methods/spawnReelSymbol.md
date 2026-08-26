---
id: "cc_slot_mechanics:MegaReelModule:methods:spawnReelSymbol"
title: "MegaReelModule.spawnReelSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "spawnReelSymbol"]
---

# 📖 `MegaReelModule.spawnReelSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnReelSymbol(): cc.Node
```

- **Primary Role**: Implements spawnReelSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;
		let isBlurSymbol = false;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}

			this.reelManager.index++;
		} else {
			isBlurSymbol = true;
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}

		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size, isBlurSymbol);
        // if it's real symbol, check to hide it if it's below the mega symbol
        if (!isBlurSymbol) {
            // check to hide small symbols
            this.hideSmallSymbol(symbol, indexSymbol);
            // create mega symbol
            this.createMegaSymbol(indexSymbol);
        }

		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}
```
