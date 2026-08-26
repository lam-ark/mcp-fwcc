---
id: "transfer-ark:feature:multi_milestone_big_win:index"
title: "Recipe: Multi-Milestone Big Win Celebration with Dynamic Spine Sync & Touch Skip"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "BaseCutscene", "CutsceneController", "GameModeDirectorModule"]
tags: ["big_win", "milestones", "spine_sync", "bone_tracking", "money_tween", "touch_skip", "debounce", "recipe", "index"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 🏆 RECIPE-002: Multi-Milestone Big Win Celebration with Spine Bone Sync

> **Location**: `mcp/mcp-fwcc/docs/transfer-ark/02_feature_recipes/RECIPE_002_multi_milestone_big_win_celebration_spine_sync/`  
> **Status**: Production Verified  
> **Target Module**: `WinEffectModule9666` extending `WinEffectModule`

---

## 📚 Table of Contents

| Section | Document | Description |
| :--- | :--- | :--- |
| **01** | [**01. Overview & Business Requirements**](./01_overview_and_problem.md) | Business goals, milestone tiers, SDK discrepancy & UX expectations |
| **02** | [**02. State Machine & Lifecycle Flow**](./02_state_machine_and_lifecycle.md) | 4-state lifecycle, sequence diagram, touch skip & 1s debounce logic |
| **03** | [**03. Spine Bone Tracking & Sync**](./03_spine_bone_tracking_sync.md) | Real-time `slot_money` bone world-to-local coordinate transformation |
| **04** | [**04. Turbo & Fast-To-Result Fallback**](./04_turbo_and_fast_to_result.md) | SDK-compliant 1s particle burst without blocking game transitions |
| **05** | [**05. Full Implementation Code**](./05_full_implementation_code.md) | Complete production TypeScript source code for `WinEffectModule9666` |
| **06** | [**06. Gotchas & Edge Cases**](./06_gotchas_and_edge_cases.md) | World transform timing, animation callback teardown, click throttle |
| **07** | [**07. Reusability & Setup Guide**](./07_reusability_and_setup_guide.md) | Step-by-step checklist for porting to any new slot game |
