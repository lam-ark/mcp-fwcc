---
id: "cc_slot_mechanics:TumblingReelModule:methods:playSymbolAppearAnimation"
title: "TumblingReelModule.playSymbolAppearAnimation Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "playSymbolAppearAnimation"]
---

# 📖 `TumblingReelModule.playSymbolAppearAnimation()`

---

## 1. Method Signature & Overview

```typescript
playSymbolAppearAnimation(symbol?: cc.Node): void
```

- **Primary Role**: Implements playSymbolAppearAnimation within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
playSymbolAppearAnimation(symbol?: cc.Node): void {
        symbol.emit("PLAY_ANIMATION_APPEAR");
    }
```
