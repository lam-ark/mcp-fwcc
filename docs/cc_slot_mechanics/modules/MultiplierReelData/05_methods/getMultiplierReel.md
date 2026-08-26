---
id: "cc_slot_mechanics:MultiplierReelData:methods:getMultiplierReel"
title: "MultiplierReelData.getMultiplierReel Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "methods", "getMultiplierReel"]
---

# 📖 `MultiplierReelData.getMultiplierReel()`

---

## 1. Method Signature & Overview

```typescript
getMultiplierReel(index: number): number
```

- **Primary Role**: Implements getMultiplierReel within the MultiplierReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMultiplierReel(index: number): number {
		return this.multiplierReel[index] || 1;
	}
```
