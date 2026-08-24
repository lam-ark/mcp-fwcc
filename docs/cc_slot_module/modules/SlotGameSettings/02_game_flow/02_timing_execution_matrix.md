---
id: "cc_slot_module:SlotGameSettings:game_flow:timing_execution_matrix"
title: "SlotGameSettings Speed vs Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "game_flow", "timing", "speed_matrix", "NORMAL", "TURBO", "INSTANTLY"]
---

# ⏱️ SlotGameSettings Speed vs Timing Execution Matrix

## 1. Speed Mode Execution Timings Comparison

| Gameplay Phase | `NORMAL` (`0`) | `TURBO` (`1`) | `INSTANTLY / FTR` (`2`) |
| :--- | :--- | :--- | :--- |
| **Reel Spin Duration** | `1.2s - 2.0s` | `0.4s - 0.8s` | `0.0s` (Bypassed immediately) |
| **Near-Win Teaser** | Full 3.0s reel glow & pitch up | Compressed 1.2s glow | Bypassed |
| **Payline Presentation** | `0.6s` per line | `0.3s` per line | Combined instant flash |
| **Coin Count-Up (Big Win)**| Full duration (3.0s - 8.0s) | Fast roll (1.5s - 3.0s) | Instant final value applied |
| **ScriptExecutor Delay** | 1.0x baseline | 0.5x compression | 0.0s instant dispatch |
