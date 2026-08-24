---
id: "cc_slot_module:BetModule:methods:onDecreaseBet"
title: "BetModule.onDecreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onDecreaseBet"]
---

# 📖 `BetModule.onDecreaseBet()`

---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.DECREASE_BET`.

```typescript
public onDecreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDecreaseBet(): void {
    this.playSfxDecreaseBet();
    this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
}
```
