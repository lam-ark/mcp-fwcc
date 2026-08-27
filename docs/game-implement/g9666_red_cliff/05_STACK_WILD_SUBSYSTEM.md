---
id: "game-implement:9666:mechanics:stack_wild_subsystem"
title: "Red Cliff (g9666) Stack Wild Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "StackWildModuleData", "stack_wild", "expanding_wild"]
---

# 🌲 Red Cliff (g9666) Stack Wild Subsystem

---

## 📚 Detailed Documentation Sub-chapters

Comprehensive technical documentation for the Stack Wild (Expanding Wild) Subsystem in Red Cliff 9666 is organized within:
[`05_stack_wild_subsystem/`](./05_stack_wild_subsystem/)

1. **[00. Step-by-Step Task & Debugging Checklist](./05_stack_wild_subsystem/00_TASK_LIST_STACK_WILD.md)**: Verification checklist, diagnostic quick-fix table, and edge-case verification steps.
2. **[01. Stack Wild Architecture & Data Model](./05_stack_wild_subsystem/01_stack_wild_architecture_and_data.md)**: `K2` symbol trigger on top reel, component responsibilities (`StackWildModule`, `StackWildModuleData`, `StackWildModuleConfig`).
3. **[02. Column Expansion & Spine Effects](./05_stack_wild_subsystem/02_expansion_and_spine_column_effects.md)**: Column flame template lifecycle (`in`, `loop`, `out`), row-by-row symbol reveal, sibling order management, and Fast/Turbo adaptations.
4. **[03. Synchronization & Event Bus](./05_stack_wild_subsystem/03_synchronization_and_events.md)**: Event timing (`STACK_WILD_LANDED`, `STACK_WILD_STOP`, `SYNC_STACK_WILD_TO_TABLE`), table stop handshake.
5. **[04. Stack Wild Edge Cases & Gotchas](./05_stack_wild_subsystem/04_edge_cases_and_gotchas.md)**: Spine CompleteListener resolution on fast stop, symbol layer inversion, cleanup on state exit.
