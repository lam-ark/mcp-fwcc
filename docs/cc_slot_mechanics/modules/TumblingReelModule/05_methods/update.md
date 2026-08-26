---
id: "cc_slot_mechanics:TumblingReelModule:methods:update"
title: "TumblingReelModule.update Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "update"]
---

# 📖 `TumblingReelModule.update()`

---

## 1. Method Signature & Overview

```typescript
update(dt: number): void
```

- **Primary Role**: Implements update within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected update(dt: number): void {
        if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.isSpinningCompleted && !this.isFastStopped) {
            for (let i = 0; i < this.reelManager.totalSymbol; i++) {
                const newSymbol = this.spawnReelSymbol();
                this.customizeNewSymbol(newSymbol);
            }
            this.reelManager.changeState(ReelSpinState.STOPPED);
            this.playStopAnimation();
        } 
    }
```
