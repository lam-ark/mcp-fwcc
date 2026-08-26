---
id: "cc_slot_module:LoadingScreenModule:game_flow:timing_execution_matrix"
title: "LoadingScreenModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ LoadingScreenModule Timing & Execution Matrix

---

## 1. Execution Matrix

| Step / Trigger | Caller | Method | State Mutation | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Scene Start** | Cocos Engine | `onLoad()` | Resets progress bar, starts pipeline | Loading stuck if sceneName empty |
| **Config Ready** | Remote poll | `redirectSceneName()` | Sets `updatedScene` | Fallback to default `sceneName` |
| **Progress Tick** | Cocos Engine | `update(dt)` | Increments `progressBar.progress` | Progress jumps abruptly without tween |
| **Preload Complete**| `preloadScene` | `setProgressFull()` | Smoothly tweens to 1.0 in 0.5s | Immediate load without finishing animation |
| **Home Clicked** | User Touch | `homeBtn.on('click')`| Sets `isBackToLobby = true`, closes iframe | Preload continues in background |
