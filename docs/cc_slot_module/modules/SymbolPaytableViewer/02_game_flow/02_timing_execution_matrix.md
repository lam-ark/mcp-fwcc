---
id: "cc_slot_module:SymbolPaytableViewer:game_flow:timing_execution_matrix"
title: "SymbolPaytableViewer Timing Matrix"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "game_flow", "timing"]
---

# 📊 SymbolPaytableViewer Timing Matrix

---

## 1. Execution Matrix

| Event | Method | Result |
| :--- | :--- | :--- |
| **Touch End** | `handleTouchSymbol()` | Computes matrix coordinates and displays callout. |
| **Start Spin** | `hideSymbolInfo()` | Hides callout and dismisses backdrop blocker. |
