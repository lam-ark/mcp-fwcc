---
id: "cc_slot_module:systems:game_mode:index"
title: "Game Mode System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "architecture", "index", "flow", "module_linkage"]
---

# 🎮 Game Mode System Architecture Index

Welcome to the technical guide on the **Game Mode Architecture & Finite State Machine (FSM)** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_game_mode_concepts_and_types.md`](./01_game_mode_concepts_and_types.md)**
   * High-level concepts of Game Modes in slot machines.
   * Catalog of 5 standard mode types (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`, `FREE_OPTION`, `FORTUNE_WHEEL`).

2. **[`02_mode_anatomy_director_writer_data.md`](./02_mode_anatomy_director_writer_data.md)**
   * The 3-layer internal anatomy of a Game Mode: `Director` (Visual & Scene Owner) + `Writer` (Script Sequence Planner) + `DataStore/DataModule` (Reactive State).

3. **[`03_inter_module_communication_4_channels.md`](./03_inter_module_communication_4_channels.md)**
   * The 4 core communication channels: Scoped `moduleEvent`, Global `EventManager`, IoC `@inject`, and Direct Method Delegation.

4. **[`04_mode_transition_and_stack_fsm.md`](./04_mode_transition_and_stack_fsm.md)**
   * Complete mode switching lifecycle: Enter / Resume / Exit hooks, mode stack preservation, transition overlay choreography.

5. **[`05_custom_game_mode_extension_guide.md`](./05_custom_game_mode_extension_guide.md)**
   * Step-by-step developer guide on implementing new game modes (e.g., Hold & Spin, Cascade Respin) with clean inheritance.

6. **[`06_game_mode_prefabs_and_composition.md`](./06_game_mode_prefabs_and_composition.md)**
   * Self-contained sub-scene packaging: `MainGamePrefab`, `FreeGamePrefab`, `BonusGamePrefab` node anatomy, component wiring matrix, memory management, and game setup guide.
