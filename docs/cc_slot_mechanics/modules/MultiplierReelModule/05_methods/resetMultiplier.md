---
id: "cc_slot_mechanics:MultiplierReelModule:methods:resetMultiplier"
title: "MultiplierReelModule.resetMultiplier Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "resetMultiplier"]
---

# 📖 `MultiplierReelModule.resetMultiplier()`

---

## 1. Method Signature & Overview

```typescript
resetMultiplier(): void
```

- **Primary Role**: Implements resetMultiplier within the MultiplierReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetMultiplier(): void {
		this._multiplierReels.forEach(reel => {
			reel.emit("RESET_MULTIPLIER");
		});
	}
```
