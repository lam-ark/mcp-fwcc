---
id: "cc_slot_mechanics:NudgeReelModule:methods:recycleNudgeSymbol"
title: "NudgeReelModule.recycleNudgeSymbol Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "recycleNudgeSymbol"]
---

# 📖 `NudgeReelModule.recycleNudgeSymbol()`

---

## 1. Method Signature & Overview

```typescript
recycleNudgeSymbol(): void
```

- **Primary Role**: Implements recycleNudgeSymbol within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected recycleNudgeSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		const length = this.listSymbols.length;
		const bufferIndex = (this._direction == NudgeDirection.NUDGE_DOWN) ? length - 1 : 0;
		const symbol = this.listSymbols[bufferIndex];
		const comp = SlotSymbolModule.getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			if (this._direction == NudgeDirection.NUDGE_UP) {
				this.listSymbols.shift();
			} else {
				this.listSymbols.pop();
			}
		}

		this._nudgeStep--;
	}
```
