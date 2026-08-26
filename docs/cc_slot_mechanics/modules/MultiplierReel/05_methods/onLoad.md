---
id: "cc_slot_mechanics:MultiplierReel:methods:onLoad"
title: "MultiplierReel.onLoad Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "methods", "onLoad"]
---

# 📖 `MultiplierReel.onLoad()`

---

## 1. Method Signature & Overview

```typescript
onLoad(): void
```

- **Primary Role**: Implements onLoad within the MultiplierReel mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
		this.node.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.node.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}
```
