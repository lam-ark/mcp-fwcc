---
id: "cc_slot_module:SlotBaseModule:game_flow:timing_execution_matrix"
title: "SlotBaseModule Timing Matrix"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotBaseModule Timing Matrix

---

## 1. Lifecycle Timing

| Phase | Timing |
| :--- | :--- |
| `onLoad` & DI Injection | Instantaneous frame 0 execution ($0.0\text{s}$) |
| `setupModule` | Invoked during GameMode init before spin loops start |
| `resetAllEffectAndTasks` | Synchronous event trigger at the start of each spin cycle |
