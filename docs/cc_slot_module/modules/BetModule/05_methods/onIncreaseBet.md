---
id: "cc_slot_module:BetModule:methods:onIncreaseBet"
title: "BetModule.onIncreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onIncreaseBet"]
---

# 📖 `BetModule.onIncreaseBet()`

---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.INCREASE_BET`.

```typescript
public onIncreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onIncreaseBet(): void {
    this.playSfxIncreaseBet();
    this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
}
```
