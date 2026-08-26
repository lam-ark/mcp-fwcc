---
id: "cc_slot_mechanics:TableGigabloxModule:methods:setupReelGigabloxDelay"
title: "TableGigabloxModule.setupReelGigabloxDelay Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "setupReelGigabloxDelay"]
---

# 📖 `TableGigabloxModule.setupReelGigabloxDelay()`

---

## 1. Method Signature & Overview

```typescript
setupReelGigabloxDelay(context): void
```

- **Primary Role**: Implements setupReelGigabloxDelay within the TableGigabloxModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected setupReelGigabloxDelay(context): void {
		let i = 0;
		let reelIndex = 0;
		let reelDelay = 0;
		while (reelIndex < context.reels.length) {
			(context.reels[reelIndex] as GigabloxReelModule).gigabloxDelay = reelDelay;
			if (i < this._bloxes.length) {
				const blox = this._bloxes[i];
				if (reelIndex < blox.col) {
					reelDelay++;
				} else if (reelIndex == blox.col && reelIndex < blox.col + blox.size - 1) {
					// to do
				} else if (reelIndex == blox.col + blox.size - 1) {
					reelDelay++;
					i++;
				}
			} else {
				reelDelay++;
			}
			reelIndex++;
		}
	}
```
