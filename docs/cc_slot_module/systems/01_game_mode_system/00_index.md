---
id: "cc_slot_module:systems:game_mode:index"
title: "Game Mode System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "architecture", "index", "flow", "module_linkage"]
---

# 🎮 Game Mode System Architecture Index

Welcome to the comprehensive technical guide on the **Game Mode Subsystem** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_game_mode_concepts_and_types.md`](./01_game_mode_concepts_and_types.md)**
   * Theoretical foundation: Game Mode as a Finite State Machine (FSM).
   * Detailed breakdown of the 5 canonical mode types: `NORMAL_GAME`, `FREE_GAME`, `FREE_OPTION`, `BONUS_GAME`, `CASCADE_GAME`.
   * Inter-mode transition triggers and state diagrams.

2. **[`02_game_mode_anatomy_and_composition.md`](./02_game_mode_anatomy_and_composition.md)**
   * Complete anatomical blueprint of a Game Mode: `Director` + `Writer` + `ScriptExecutor` + `DataModules` + `moduleList`.
   * Co-location principles and IoC container dependency injection inside Mode containers.
   * Direct node linkages in the scene hierarchy.

3. **[`03_inter_module_communication_4_channels.md`](./03_inter_module_communication_4_channels.md)**
   * Deep-dive into the 4 multi-tier communication channels:
     * *Channel 1*: Reactive Data Flow (`GameDataStore` ➔ `BaseDataModule`).
     * *Channel 2*: Command Script Pipeline (`Director` ➔ `Writer` ➔ `ScriptExecutor`).
     * *Channel 3*: Scoped Module Event Bus (`this.moduleEvent`).
     * *Channel 4*: Global Event Bus (`this.eventManager` & `this.gameLogic`).
   * Complete comparative matrix and execution flowcharts.

4. **[`04_mode_transitions_and_stack_lifecycle.md`](./04_mode_transitions_and_stack_lifecycle.md)**
   * Full mode transition sequence (`transitionGameMode`, `enterGameMode`, `exitGameMode`).
   * Memory management, audio crossfades, cutscene handoffs, and clean teardown lifecycles.
