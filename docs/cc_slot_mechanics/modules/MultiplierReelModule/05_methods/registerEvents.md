---
id: "cc_slot_mechanics:MultiplierReelModule:methods:registerEvents"
title: "MultiplierReelModule.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `MultiplierReelModule.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the MultiplierReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
		this.moduleEvent.on('SHOW_MULTIPLIER_REEL', this.showMultiplier, this);
		this.moduleEvent.on('RESET_MULTIPLIER_REEL', this.resetMultiplier, this);
	}
```
