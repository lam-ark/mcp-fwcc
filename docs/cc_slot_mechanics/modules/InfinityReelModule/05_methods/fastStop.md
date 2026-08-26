---
id: "cc_slot_mechanics:InfinityReelModule:methods:fastStop"
title: "InfinityReelModule.fastStop Method"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `InfinityReelModule.fastStop()`

---

## 1. Method Signature & Overview

```typescript
fastStop(): void
```

- **Primary Role**: Implements fastStop within the InfinityReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
fastStop(): void {
		this.stopCallback && this.unschedule(this.stopCallback);
		this.reelManager.state = ReelSpinState.SHOWING_RESULT;
		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
	}
```
