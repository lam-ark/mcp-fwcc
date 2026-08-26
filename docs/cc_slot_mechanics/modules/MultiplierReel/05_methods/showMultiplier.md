---
id: "cc_slot_mechanics:MultiplierReel:methods:showMultiplier"
title: "MultiplierReel.showMultiplier Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "methods", "showMultiplier"]
---

# 📖 `MultiplierReel.showMultiplier()`

---

## 1. Method Signature & Overview

```typescript
showMultiplier(multiplier: number, prefix: string = "x"): void
```

- **Primary Role**: Implements showMultiplier within the MultiplierReel mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showMultiplier(multiplier: number, prefix: string = "x"): void {
		this.lbMultiplier.string = `${prefix}${multiplier}`;
	}
```
