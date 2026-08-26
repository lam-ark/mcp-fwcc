---
id: "cc_slot_mechanics:MultiplierReelData:methods:onDataUpdate"
title: "MultiplierReelData.onDataUpdate Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "methods", "onDataUpdate"]
---

# 📖 `MultiplierReelData.onDataUpdate()`

---

## 1. Method Signature & Overview

```typescript
onDataUpdate(key: string, value: any): void
```

- **Primary Role**: Implements onDataUpdate within the MultiplierReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onDataUpdate(key: string, value: any): void {
		super.onDataUpdate(key, value);
		this.multiplierReel = this['normalMultipliers'] || this['freeMultipliers'] || [];
	}
```
