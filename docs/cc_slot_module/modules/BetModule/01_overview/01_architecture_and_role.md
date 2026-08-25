---
id: "cc_slot_module:BetModule:overview:architecture_and_role"
title: "BetModule Architectural Role & Betting HUD Controller"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "overview", "architecture", "betting", "wallet", "uimanager"]
---

# 🏛️ BetModule Architectural Role & Betting HUD Controller

---

## 1. Architectural Mission

`BetModule` manages the bottom betting dashboard mounted under `Canvas/Director/UIManager/Bet`. It observes reactive wager state from `eno.BetData` (`betDenom`, `totalBet`, `betLineNumber`, `totalCredit`, `minBetEnable`, `maxBetEnable`), coordinates label text updates (`DenomLabel`, `TotalBetLabel`, `totalLineLabel`, `totalCreditLabel`), manages button interactivity (`increaseBet`, `decreaseBet`), and dispatches wager change commands (`INCREASE_BET`, `DECREASE_BET`) to `gameLogic`.

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
   - Updates denomination, total bet, line counts, and credit strings whenever player selection or backend state mutates `BetData`.
2. **Min / Max Stepper Button Gates (`onMinBetEnable` / `onMaxBetEnable`)**:
   - Dynamically disables the decrement button at minimum bet and increment button at maximum bet (or when wallet balance is insufficient).
3. **Sound Choreography (`playSfxIncreaseBet` / `playSfxDecreaseBet`)**:
   - Plays distinct audio feedback for wager increase vs decrease actions with fallback to standard click SFX.

---

## 3. Tight Coupling with `WalletModule` & Financial Lifecycle

`BetModule` and `WalletModule` form the dual-pillar financial core of the slot game HUD:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Canvas/Director/UIManager                         │
│                                                                             │
│  ┌───────────────────────────────┐     ┌─────────────────────────────────┐  │
│  │           BetModule           │     │          WalletModule           │  │
│  │   Manages Total Bet Wager     │     │    Manages Available Balance    │  │
│  │   (eno.BetData)               │     │    (eno.WalletData)             │  │
│  └───────────────┬───────────────┘     └─────────────────▲───────────────┘  │
└──────────────────┼───────────────────────────────────────┼──────────────────┘
                   │                                       │
                   ▼                                       │
┌──────────────────────────────────────────────────────────┴──────────────────┐
│                         Spin Cycle Financial Flow                           │
│                                                                             │
│  1. Bet Selection: Player adjusts bet -> GameLogic verifies Balance >= Bet │
│  2. Spin Start: Director deducts totalBet -> Emits PAUSE_WALLET            │
│  3. Settlement: WinAmountModule rolls wins -> Emits RESUME_WALLET           │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Wager Validation**: When a player increases the bet via `BetModule`, `gameLogic` evaluates the new total wager against `WalletData.balance`. If funds are insufficient, `maxBetEnable` is set to `false`, disabling `increaseBet`.
2. **Spin Initiation Deductions**: Upon triggering a spin, `totalBet` is deducted from `WalletData.wallets.NORMAL`, and `GameModeDirectorModule` issues `PAUSE_WALLET` to freeze visual wallet roll-ups during spin animations.
3. **Trial Mode Co-ordination**: When switching between Real and Trial modes (`isTrialModeActive`), `BetModule` switches to trial bet limits while `WalletModule` switches display between `realWallet` and `trialWallet`.
