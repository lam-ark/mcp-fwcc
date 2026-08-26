---
id: "cc_slot_mechanics:MultiplierModule:methods:registerEvents"
title: "MultiplierModule.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `MultiplierModule.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the MultiplierModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
		this.moduleEvent.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.moduleEvent.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}
```
