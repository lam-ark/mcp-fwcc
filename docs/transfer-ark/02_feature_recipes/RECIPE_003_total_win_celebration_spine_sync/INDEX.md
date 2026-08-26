---
id: "transfer-ark:feature:total_win_celebration:index"
title: "Recipe: Total Win Celebration with 3-Stage Spine (in/loop/out), Bone Sync & Touch Skip"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "BaseCutscene", "CutsceneController", "FreeGameDirectorModule"]
tags: ["total_win", "free_game", "celebration", "spine_sync", "bone_tracking", "state_machine", "recipe", "index"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 🏅 RECIPE-003: Total Win Celebration with 3-Stage Spine Sync (in/loop/out)

> **Location**: `mcp/mcp-fwcc/docs/transfer-ark/02_feature_recipes/RECIPE_003_total_win_celebration_spine_sync/`  
> **Status**: Production Verified  
> **Target Module**: `TotalWinModule9666` extending `TotalWinModule`

---

## 📚 Table of Contents

| Section | Document | Description |
| :--- | :--- | :--- |
| **01** | [**01. Overview & Feature Requirements**](./01_overview_and_problem.md) | Role at Free Game / Bonus conclusion, visual choreography & SDK discrepancy |
| **02** | [**02. State Machine & Lifecycle Flow**](./02_state_machine_and_lifecycle.md) | 4-state lifecycle, sequence diagram, `in` $\rightarrow$ `loop` $\rightarrow$ `out` flow, touch skip & debounce |
| **03** | [**03. Spine Bone Tracking & Sync**](./03_spine_bone_tracking_sync.md) | Real-time `slot_money` bone world-to-local coordinate transformation |
| **04** | [**04. Full Implementation Code**](./04_full_implementation_code.md) | Complete production TypeScript source code for `TotalWinModule9666` |
| **05** | [**05. Gotchas & Edge Cases**](./05_gotchas_and_edge_cases.md) | Out-animation interrupt, track listener cleanup, world transform timing, BGM restore |
| **06** | [**06. Reusability & Setup Guide**](./06_reusability_and_setup_guide.md) | Step-by-step checklist for porting Total Win popup to any new slot game |
