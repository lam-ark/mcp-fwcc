---
id: "cc_slot_module:ExtraBetModule:methods:onIncreaseExtraBet"
title: "ExtraBetModule.onIncreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onIncreaseExtraBet"]
---

# 📖 `ExtraBetModule.onIncreaseExtraBet()`

---

## 1. Method Overview & Signature

Plays sound effect and dispatches `INCREASE_EXTRA_BET`.

```typescript
public onIncreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onIncreaseExtraBet(): void {
    this.playSfxIncreaseExtraBet();
    this.gameLogic.emit(GameLogicUIEvents.INCREASE_EXTRA_BET);
}
```
