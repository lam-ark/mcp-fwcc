---
id: "cc_slot_mechanics:TumblingReelModule:methods:playStopAnimation"
title: "TumblingReelModule.playStopAnimation Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "playStopAnimation"]
---

# 📖 `TumblingReelModule.playStopAnimation()`

---

## 1. Method Signature & Overview

```typescript
playStopAnimation(): void
```

- **Primary Role**: Implements playStopAnimation within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected playStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const reverseIndex = this.reelManager.totalSymbol - index - 1;
            const position = this.initPositionByType(index, symbolSize);
            const delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : this.getDelayTimeStopping(reverseIndex);
            const isLastSymbol = (index == this.reelManager.totalSymbol - 1);
            
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, delayTime, new cc.Vec2(position.x, position.y), isLastSymbol);
        });
	}
```
