---
id: "cc_slot_module:BaseGameDirector:game_flow:timing_execution_matrix"
title: "BaseGameDirector Action Pipeline Timing Matrix"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "game_flow", "timing", "execution_matrix", "ScriptExecutor"]
---

# ⏱️ BaseGameDirector Action Pipeline Timing Matrix

## 1. Action Step Timing Execution Matrix

| Action Name | Normal Speed (`1.0x`) | Turbo Speed (`2.0x`) | FTR / Instant Speed |
| :--- | :--- | :--- | :--- |
| **`SpinStart`** | `0.3s` anticipation | `0.1s` anticipation | `0.0s` instant |
| **`SpinResult`** | `1.5s - 2.5s` reel stop | `0.6s - 1.0s` reel stop | `0.0s` instant snap |
| **`WinPresentation`** | `2.0s - 6.0s` payline cycle | `1.0s - 3.0s` compressed | `0.0s` instant win flash |
| **`FeatureTransition`**| `2.5s` crossfade & banner | `1.2s` fast banner | `0.5s` skip |
| **`SpinEnd`** | `0.5s` settle delay | `0.2s` settle delay | `0.0s` immediate re-trigger |
