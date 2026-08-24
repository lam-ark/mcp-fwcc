---
id: "cc_slot_module:SlotTableNearWinModule:game_flow:spin_phase_breakdown"
title: "SlotTableNearWinModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTableNearWinModule Spin Phase Breakdown

---

## 1. Spin Phase Matrix Behavior

```mermaid
graph TD
    Phase1[1. Spin Start] -->|Reset counters & stop existing SFX| Clean[resetNearWin]
    Phase2[2. Matrix Received] -->|setupNearWin calculates near-win flags| Setup[Flag extendTimeToStop on reels]
    Phase3[3. Reel Rolling] -->|reelStopNearWin checks each column| Check[If Col N has Near-Win -> Play Glow + SFX]
    Phase4[4. Final Reel Stopped] -->|reelCount >= max reels| Reset[resetNearWin & stop NEAR_WIN audio]
    Phase5[5. FTR / Turbo Abort] -->|isFastToResult / isTurboActive| Skip[Bypass animations & immediate cleanup]
```

---

## 2. Granular Behavior Breakdown

1. **Pre-Spin & Spin Start**:
   - `SlotTableModule` clears any residual visual states.
   - `SlotTableNearWinModule` listens to `RESET_NEARWIN` and zeroes `_countScatter`, `_countBonus`, and `_countJp`.
2. **Server Matrix Ingestion**:
   - As server data arrives, `setupNearWin` iterates columns `0..N`.
   - If count meets or exceeds `startAtScatterCount` / `startAtBonusCount`, subsequent columns are marked with `isNearWin: true`.
   - Calls `context.reels[col].extendTimeToStop(true, isLastCol)` on the upcoming reel.
3. **Sequential Reel Landing**:
   - When reel `k` stops, `SlotTableModule` emits `REEL_STOP_NEARWIN`.
   - If reel `k+1` is in anticipation, `_playNearWinEffect(k+1)` sets position to `_getXPosition(k+1)` and starts looping tension audio.
4. **Conclusion or Fast Stop**:
   - When all reels land or player triggers Fast Stop (FTR), `resetNearWin()` stops Spine animations, hides the overlay node, and stops audio.
