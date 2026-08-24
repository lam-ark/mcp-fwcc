---
id: "cc_slot_module:GameDirector:game_flow:timing_execution_matrix"
title: "GameDirector Mode Transition Timing Matrix"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ GameDirector Mode Transition Timing Matrix

## 1. Timing Matrix

| Transition Event | Normal Flow | Resume Flow (`isResume: true`) | Back To Real Mode |
| :--- | :--- | :--- | :--- |
| **`SWITCH_GAME_MODE`** | Node switch + Intro Spine | Immediate node switch (0 delay) | Bypassed |
| **`EXIT_GAME_MODE`** | Total Win celebration + Node restore | Zero delay node restore | Immediate reset via `resumeNormalGameMode()` |
| **`EVENT_HIDE` / `SHOW`** | 0.2s debounce on action manager resume | 0.2s debounce | 0.2s debounce |
