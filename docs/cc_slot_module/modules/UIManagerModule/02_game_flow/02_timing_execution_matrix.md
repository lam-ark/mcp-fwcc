---
id: "cc_slot_module:UIManagerModule:game_flow:timing_execution_matrix"
title: "UIManagerModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ UIManagerModule Timing Execution Matrix

---

## 1. Timing Configuration

| Action / Transition | Duration | Description |
| :--- | :--- | :--- |
| `updateGameModeUI` | Instant ($0.0\text{s}$) | Synchronous node active state swapping. |
| Payline Info Opacity Swap | Instant ($0.0\text{s}$) | Sets target opacity $0 \leftrightarrow 255$ via `eno.setOpacity`. |
| Trial Mode Reconnection | Instant ($0.0\text{s}$) | Swaps real and trial jackpot node visibility. |
