---
id: "cc_slot_module:systems:payline:index"
title: "Payline & Win Presentation System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "payline", "win_presentation", "architecture", "index", "payline_types", "win_frames", "symbols"]
---

# ⚡ Payline & Win Presentation System Architecture Index

Welcome to the technical architecture guide on the **Payline Evaluation & Win Presentation System** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_payline_evaluation_and_types.md`](./01_payline_evaluation_and_types.md)**
   * Mathematical foundations of payout systems in `cc-common`.
   * Catalog of 4 core payline modes: `Lines` (Fixed 20-50 lines), `AllWays` (243 / 1024 / 4096 Ways), `Cluster` (Match-5+ adjacency), and `ScatterPay` (Anywhere pay).
   * Bidirectional evaluation: Win-Both-Ways Left-to-Right and Right-to-Left (`isRight`) parsing.

2. **[`02_two_stage_presentation_lifecycle.md`](./02_two_stage_presentation_lifecycle.md)**
   * The 2-stage presentation pipeline:
     - **Stage 1 (Show All Lines)**: Fast concurrent blink, all winning symbols animated, line vector drawing, Big Win triggers.
     - **Stage 2 (Sequential Cycling)**: Periodic single-line isolation controlled by `SlotPaylineSchedule`, individual payline payouts, and sound choreography.

3. **[`03_payline_component_quad_and_rendering_layers.md`](./03_payline_component_quad_and_rendering_layers.md)**
   * Architecture of the **Payline Component Quad**: `SlotTablePaylineModule` + `SlotTablePaylineData` + `PaylineConfig` + `SlotPaylineSchedule`.
   * 4 Visual Subsystems: `PaylineSymbolModule` (Spine Win + Dimming), `PaylineWinFrameModule` (Glowing Box Borders), `PaylineLineModule` (Connecting Lines), `PaylineNumberModule` (Side Index Numbers).
   * Z-ordering and mask-clipping avoidance strategies.

4. **[`04_payline_event_bus_and_coordination.md`](./04_payline_event_bus_and_coordination.md)**
   * Internal `payLineEmitter` event bus topology.
   * Full event catalog: `PAYLINE_SET_DATA`, `PAYLINE_BLINK_ALL`, `PAYLINE_SHOW_LINE`, `SYMBOL_PLAY_ANIMATION_WIN`, `PAYLINE_CLEAR`.
   * Integration with `GameModeDirectorModule` and `GameModeWriterModule` (`SETUP_PAYLINES`).

5. **[`05_custom_payline_rules_and_game_creation.md`](./05_custom_payline_rules_and_game_creation.md)**
   * Step-by-step developer checklist for configuring paylines in new games.
   * Handling Expanding Reels and Dynamic Grid Formats (`TABLE_FORMAT_CHANGED`).
   * Production case study (Red Cliff 243 AllWays with Wild Multiplier frames).
