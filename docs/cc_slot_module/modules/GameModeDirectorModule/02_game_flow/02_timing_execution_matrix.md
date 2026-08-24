---
id: "cc_slot_module:GameModeDirectorModule:game_flow:timing_execution_matrix"
title: "GameModeDirectorModule Timing & Speed Execution Matrix"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "game_flow", "timing", "matrix", "turbo", "FTR"]
---

# ⏱️ GameModeDirectorModule Timing & Speed Execution Matrix

## 1. Speed Execution Matrix Across Game Speeds

| Pipeline Step / Hook | Normal Speed (`gameSpeed = 0`) | Turbo Speed (`gameSpeed = 1`) | FTR / Instantly (`gameSpeed = 2`) |
| :--- | :--- | :--- | :--- |
| **`TABLE_START_SPIN`** | Regular acceleration easing | Shortened ramp-up | Instant spin start |
| **`TABLE_STOP_SPIN`** | Standard column interval (0.2s - 0.3s) | Accelerated column interval (0.1s) | Snaps all columns simultaneously (`TABLE_FAST_STOP`) |
| **`_showCutscene`** | Full spine duration with audio | Scaled / Fast-forwarded | Skipped immediately (`_showCutscene_2` returns resolved Promise) |
| **`_showBigWin`** | Full coin roll count-up animation | Fast coin count | Snaps to final total immediately |
| **`_showWinPayline`** | Blinks paylines + waits for `delayTime` | Shortened delay | Zero delay |
| **`delayAutoSpin`** | `0.5s` scheduled delay | `0.1s` - `0.2s` scheduled delay | Instant restart |
