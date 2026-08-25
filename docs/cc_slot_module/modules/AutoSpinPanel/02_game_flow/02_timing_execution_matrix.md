---
id: "cc_slot_module:AutoSpinPanel:game_flow:timing_execution_matrix"
title: "AutoSpinPanel Timing Matrix"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 AutoSpinPanel Timing Matrix

---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Open** | `onAutoSpinPanelOpen(true)` | Slides up from bottom. |
| **Select Number** | `onSelectAutoSpin(index)` | Updates highlight state. |
| **Start** | `onStartAutoSpin()` | Emits `START_AUTO_SPIN` and closes panel. |
