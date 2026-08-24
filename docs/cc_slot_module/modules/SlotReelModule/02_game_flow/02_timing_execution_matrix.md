---
id: "cc_slot_module:SlotReelModule:game_flow:timing_execution_matrix"
title: "SlotReelModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "game_flow", "timing_matrix", "physics", "speed"]
---

# ⏱️ SlotReelModule Timing & Execution Matrix

---

## 1. Speed & Physics Parameters by Mode

| Parameter Key | Normal Mode | Turbo Mode | FTR / Instant Mode | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `speed` (Step Duration) | $0.05\text{s} - 0.08\text{s}$ | $0.02\text{s} - 0.03\text{s}$ | $0.005\text{s}$ | Duration per single symbol height translation. |
| `delayStop` (Reel Stagger) | $0.20\text{s}$ per reel | $0.05\text{s}$ per reel | $0.00\text{s}$ | Staggered stop interval between consecutive columns. |
| `stepStop` (Countdown Steps) | $4 - 6$ steps | $1 - 2$ steps | $0$ steps | Number of symbol rows to scroll before settling. |
| `easingStop` (Bounce Distance) | $20\text{px} - 35\text{px}$ | $10\text{px}$ | $0\text{px}$ | Vertical overshoot bounce amplitude. |
| `easingTimeStop` (Bounce Duration)| $0.12\text{s}$ | $0.05\text{s}$ | $0.00\text{s}$ | Time taken for bounce overshoot and rebound. |

---

## 2. Event Dispatch Timeline Matrix

| Trigger Moment | Internal Hook | Emitted Event / Callback | Target Subsystem |
| :--- | :--- | :--- | :--- |
| **Spin Start** | `runReelSpin()` | `ReelSpinState.START` | `ReelManager` resets step counts. |
| **Each Step Scroll** | `spinAction()` | `recycleSymbol()` | `SlotSymbolManager` recycles nodes. |
| **Near-Win Detected** | `extendTimeToStop()` | Reschedules `stopCallback` | Extends column spin duration for anticipation. |
| **Pre-Stop Landing** | `onReelPreStop()` | `reelPreStopCB(reelIndex)` | `SlotTableNearWinModule` plays anticipation VFX. |
| **Complete Stop** | `playStopAnimation()` | `reelStopCB(reelIndex)` | `SlotTableModule` tracks `reelCount++`. |
