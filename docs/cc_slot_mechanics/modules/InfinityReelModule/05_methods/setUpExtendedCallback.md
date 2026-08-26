---
id: "cc_slot_mechanics:InfinityReelModule:methods:setUpExtendedCallback"
title: "InfinityReelModule.setUpExtendedCallback Method"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "setUpExtendedCallback"]
---

# 📖 `InfinityReelModule.setUpExtendedCallback()`

---

## 1. Method Signature & Overview

```typescript
setUpExtendedCallback(): void
```

- **Primary Role**: Implements setUpExtendedCallback within the InfinityReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected setUpExtendedCallback(): void {
		this.stopCallback = () => {
			this.reelManager.step = this.currentMode.stepStop;
		};
		this.scheduleOnce(this.stopCallback, this.currentMode.delayStop);
	}
```
