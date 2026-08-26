---
id: "cc_slot_mechanics:MegawayModule:methods:updateTotalMegaway"
title: "MegawayModule.updateTotalMegaway Method"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "updateTotalMegaway"]
---

# 📖 `MegawayModule.updateTotalMegaway()`

---

## 1. Method Signature & Overview

```typescript
updateTotalMegaway(totalWay: number): void
```

- **Primary Role**: Implements updateTotalMegaway within the MegawayModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateTotalMegaway(totalWay: number): void {
		const ways = totalWay || this._data.getTotalWay();
		this.updateMegawayString(ways);
	}
```
