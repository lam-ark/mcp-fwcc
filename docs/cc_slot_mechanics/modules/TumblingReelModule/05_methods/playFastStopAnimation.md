---
id: "cc_slot_mechanics:TumblingReelModule:methods:playFastStopAnimation"
title: "TumblingReelModule.playFastStopAnimation Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "playFastStopAnimation"]
---

# 📖 `TumblingReelModule.playFastStopAnimation()`

---

## 1. Method Signature & Overview

```typescript
playFastStopAnimation(): void
```

- **Primary Role**: Implements playFastStopAnimation within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected playFastStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const position = this.initPositionByType(index, symbolSize);
            const isLastSymbol = index === 0;
            
            symbol.stopAllActions();
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, 0, new Vec2(position.x, position.y), isLastSymbol);
        });
    }
```
