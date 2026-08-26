---
id: "cc_slot_mechanics:TumblingReelModule:methods:fallingSymbol"
title: "TumblingReelModule.fallingSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "fallingSymbol"]
---

# 📖 `TumblingReelModule.fallingSymbol()`

---

## 1. Method Signature & Overview

```typescript
fallingSymbol(symbol: cc.Node, delayTime: number, position: cc.Vec2, isLastSymbol: boolean): void
```

- **Primary Role**: Implements fallingSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected fallingSymbol(symbol: cc.Node, delayTime: number, position: cc.Vec2, isLastSymbol: boolean): void {
        const spinSpeed = this.currentMode.easingTimeStop;
        const { positionStep1, positionStep2 } = this.getPositionStopStep();

        tween(symbol)
            .delay(delayTime)
            .to(this.reelManager.speed, { position })
            .call(() => {
                this.playSymbolAppearAnimation(symbol);
                this.onStopFallingSymbol(isLastSymbol);
                if (isLastSymbol) {
                    this.reelPreStopCB && this.reelPreStopCB(this.reelIndex);
                    this.reelPreStopCB = null;
                }
            })
            .by(spinSpeed, { position: positionStep2 })
            .by(spinSpeed, { position: positionStep1 })
            .call(() => {
                if (isLastSymbol) {
                    this.reelStopCB && this.reelStopCB(this.reelIndex);
                    this.reelStopCB = null;
                }
            })
            .start();
    }
```
