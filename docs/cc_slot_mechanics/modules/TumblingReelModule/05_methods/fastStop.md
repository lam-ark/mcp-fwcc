---
id: "cc_slot_mechanics:TumblingReelModule:methods:fastStop"
title: "TumblingReelModule.fastStop Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `TumblingReelModule.fastStop()`

---

## 1. Method Signature & Overview

```typescript
fastStop(): void
```

- **Primary Role**: Implements fastStop within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
fastStop(): void {
        if (this.reelManager.state == ReelSpinState.START) {
			return;
		}
        this.isFastStopped = true;

        if (this.reelManager.state == ReelSpinState.SHOWING_RESULT) {
            this.reelManager.reset();
            this.recycleSymbol();
            for (let i = 0; i < this.reelManager.totalSymbol; i++) {
                const newSymbol = this.spawnReelSymbol();
                this.customizeNewSymbol(newSymbol);
            }
            this.reelManager.changeState(ReelSpinState.STOPPED);
        }

		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
		this.playFastStopAnimation();
	}
```
