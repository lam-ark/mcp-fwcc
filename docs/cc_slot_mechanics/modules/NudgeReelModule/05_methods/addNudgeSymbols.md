---
id: "cc_slot_mechanics:NudgeReelModule:methods:addNudgeSymbols"
title: "NudgeReelModule.addNudgeSymbols Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "addNudgeSymbols"]
---

# 📖 `NudgeReelModule.addNudgeSymbols()`

---

## 1. Method Signature & Overview

```typescript
addNudgeSymbols(): void
```

- **Primary Role**: Implements addNudgeSymbols within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected addNudgeSymbols(): void {
		let offsetY = 0;

		//update buffer symbol to nudge symbol
		//direction is UP -> index = 0 (top) in list symbols
		//direction is DOWN -> index = length - 1 (bottom) in list symbols
		const bufferIndex = (this._direction == NudgeDirection.NUDGE_UP) ? this.listSymbols.length - 1 : 0;
		const bufferSymbol = this.changeBufferSymbol(bufferIndex);
		offsetY = bufferSymbol.position.y;

		// add remain nudge symbols
		this.addRemainNudgeSymbols(offsetY);

		// add buffer symbol
		offsetY = offsetY + (this._totalNudgeStep - 1) * this._direction * this.SYMBOL_HEIGHT;
		this.addBufferSymbol(offsetY);
	}
```
