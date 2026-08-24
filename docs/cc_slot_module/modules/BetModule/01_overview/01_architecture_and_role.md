---
id: "cc_slot_module:BetModule:overview:architecture_and_role"
title: "BetModule Architectural Role & Betting HUD Controller"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "overview", "architecture", "betting"]
---

# 🏛️ BetModule Architectural Role & Betting HUD Controller

---

## 1. Architectural Mission

`BetModule` manages the bottom betting dashboard under `Canvas/Director/UIManager/Bet`. It observes reactive wager values on `eno.BetData` (`betDenom`, `totalBet`, `betLineNumber`, `totalCredit`, `minBetEnable`, `maxBetEnable`), triggers localized label text formatting (`BetLabelModule`, `DenomLabel`, `TotalBetLabel`), controls stepper button interactability, and dispatches wager change actions (`INCREASE_BET`, `DECREASE_BET`).

```mermaid
graph TD
    DataModel[eno.BetData Model] -->|Reactive Watches| BM[BetModule]
    BM -->|ON_UPDATE_VALUE| Denom[DenomLabel: betDenom]
    BM -->|ON_UPDATE_VALUE| TotalBet[TotalBetLabel: totalBet]
    BM -->|String format| Lines[totalLineLabel: betLineNumber]
    BM -->|String format| Credits[totalCreditLabel: totalCredit]
    
    PlusBtn[increaseBet Button] -->|onIncreaseBet()| BM
    MinusBtn[decreaseBet Button] -->|onDecreaseBet()| BM
    
    BM -->|INCREASE_BET / DECREASE_BET| GL[GameLogic / Backend]
```

---

## 2. Key Responsibilities

1. **Reactive Wager Updates (`setupObserver`)**:
   - Updates denomination, total bet, line counts, and credit strings whenever backend calculations modify `BetData`.
2. **Min / Max Stepper Button Gates (`onMinBetEnable` / `onMaxBetEnable`)**:
   - Dynamically disables the decrement button at minimum bet and increment button at maximum bet.
3. **Sound Choreography (`playSfxIncreaseBet` / `playSfxDecreaseBet`)**:
   - Plays distinct audio feedback for wager increase vs decrease actions.
