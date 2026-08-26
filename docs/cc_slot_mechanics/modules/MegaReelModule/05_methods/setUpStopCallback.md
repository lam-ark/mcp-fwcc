---
id: "cc_slot_mechanics:MegaReelModule:methods:setUpStopCallback"
title: "MegaReelModule.setUpStopCallback Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "setUpStopCallback"]
---

# 📖 `MegaReelModule.setUpStopCallback()`

---

## 1. Method Signature & Overview

```typescript
setUpStopCallback(): void
```

- **Primary Role**: Implements setUpStopCallback within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.megaIndex * this.currentMode.delayStop);
	}
```
