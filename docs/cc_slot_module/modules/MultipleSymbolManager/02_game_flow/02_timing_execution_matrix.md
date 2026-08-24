---
id: "cc_slot_module:MultipleSymbolManager:game_flow:timing_execution_matrix"
title: "MultipleSymbolManager Timing Execution Matrix"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "game_flow", "timing_matrix", "performance", "complexity"]
---

# ⏱️ MultipleSymbolManager Timing Execution Matrix

---

## 1. Execution Cost Matrix

| Operation | Execution Timing | Complexity | Impact on Frame Rate |
| :--- | :--- | :--- | :--- |
| **`initSymbolPool()`** | `onLoadExtend` (Bootstrap) | $O(N + \sum M_i)$ where $N = 15$, $M_i = \text{specialTemplate.count}$ | Pre-allocated in bootstrap; 0 dropped frames during gameplay. |
| **`getSymbolFromPool(code)`** | Reel Scroll / Static Land | $O(1)$ Map lookup + Stack Pop | Instantaneous (< 0.1ms) via `SlotCustomNodePool.get(code)`. |
| **`removeSymbol(symbol)`** | Reel Stop / Mode Teardown | $O(K)$ array splice + $O(1)$ pool put | Quick node recycling (< 0.2ms). |
| **`updateSymbolSiblingIndex()`** | Win Payline Presentation | $O(S \log S)$ ($S \le \text{grid size}$) | Fast z-ordering across normal and custom Spine symbols (< 0.3ms). |

---

## 2. Multi-Pool Memory & Instantiation Lifecycle

- **Bootstrap**: All custom prefabs declared in `specialSymbolTemplates` alongside base `template` are instantiated into discrete `cc.NodePool` instances.
- **Runtime Spin Cycle**: Symbol checkout executes strictly in $O(1)$ constant time without dynamic prefab instantiation overhead, preserving a steady 60 FPS.
