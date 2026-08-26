---
id: "cc_slot_mechanics:TumblingReelModule:methods:spinAction"
title: "TumblingReelModule.spinAction Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "spinAction"]
---

# 📖 `TumblingReelModule.spinAction()`

---

## 1. Method Signature & Overview

```typescript
spinAction(): void
```

- **Primary Role**: Implements spinAction within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
spinAction(): void {
        this.isSpinningCompleted = false;
        this.isFastStopped = false;

        const reverseSymbols = [...this.listSymbols].reverse();
        reverseSymbols.forEach((symbol, index) => {
            const position: cc.Vec2 = symbol.getPosition();
            symbol.setSiblingIndex(this.reelManager.totalSymbol - index - 1);

            const delayByReelIndex = index * this.config.DELAY_BETWEEN_SYMBOLS_SPINNING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
            let delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : delayByReelIndex;
            
            tween(symbol)
                .delay(delayTime)
                .call(() => {
                    this.changeToBlurSymbol(symbol)
                })
                .to(this.reelManager.speed, { position: new Vec2(0, position.y - this.reelManager.totalSymbol * this.SYMBOL_HEIGHT - this.config.BUFFER_BOTTOM_Y) })
                .call(() => {
                    if (index == this.reelManager.totalSymbol - 1) {
                        this.isSpinningCompleted = true;
                        this.recycleSymbol();
                    }
                })
                .start();
        });
	}
```
