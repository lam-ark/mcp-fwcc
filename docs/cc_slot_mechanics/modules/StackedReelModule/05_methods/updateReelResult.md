---
id: "cc_slot_mechanics:StackedReelModule:methods:updateReelResult"
title: "StackedReelModule.updateReelResult Method"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "methods", "updateReelResult"]
---

# 📖 `StackedReelModule.updateReelResult()`

---

## 1. Method Signature & Overview

```typescript
updateReelResult(symbols: string[]): void
```

- **Primary Role**: Implements updateReelResult within the StackedReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateReelResult(symbols: string[]): void {
		this.data = [...symbols].reverse();

		const { stackedCount, stackedSymbols } = this._stackedConfig;
		const botSymbol = symbols[0];
		let countFillStack = 0;

		if (stackedSymbols.indexOf(botSymbol) != -1) {
			const countBotSymbol = this.data.filter(symbol => symbol == botSymbol).length;
			const indexBotSymbol = stackedSymbols.indexOf(botSymbol);
			countFillStack = stackedCount[indexBotSymbol] - countBotSymbol
		}

		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			if (countFillStack > 0) {
				this.data.unshift(botSymbol);
				countFillStack--;
			} else {
				this.data.unshift(this.getRandomSymbolWithException().symbolCode);
			}
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}
	}
```
