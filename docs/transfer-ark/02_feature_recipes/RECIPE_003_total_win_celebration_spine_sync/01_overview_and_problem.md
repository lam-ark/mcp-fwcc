---
id: "transfer-ark:feature:total_win_celebration:01_overview"
title: "Total Win Celebration - Overview & Business Requirements"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "FreeGameDirectorModule"]
tags: ["total_win", "free_game", "overview", "business_rules"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 1. 📌 Problem & Business Requirements Overview

---

## 1.1 Business Context & Requirements
When a player finishes all spins in a Free Game (or rounds in a Bonus Feature), the game must display the **Total Win Cutscene** summarizing the aggregate winnings accumulated throughout the entire feature session before returning to Normal Game mode.

### UX Requirements:
1. **Entrance (`in`)**: Character or celebration Spine plays entrance animation while the win amount counts up from 0 to total accumulated amount.
2. **Idle Loop (`loop`)**: Once counting finishes, the Spine transitions to an idle celebration loop.
3. **Exit Transition (`out`)**: When the player taps to close (or upon 3.0s auto-close), the Spine plays an exit outro animation before dismissing the popup.
4. **Bone-Anchored Win Label**: The win amount text must dynamically follow the `slot_money` Spine bone to synchronize with character bouncing and hand gestures.
5. **Interactive Fast-Forward & Dismissal**:
   - Tapping during counting immediately finishes the count-up.
   - 1.0s Debounce prevents accidental immediate closing.
   - Tapping during completed state triggers the `out` animation.
   - Tapping during the `out` animation instantly skips the outro and exits.

---

## 1.2 Vendor SDK vs ARK Business Discrepancy

| Aspect | Vendor SDK Default (`TotalWinModule`) | ARK Business Requirement (`TotalWinModule9666`) |
| :--- | :--- | :--- |
| **Spine Choreography** | Static or single animation playback | 3-stage animated lifecycle: `in` $\rightarrow$ `loop` $\rightarrow$ `out` |
| **Label Positioning** | Static label centered on screen | Dynamic World-Space tracking of `slot_money` Spine bone |
| **Touch Interaction** | Simple on-click exit | State-aware click: Skip Count $\rightarrow$ 1s Debounce $\rightarrow$ Trigger Out $\rightarrow$ Skip Out |
| **Audio Choreography** | Basic SFX | `BGM_TOTAL_WIN` transition and graceful `resumeMainBGM()` restore on exit |
| **State Machine** | Implicit boolean flags | Explicit 4-state state machine (`TotalWinState`) |
