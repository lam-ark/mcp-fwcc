---
id: "cc_slot_mechanics:GigabloxReelModule:methods:setUpStopCallback"
title: "GigabloxReelModule.setUpStopCallback Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "setUpStopCallback"]
---

# 📖 `GigabloxReelModule.setUpStopCallback()`

---

## 1. Method Signature & Overview

```typescript
setUpStopCallback(): void
```

- **Primary Role**: Implements setUpStopCallback within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.gigabloxDelay * this.currentMode.delayStop);
	}
```
