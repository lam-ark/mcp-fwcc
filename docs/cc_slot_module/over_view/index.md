---
id: "cc_slot_module:overview:index"
title: "cc-slot-module Core Architecture & Subsystems Master Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "systems", "index", "architecture", "master_guide"]
---

# 📚 `cc-slot-module` Core Architecture & Subsystems Master Guide

Welcome to the comprehensive master guide for the **Core Architecture & Subsystems** of `cc-slot-module` — the industry-standard Slot Game Development Framework built for Cocos Creator.

---

## 🏛️ 1. Foundations & Architectural Patterns (Global Overviews)
* **[`01_module_architecture_and_philosophy.md`](./01_module_architecture_and_philosophy.md)**: Modular philosophy, separation of Data - Presentation - Director, and modern slot game design standards.
* **[`02_dependency_injection_ioc.md`](./02_dependency_injection_ioc.md)**: Inversion of Control (IoC) mechanics and `@inject` dependency resolution via Service Locator.
* **[`03_dual_event_bus_system.md`](./03_dual_event_bus_system.md)**: Dual Event Bus architecture separating Scoped `moduleEvent` and Global `EventManager`.
* **[`04_module_lifecycle_and_registration.md`](./04_module_lifecycle_and_registration.md)**: Deterministic lifecycle pipeline (`onLoad` ➔ `start` ➔ `onDestroy`) and module registration.
* **[`05_module_ecosystem_and_classification.md`](./05_module_ecosystem_and_classification.md)**: Ecosystem taxonomy mapping the 10 primary module clusters.
* **[`06_module_best_practices_and_gotchas.md`](./06_module_best_practices_and_gotchas.md)**: Production-tested best practices and critical engine gotchas.
* **[`07_game_mode_architecture_and_composition.md`](./07_game_mode_architecture_and_composition.md)**: Game Mode FSM, component composition, and multi-tier inter-module communication.
* **[`08_table_reel_symbol_engine_architecture.md`](./08_table_reel_symbol_engine_architecture.md)**: Table, Reels, and Symbol Engine architecture, rendering loop, and pooling.
* **[`09_reactive_data_flow_and_reconnection_architecture.md`](./09_reactive_data_flow_and_reconnection_architecture.md)**: Reactive data pipeline, packet ingestion, key mapping, and reconnection hydration.
* **[`10_script_executor_and_writer_command_pipeline.md`](./10_script_executor_and_writer_command_pipeline.md)**: Script Executor, Writer generation, command synthesis, and Promise execution pipeline.
* **[`11_win_evaluation_payline_and_celebration_hierarchy.md`](./11_win_evaluation_payline_and_celebration_hierarchy.md)**: Win evaluation tiers, celebration hierarchy (Win Ratios, line cycling, and cutscenes).
* **[`12_audio_choreography_and_sound_pipeline.md`](./12_audio_choreography_and_sound_pipeline.md)**: Slot audio choreography (BGM ducking, spin sound loops, near-win tension, and coin rollups).
* **[`13_scene_graph_prefabs_and_packaging_conventions.md`](./13_scene_graph_prefabs_and_packaging_conventions.md)**: Standard Scene Graph hierarchy, prefab breakdown, and project directory structure.
* **[`14_guide_how_to_create_and_setup_new_module.md`](./14_guide_how_to_create_and_setup_new_module.md)**: End-to-End Guide: How to Create and Setup a New Module from Scratch.
* **[`15_portrait_mobile_ui_architecture.md`](./15_portrait_mobile_ui_architecture.md)**: Portrait Mobile UI Architecture, Thumb Zones, and Bottom-Sheet Drawers.
* **[`16_pooling_and_memory_optimization_architecture.md`](./16_pooling_and_memory_optimization_architecture.md)**: Zero-Allocation Pooling Architecture and Garbage Collection prevention.
* **[`17_cross_platform_compatibility_and_viewport_adaptation.md`](./17_cross_platform_compatibility_and_viewport_adaptation.md)**: Cross-Platform Compatibility, Viewport Adaptation, and Safe Area Insets.
* **[`18_audio_engine_dual_driver_architecture.md`](./18_audio_engine_dual_driver_architecture.md)**: Dual Audio Driver Engine (Howler.js WebAudio vs Cocos Native Audio).

---

## 🔬 2. Master Subsystem Deep-Dives

### 🎮 A. [Game Mode Subsystem](../systems/01_game_mode_system/00_index.md)
FSM concepts, 5 standard mode types, component anatomy, 4 communication channels, mode transition lifecycle, Bonus pick-and-click, and Fortune Wheel physics.

### 🎰 B. [Table & Symbol Engine](../systems/02_table_reel_symbol_engine/00_index.md)
7-part Table engine, 2D matrix coordinate math, buffer rows, Z-index sorting, mega symbols, zero-allocation pooling.

### 🔄 C. [Reactive Data System](../systems/03_reactive_data_system/00_index.md)
Server packet ingestion pipeline, key normalization (`mapNewKeys`), state immutability & deep-cloning, `isResume` session hydration.

### 📜 D. [Script Execution Pipeline](../systems/04_script_execution_pipeline/00_index.md)
3-tier Scripting Triad (Director-Writer-Executor), command synthesis, async Promise chaining, Turbo / FTR fast stopping.

### ⚡ E. [Payline & Win Presentation System](../systems/05_payline_and_win_presentation_system/00_index.md)
4 payline modes (Lines/AllWays/Cluster/ScatterPay), 2-stage presentation lifecycle, Component Quad & 4 rendering layers.

### 🌊 F. [Cascade & Avalanche Engine](../systems/06_cascade_and_avalanche_system/00_index.md)
Deterministic elimination mapping, downward gravity drops with bounce easing, mega symbol offset math, 2-stage respin lifecycle.

### 🎆 G. [Cutscenes & Celebrations](../systems/07_cutscenes_and_celebration_system/00_index.md)
Centralized Map registry, Promise wrapping, dynamic multiplier escalation (Big->Mega->Super), touch-to-skip fast forwarding.

### 🎛️ H. [GUI Dashboard & Controls System](../systems/08_gui_dashboard_and_controls_system/00_index.md)
Master HUD orchestration, spin button state machines, bet calculation matrices, currency wallet isolation, trial play promotions.

### 📜 I. [Popups, History, Settings & Dialogs System](../systems/09_popups_history_settings_system/00_index.md)
Modal queue management, Bet & Jackpot History round replay reconstruction, SettingsPanel, and InfoPanel dynamic rulebooks.

### 📱 J. [Base Portrait Mobile UI Experience System](../systems/10_portrait_mobile_ui_experience_system/00_index.md)
Mobile portrait layout ergonomics, thumb zones, bottom-sheet sliding drawers, vertical paytable, and floating win tooltips.

### ⚙️ K. [Pooling, Compatibility & Utility Services System](../systems/11_pooling_compatibility_and_utility_services/00_index.md)
Zero-allocation object pooling triad, responsive canvas viewport adaptation, cover background aspect ratio fitting, and preloading routers.

### 🔊 L. [Dual Audio Engine & Sound Pipeline System](../systems/12_dual_audio_engine_and_sound_pipeline/00_index.md)
Dual audio driver backend (Howler WebAudio vs Cocos native), iOS mobile touch gesture unlock, and dynamic sound bank loading.
