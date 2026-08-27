---
id: "game-implement:9666:payline:sync_and_events"
title: "Red Cliff (g9666) Payline Synchronization & Event Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "payline", "events", "synchronization", "event_bus"]
---

# 🔄 Red Cliff (g9666) Payline Synchronization & Event Pipeline

---

## 1. Payline Presentation Event Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameDirectorModule9666
    participant Payline as SlotTablePaylineModule9666
    participant Schedule as SlotPaylineSchedule9666
    participant PayInfo as PaylineInfoModule9666
    participant WinFrame as PaylineWinFrameEffect9666

    Note over Director: Respin / Cascade settle
    Director->>Director: _blinkAllPaylines()
    Director->>Schedule: emit('SHOW_PAYLINE_WIN_AMOUNT')
    Schedule->>PayInfo: emit('SHOW_WIN_AMOUNT', { amount: baseWin, isTotalWin: true })
    
    Director->>PayInfo: emit('APPLY_MULTIPLIER_TO_WIN_AMOUNT')
    PayInfo->>PayInfo: Play hsnCombineSpine + Bone tracking
    PayInfo->>WinFrame: emit('SHOW_TOTAL_WIN_EFFECT', { winAmount, totalBet })
    
    Director->>Director: emit(COMMIT_RESPIN_WIN_AMOUNT)
    Director->>Payline: _clearPaylines()
```

---

## 2. Event Specification

| Event Name | Bus | Sender | Receiver | Payload | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`SHOW_PAYLINE_WIN_AMOUNT`** | `eventManager` | `DirectorModule9666` | `SlotPaylineSchedule9666` | `{ isFirstSpin }` | Prompts calculation of un-multiplied base payline sum. |
| **`SHOW_WIN_AMOUNT`** | `eventManager` | `SlotPaylineSchedule9666` | `PaylineInfoModule9666` | `{ amount, isTotalWin }` | Activates paybar win display. |
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `eventManager` | `DirectorModule9666` | `PaylineInfoModule9666` | `boolean` | Triggers Spine bone tracking animation applying multiplier to winning amount. |
| **`SHOW_TOTAL_WIN_EFFECT`** | `eventManager` | `PaylineInfoModule9666` | `PaylineWinFrameEffect9666` | `{ winAmount, totalBet, isResume }` | Switches tiered win frame (Level 1, 2, or 3). |
| **`RESET_TOTAL_WIN_EFFECT`** | `eventManager` | `PaylineInfoModule9666` | `PaylineWinFrameEffect9666` | `None` | Resets win frame back to idle state. |
| **`COMMIT_RESPIN_WIN_AMOUNT`** | `eventManager` | `DirectorModule9666` | `WinAmountModule9666` | `None` | Commits current cascade step's win into player session balance. |
| **`FADE_OUT_RESPIN_WIN_AMOUNT`** | `eventManager` | `DirectorModule9666` | `PaylineInfoModule9666` | `duration` | Smoothly fades out win text prior to next spin. |
