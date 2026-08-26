---
id: "cc_slot_mechanics:InfinityReelModule:methods:runExtendedReelSpin"
title: "InfinityReelModule.runExtendedReelSpin Method"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "runExtendedReelSpin"]
---

# 📖 `InfinityReelModule.runExtendedReelSpin()`

---

## 1. Method Signature & Overview

```typescript
runExtendedReelSpin(): void
```

- **Primary Role**: Implements runExtendedReelSpin within the InfinityReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
runExtendedReelSpin(): void {
		this.node.active = true;
		this.reelManager.speed = this.currentMode.speed;
		this.reelManager.changeState(ReelSpinState.START);

		this.reelStopCB = null;
		this.tween && this.tween.stop();
		this.spinAction();
	}
```
