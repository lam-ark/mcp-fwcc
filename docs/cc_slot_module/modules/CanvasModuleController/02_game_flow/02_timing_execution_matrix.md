---
id: "cc_slot_module:CanvasModuleController:game_flow:timing_execution_matrix"
title: "CanvasModuleController Timing Matrix"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CanvasModuleController Timing Matrix

---

## 1. Execution Matrix

| Event | Caller | Action |
| :--- | :--- | :--- |
| **Scene Load** | Cocos Engine | `onLoad()` ➔ Instantiates `CanvasControllerWrapper` |
| **Scene Start** | Cocos Engine | `start()` ➔ Starts wrapper and recalculates initial frame size |
| **Window Resize**| Browser/OS | Wrapper dynamically recalculates design resolution and updates widgets |
| **Scene Teardown**| Cocos Engine | `onDestroy()` ➔ Unbinds window resize listeners |
