---
id: "cc_slot_mechanics:HorizontalReelModule:methods:resumeReel"
title: "HorizontalReelModule.resumeReel Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "resumeReel"]
---

# 📖 `HorizontalReelModule.resumeReel()`

---

## 1. Method Signature & Overview

```typescript
resumeReel(symbols): void
```

- **Primary Role**: Implements resumeReel within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resumeReel(symbols): void {
		this.data = [...symbols];

		for (let index = 0; index < this.config.BUFFER_RIGHT; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_LEFT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		this.data.forEach((symbolValue, index) => {
			if (symbolValue) {
				const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
				const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(index));
				const position = this.initPositionByType(index, size);
				symbol.setPosition(position.x, position.y);
				this.listSymbols.push(symbol);
			}
		});
		this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
	}
```
