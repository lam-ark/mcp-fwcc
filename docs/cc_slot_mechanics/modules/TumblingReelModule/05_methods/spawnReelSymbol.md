---
id: "cc_slot_mechanics:TumblingReelModule:methods:spawnReelSymbol"
title: "TumblingReelModule.spawnReelSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "spawnReelSymbol"]
---

# 📖 `TumblingReelModule.spawnReelSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnReelSymbol(): cc.Node
```

- **Primary Role**: Implements spawnReelSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let indexSymbol = -1;
        
		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);
			if (symbolValue) {
				({ symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue));
			} else {
				skip = true;
			}
            this.reelManager.index++;
		} else {
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}

		if (skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size);
		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}
```
