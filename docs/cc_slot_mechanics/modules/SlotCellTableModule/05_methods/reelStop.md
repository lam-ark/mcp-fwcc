---
id: "cc_slot_mechanics:SlotCellTableModule:methods:reelStop"
title: "SlotCellTableModule.reelStop Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "reelStop"]
---

# 📖 `SlotCellTableModule.reelStop()`

---

## 1. Method Signature & Overview

```typescript
reelStop(): void
```

- **Primary Role**: Implements reelStop within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected reelStop(): void {
		this.totalReelStop++;
		if (this.totalReelStop >= this.totalReelSpin) {
			this.state = TableSpinState.STOPPED;
			this._callbackStop && this._callbackStop();
			this._callbackStop = null;
		}
	}
```
