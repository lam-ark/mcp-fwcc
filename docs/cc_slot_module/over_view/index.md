---
id: "cc_slot_module:overview:index"
title: "cc-slot-module Core Architecture & Subsystems Master Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "systems", "index", "architecture", "master_guide"]
---

# 📚 `cc-slot-module` Core Architecture & Subsystems Master Guide

Welcome to the comprehensive master guide for the **Core Architecture & Subsystems** of `cc-slot-module` — the industry-standard Slot Game Development Framework built for Cocos Creator.

---

## 🏛️ 1. Foundations & Architectural Patterns
* **[`01_module_architecture_and_philosophy.md`](./01_module_architecture_and_philosophy.md)**: Modular philosophy, separation of Data - Presentation - Director, and modern slot game design standards.
* **[`02_dependency_injection_ioc.md`](./02_dependency_injection_ioc.md)**: Inversion of Control (IoC) mechanics and `@inject` dependency resolution via Service Locator.
* **[`03_dual_event_bus_system.md`](./03_dual_event_bus_system.md)**: Dual Event Bus architecture separating Scoped `moduleEvent` and Global `EventManager`.
* **[`04_module_lifecycle_and_registration.md`](./04_module_lifecycle_and_registration.md)**: Deterministic lifecycle pipeline (`onLoad` ➔ `start` ➔ `onDestroy`) and module registration.
* **[`05_module_ecosystem_and_classification.md`](./05_module_ecosystem_and_classification.md)**: Ecosystem taxonomy mapping the 6 primary module clusters.
* **[`06_module_best_practices_and_gotchas.md`](./06_module_best_practices_and_gotchas.md)**: Production-tested best practices and critical engine gotchas.
* **[`07_game_mode_architecture_and_composition.md`](./07_game_mode_architecture_and_composition.md)**: Game Mode FSM, component composition, and multi-tier inter-module communication.
* **[`08_table_reel_symbol_engine_architecture.md`](./08_table_reel_symbol_engine_architecture.md)**: Table, Reels, and Symbol Engine architecture, rendering loop, and pooling.
* **[`09_reactive_data_flow_and_reconnection_architecture.md`](./09_reactive_data_flow_and_reconnection_architecture.md)**: Reactive data pipeline, packet ingestion, key mapping, and reconnection hydration.
* **[`10_script_executor_and_writer_command_pipeline.md`](./10_script_executor_and_writer_command_pipeline.md)**: Script Executor, Writer generation, command synthesis, and Promise execution pipeline.
* **[`11_win_evaluation_payline_and_celebration_hierarchy.md`](./11_win_evaluation_payline_and_celebration_hierarchy.md)**: Win evaluation tiers, celebration hierarchy (Win Ratios, line cycling, and cutscenes).
* **[`12_audio_choreography_and_sound_pipeline.md`](./12_audio_choreography_and_sound_pipeline.md)**: Slot audio choreography (BGM ducking, spin sound loops, near-win tension, and coin rollups).
* **[`13_scene_graph_prefabs_and_packaging_conventions.md`](./13_scene_graph_prefabs_and_packaging_conventions.md)**: Standard Scene Graph hierarchy, prefab breakdown, and project directory structure.
* **[`14_guide_how_to_create_and_setup_new_module.md`](./14_guide_how_to_create_and_setup_new_module.md)**: **End-to-End Guide: How to Create and Setup a New Module from Scratch** (Script templates, scene node integration, Tag Editor, Writer integration, and golden rules).

---

## 🔬 2. Subsystem Deep-Dives

### 🎮 A. [Game Mode Subsystem](../systems/01_game_mode_system/00_index.md)
* [`01_game_mode_concepts_and_types.md`](../systems/01_game_mode_system/01_game_mode_concepts_and_types.md): FSM concepts, 5 standard modes (Normal, Free, Option, Bonus, Cascade).
* [`02_game_mode_anatomy_and_composition.md`](../systems/01_game_mode_system/02_game_mode_anatomy_and_composition.md): Deep-dive into Director + Writer + Data + `moduleList`.
* [`03_inter_module_communication_4_channels.md`](../systems/01_game_mode_system/03_inter_module_communication_4_channels.md): **4 Multi-tier communication channels** across modules.
* [`04_mode_transitions_and_stack_lifecycle.md`](../systems/01_game_mode_system/04_mode_transitions_and_stack_lifecycle.md): Mode transition lifecycle, stack management, and clean teardown.

---

### 🎰 B. [Table & Symbol Engine](../systems/02_table_reel_symbol_engine/00_index.md)
* [`01_table_engine_7_core_components.md`](../systems/02_table_reel_symbol_engine/01_table_engine_7_core_components.md): 7 Coordinated components (Table, Config, Reel, Symbol, Pool, Resource, Sound).
* [`02_matrix_geometry_and_buffer_rows.md`](../systems/02_table_reel_symbol_engine/02_matrix_geometry_and_buffer_rows.md): `[col][row]` coordinate space and hidden buffer rows (`topBuffer`/`bottomBuffer`).
* [`03_z_index_priority_layer_sorting.md`](../systems/02_table_reel_symbol_engine/03_z_index_priority_layer_sorting.md): Visual layer sorting algorithm via `sortSymbols()`.
* [`04_mega_symbols_and_irregular_grids.md`](../systems/02_table_reel_symbol_engine/04_mega_symbols_and_irregular_grids.md): Giant symbols (Gigablox) and irregular ways-to-win grid matrices.
* [`05_symbol_pooling_and_gc_optimization.md`](../systems/02_table_reel_symbol_engine/05_symbol_pooling_and_gc_optimization.md): Node pooling and mobile Garbage Collection optimization.

---

### 🔄 C. [Reactive Data System](../systems/03_reactive_data_system/00_index.md)
* [`01_server_packet_ingestion_pipeline.md`](../systems/03_reactive_data_system/01_server_packet_ingestion_pipeline.md): Packet journey from WebSocket ➔ `GameDataStore` ➔ `BaseDataModule`.
* [`02_key_deobfuscation_map_new_keys.md`](../systems/03_reactive_data_system/02_key_deobfuscation_map_new_keys.md): Mobile bandwidth key decompression with `mapNewKeys()`.
* [`03_state_immutability_and_deep_clone.md`](../systems/03_reactive_data_system/03_state_immutability_and_deep_clone.md): State immutability principles and memory-isolated deep clones.
* [`04_reconnection_is_resume_state_hydration.md`](../systems/03_reactive_data_system/04_reconnection_is_resume_state_hydration.md): Restoring matrix, remaining spin counts, and accumulated wins on resume.

---

### 📜 D. [Script Execution Pipeline](../systems/04_script_execution_pipeline/00_index.md)
* [`01_scripting_triad_director_writer_executor.md`](../systems/04_script_execution_pipeline/01_scripting_triad_director_writer_executor.md): The Scripting Triad (Director ➔ Writer ➔ ScriptExecutor).
* [`02_command_synthesis_and_payload_dispatch.md`](../systems/04_script_execution_pipeline/02_command_synthesis_and_payload_dispatch.md): Command synthesis techniques (`string[]`) and payload objects.
* [`03_async_promise_chaining_mechanism.md`](../systems/04_script_execution_pipeline/03_async_promise_chaining_mechanism.md): Non-blocking sequential Promise chaining mechanism.
* [`04_turbo_mode_and_skip_all_effects.md`](../systems/04_script_execution_pipeline/04_turbo_mode_and_skip_all_effects.md): Turbo mode execution and fast stop with `skipAllEffects()`.
