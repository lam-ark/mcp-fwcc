---
id: "cc_slot_module:PaylineWinFrameModule:properties:runtime_state_variables"
title: "PaylineWinFrameModule Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineWinFrameModule Runtime State Variables

---

## 1. Internal State Variables

| Field Name | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `frames` | `cc.Node[][]` | `[]` | 2D cache grid of instantiated frame nodes `frames[reel][row]`. |
| `winFramePool` | `cc.NodePool` | `new NodePool("PaylineWinFrame")` | Object pool for zero-allocation recycling. |
