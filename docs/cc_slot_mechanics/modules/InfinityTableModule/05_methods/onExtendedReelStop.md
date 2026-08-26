---
id: "cc_slot_mechanics:InfinityTableModule:methods:onExtendedReelStop"
title: "InfinityTableModule.onExtendedReelStop Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "onExtendedReelStop"]
---

# 📖 `InfinityTableModule.onExtendedReelStop()`

---

## 1. Method Signature & Overview

```typescript
onExtendedReelStop(reelIndex: number): void
```

- **Primary Role**: Implements onExtendedReelStop within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected onExtendedReelStop(reelIndex: number): void {
		this.onReelStopExtend(reelIndex);
		if (this.moduleEvent) {
			this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.extendedReels[this.currentReelExtended - 1].getResultSymbols());
		}
		this.reelCount++;
        this.onChangeState(TableSpinState.STOPPED);
	}
```
