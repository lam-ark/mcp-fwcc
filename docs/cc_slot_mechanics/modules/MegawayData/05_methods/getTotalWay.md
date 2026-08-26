---
id: "cc_slot_mechanics:MegawayData:methods:getTotalWay"
title: "MegawayData.getTotalWay Method"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "methods", "getTotalWay"]
---

# 📖 `MegawayData.getTotalWay()`

---

## 1. Method Signature & Overview

```typescript
getTotalWay(): number
```

- **Primary Role**: Implements getTotalWay within the MegawayData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getTotalWay(): number {
		const tableFormat = this._tableFormat.length > 0 ? this._tableFormat : this._config.TABLE_FORMAT;
		let totalWay = 1;

		for (let i = 0; i < tableFormat.length; i++) {
			totalWay *= tableFormat[i];
		}

		return totalWay;
	}
```
