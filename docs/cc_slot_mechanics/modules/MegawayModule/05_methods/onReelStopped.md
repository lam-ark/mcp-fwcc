---
id: "cc_slot_mechanics:MegawayModule:methods:onReelStopped"
title: "MegawayModule.onReelStopped Method"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "onReelStopped"]
---

# 📖 `MegawayModule.onReelStopped()`

---

## 1. Method Signature & Overview

```typescript
onReelStopped(col: number): void
```

- **Primary Role**: Implements onReelStopped within the MegawayModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onReelStopped(col: number): void {
		if(this._data.minCol > col) {
			return;
		}
		
		const ways = this._data.getTotalWayCol(col);
		this.updateMegawayString(ways);
	}
```
