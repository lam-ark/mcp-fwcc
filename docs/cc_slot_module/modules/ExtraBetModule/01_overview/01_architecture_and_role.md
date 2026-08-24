---
id: "cc_slot_module:ExtraBetModule:overview:architecture_and_role"
title: "ExtraBetModule Architectural Role & Ante-Bet Modifier Controller"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "overview", "architecture", "ante_bet"]
---

# 🏛️ ExtraBetModule Architectural Role & Ante-Bet Modifier Controller

---

## 1. Architectural Mission

`ExtraBetModule` controls the Ante-Bet / Golden Bet feature multiplier toggles under `Canvas/Director/UIManager/ExtraBet`. It modifies base wager multipliers (e.g., $1.25\times$ or $1.50\times$) to elevate Scatter/Bonus symbol drop probabilities, listening to `eno.BetData` and dispatching `INCREASE_EXTRA_BET` / `DECREASE_EXTRA_BET`.

```mermaid
graph TD
    BetModel[eno.BetData Model] -->|Reactive Watches| EBM[ExtraBetModule]
    EBM -->|Update string| ExtraBetLabel[extraBetLabel: extraBetValue]
    
    PlusBtn[increaseExtraBet Button] -->|onIncreaseExtraBet()| EBM
    MinusBtn[decreaseExtraBet Button] -->|onDecreaseExtraBet()| EBM
    
    EBM -->|INCREASE_EXTRA_BET / DECREASE_EXTRA_BET| GL[GameLogic / Server]
```

---

## 2. Key Responsibilities

1. **Ante-Bet Stepping (`onIncreaseExtraBet` / `onDecreaseExtraBet`)**:
   - Manages optional bonus bet levels that alter game RTP/volatility profiles.
2. **Interactability Gating (`onMinExtraBetEnable` / `onMaxExtraBetEnable`)**:
   - Disables stepper buttons at minimum and maximum extra bet boundaries.
3. **Sound Management (`playSfxIncreaseExtraBet` / `playSfxDecreaseExtraBet`)**:
   - Provides audio cues when modifying feature bet levels.
