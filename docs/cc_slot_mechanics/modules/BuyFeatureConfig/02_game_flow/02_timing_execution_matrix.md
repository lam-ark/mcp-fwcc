---
id: "cc_slot_mechanics:BuyFeatureConfig:game_flow:timing_execution_matrix"
title: "BuyFeatureConfig Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ BuyFeatureConfig Timing & Execution Matrix

---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
