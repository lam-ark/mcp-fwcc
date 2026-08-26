---
id: "cc_slot_mechanics:MultiplierModule:methods:showMultiplier"
title: "MultiplierModule.showMultiplier Method"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "methods", "showMultiplier"]
---

# 📖 `MultiplierModule.showMultiplier()`

---

## 1. Method Signature & Overview

```typescript
showMultiplier(): void
```

- **Primary Role**: Implements showMultiplier within the MultiplierModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showMultiplier(): void {
		const multiplier = this._multiplierData.getMultiplier();
		if (multiplier > this.defaultMultiplier) {
			this.lbMultiplier.string = `${this.prefix}${multiplier}`;
		}
	}
```
