---
id: "cc_slot_module:SlotBaseModule:game_flow:spin_phase_breakdown"
title: "SlotBaseModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SlotBaseModule Spin Phase Lifecycle

---

## 1. Spin Flow Coordination

| Phase | SlotBaseModule Mechanism |
| :--- | :--- |
| **Engine Boot (`onLoad`)** | DI container injects singletons; invokes `onLoadExtend()`. |
| **Mode Registration (`setupModule`)** | Director passes `moduleEvent` and `gameMode`. |
| **Spin Start (`RESET_ALL_EFFECT_AND_TASKS`)** | Automatically receives reset trigger from `gameLogic` and clears effects. |
| **Destruction (`onDestroy`)** | Subclasses must call `observer.releaseAll()` and `eventManager.targetOff(this)`. |
