---
id: "cc_slot_mechanics:MultiplierReelModule:methods:showMultiplier"
title: "MultiplierReelModule.showMultiplier Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "showMultiplier"]
---

# 📖 `MultiplierReelModule.showMultiplier()`

---

## 1. Method Signature & Overview

```typescript
showMultiplier(): void
```

- **Primary Role**: Implements showMultiplier within the MultiplierReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showMultiplier(): void {
		const prefix = this._config.MULTIPLIER_PREFIX;
		this._multiplierReels.forEach((reel, index) => {
			const multiplier = this._data.getMultiplierReel(index);
			reel.emit("SHOW_MULTIPLIER", multiplier, prefix);
		});
	}
```
