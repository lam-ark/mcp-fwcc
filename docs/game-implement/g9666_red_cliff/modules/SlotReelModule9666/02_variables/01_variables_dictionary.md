---
id: "game-implement:9666:module:SlotReelModule9666:variables"
title: "SlotReelModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotReelModule9666", "slot_reel_module9666", "variables", "fields", "properties"]
---

# 📋 `SlotReelModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| *None* | *No member variables declared directly* | `-` | `-` | `-` | Pure stateless helper |

---

## 2. State Mutation Guardrails

All variables in `SlotReelModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
