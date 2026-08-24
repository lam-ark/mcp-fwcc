---
id: "cc_slot_module:ExtraBetModule:methods:onDecreaseExtraBet"
title: "ExtraBetModule.onDecreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onDecreaseExtraBet"]
---

# 📖 `ExtraBetModule.onDecreaseExtraBet()`

---

## 1. Method Overview & Signature

Plays sound effect and dispatches `DECREASE_EXTRA_BET`.

```typescript
public onDecreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDecreaseExtraBet(): void {
    this.playSfxDecreaseExtraBet();
    this.gameLogic.emit(GameLogicUIEvents.DECREASE_EXTRA_BET);
}
```
