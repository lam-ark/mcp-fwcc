---
id: "game-implement:9666:module:CombineEffectModule9666:variables"
title: "CombineEffectModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CombineEffectModule9666", "combine_effect_module9666", "variables", "fields", "properties"]
---

# 📋 `CombineEffectModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **18** | `gameSettings` | `injected` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Runtime state tracking `gameSettings` in `CombineEffectModule9666`. |
| **27** | `_activeEffects` | `private` | `ActiveEffect[]` | `[]` | Runtime state tracking `_activeEffects` in `CombineEffectModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `CombineEffectModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
