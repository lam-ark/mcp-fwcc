---
id: "cc_slot_mechanics:NudgeReelModule:methods:floor"
title: "NudgeReelModule.floor Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "floor"]
---

# 📖 `NudgeReelModule.floor()`

---

## 1. Method Signature

```typescript
floor(Math.random() * totalSymbols)]; const { symbolCode, symbolSize } = this.mapSymbolData(randomCode); return { symbolCode, symbolSize }; } protected addNudgeSymbols(): void
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
floor(Math.random() * totalSymbols)];
		const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
		return { symbolCode, symbolSize };
	}

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

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
