---
id: "game-implement:9666:mechanics:multiplier_subsystem"
title: "Red Cliff (g9666) Multiplier Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "CollectMultiModule9666", "multiplier_wild", "multiplier"]
---

# ⚔️ Red Cliff (g9666) Multiplier Subsystem

---

## 📚 Detailed Documentation Sub-chapters

Comprehensive technical documentation for the Multiplier Subsystem in Red Cliff 9666 is organized within:
[`04_multiplier_subsystem/`](./04_multiplier_subsystem/)

1. **[00. Step-by-Step Task & Debugging Checklist](./04_multiplier_subsystem/00_TASK_LIST_MULTIPLIER.md)**: Verification checklist, diagnostic quick-fix guide, and edge-case verification steps.
2. **[01. Multiplier Wild Lifecycle & State Machine](./04_multiplier_subsystem/01_multiplier_wild_lifecycle.md)**: `K1-x` code format, symbol lifecycle, multiplier parsing, and Spine animation tracks (`appear`, `idle_multi`, `coming_win_appear`, `transition_multi`).
3. **[02. Multiplier Badge Display & Collection System](./04_multiplier_subsystem/02_badge_display_and_collection.md)**: Pooling particle system `CollectMultiItem9666`, Normal Game base multiplier deduction formula, Turbo speed decorator handling.
4. **[03. Global Multiplier UI & Synchronization](./04_multiplier_subsystem/03_global_multiplier_ui_and_sync.md)**: `MultiplierModule9666` structure, server key mapping (`pMul`, `mul`, `pMulF`, `mulF`), scale punch animation, and base multipliers by game mode (Normal = x1, Free = x2).
5. **[04. Reload & Reconnect Flow for Multiplier Wilds](./04_multiplier_subsystem/04_reload_reconnect_and_resume_flow.md)**: Reload/Reconnect standard spec vs codebase analysis (No combine vs Has combine, animation skip, HUD fast-forward, and combine replay).
6. **[05. Multiplier Subsystem Edge Cases & Gotchas](./04_multiplier_subsystem/05_edge_cases_and_gotchas.md)**: Edge cases and gotchas (Orphaned badge on pooled symbols, Turbo mode async mismatch, Free Game Resume synchronization).
