---
id: "cc_slot_mechanics:MegawayData:methods:getTotalWayCol"
title: "MegawayData.getTotalWayCol Method"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "methods", "getTotalWayCol"]
---

# 📖 `MegawayData.getTotalWayCol()`

---

## 1. Method Signature & Overview

```typescript
getTotalWayCol(col: number): number
```

- **Primary Role**: Implements getTotalWayCol within the MegawayData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getTotalWayCol(col: number): number {
		const tableFormat = this._tableFormat.length > 0 ? this._tableFormat : this._config.TABLE_FORMAT;

		if (col < this.minCol || !tableFormat || tableFormat.length < col) {
			return 0;
		}

		let totalWay = 1;
		for (let i = 0; i <= col; i++) {
			totalWay *= tableFormat[i];
		}

		return totalWay;
	}
```
