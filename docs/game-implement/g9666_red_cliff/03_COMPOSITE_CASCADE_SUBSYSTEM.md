---
id: "game-implement:9666:mechanics:composite_cascade"
title: "Red Cliff (g9666) Composite Dual Cascade Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "dual_cascade", "horizontal_reel", "vertical_cascade"]
---

# 🌊 Red Cliff (g9666) Composite Dual Cascade Subsystem

---

## 📚 Detailed Documentation Sub-chapters

Comprehensive technical documentation for the Composite Dual Cascade Subsystem in Red Cliff 9666 is organized within:
[`03_composite_cascade/`](./03_composite_cascade/)

1. **[00. Step-by-Step Task & Debugging Checklist](./03_composite_cascade/00_TASK_LIST_COMPOSITE_CASCADE.md)**: Exhaustive step-by-step checklist, verification matrix, and diagnostic quick-fix guide.
2. **[01. Architecture & Data Flow](./03_composite_cascade/01_architecture_and_data_flow.md)**: Dual Grid layout, 1D array splitting algorithm in `9666TableUtil.ts`, Mega symbol format conversions.
3. **[02. Vertical Cascade Mechanics & Refill](./03_composite_cascade/02_vertical_cascade_mechanics.md)**: `VerticalCascadeModule9666`, Near-Win column delay staggering, landing bounce physics calculation (`DELTA_BOUNCING = 3px`).
4. **[03. Horizontal Top Reel Cascade Mechanics](./03_composite_cascade/03_horizontal_cascade_mechanics.md)**: Top 4-symbol horizontal track (`[4, 9, 14, 19]`), slide animation, and `STACK_WILD_LANDED` synchronization.
5. **[04. Synchronization & Event Bus Pipeline](./03_composite_cascade/04_synchronization_and_events.md)**: Complete event map (`TABLE_STOP_SPIN_TOP`, `SETUP_NEARWIN_REFILL`, `DROP_NEARWIN_REFILL`, `TABLE_FAST_STOP`).
6. **[05. Edge Cases & Gotchas](./03_composite_cascade/05_edge_cases_and_gotchas.md)**: Stale Mega format resolution, Fast-Stop race conditions, Near-Win timeouts, and Z-index masking.
