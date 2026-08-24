---
id: "cc_slot_module:CutsceneController:game_flow:timing_execution_matrix"
title: "CutsceneController Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CutsceneController Timing Execution Matrix

---

## 1. Timing Matrix

| Method | Mode | Timing / Latency | Pipeline Impact |
| :--- | :--- | :--- | :--- |
| **`onLoadExtend`** | Synchronous | $< 1\text{ms}$ | Scene bootstrap |
| **`playCutScene`** | Asynchronous | Returns `Promise<void>` (resolved on modal exit) | Blocks ScriptExecutor while active |
| **`closeCutScene`**| Asynchronous | Returns `Promise<void>` (resolved on modal close) | Blocks ScriptExecutor during transition |
| **`skipCutScenes`** | Synchronous | $< 0.1\text{ms}$ | Fast-forwards active modals |
