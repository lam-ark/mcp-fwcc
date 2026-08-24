---
id: "cc_slot_module:IntroGameModule:game_flow:timing_execution_matrix"
title: "IntroGameModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ IntroGameModule Timing Execution Matrix

---

## 1. Timing Matrix

| Action | Execution Nature | Duration | Behavior |
| :--- | :--- | :--- | :--- |
| **`init`** | Synchronous | $< 1\text{ms}$ | Reads localStorage. |
| **`onClickJoinGame`** | Async Tween | $0.2\text{s}$ | Fades out and disables node. |
| **`joinGameSuccess`** | Synchronous | $< 0.1\text{ms}$ | Auto-skips if reconnecting. |
