---
id: "game-implement:9666:module:CollectMultiModule9666:variables"
title: "CollectMultiModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectMultiModule9666", "collect_multi_module9666", "variables", "fields", "properties"]
---

# 📋 `CollectMultiModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **16** | `gameSettings` | `injected` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Runtime state tracking `gameSettings` in `CollectMultiModule9666`. |
| **29** | `_dataModule` | `private` | `CollectMultiModuleData` | `null` | Runtime state tracking `_dataModule` in `CollectMultiModule9666`. |
| **30** | `_config` | `private` | `CollectMultiModuleConfig` | `null` | Runtime state tracking `_config` in `CollectMultiModule9666`. |
| **31** | `_isCollecting` | `private` | `boolean` | `false` | Runtime state tracking `_isCollecting` in `CollectMultiModule9666`. |
| **33** | `_prefix` | `private` | `string` | `"x"` | Runtime state tracking `_prefix` in `CollectMultiModule9666`. |
| **34** | `_items` | `private` | `CollectMultiItem9666[]` | `[]` | Runtime state tracking `_items` in `CollectMultiModule9666`. |
| **35** | `_currentMultiplier` | `private` | `number` | `1` | Runtime state tracking `_currentMultiplier` in `CollectMultiModule9666`. |
| **36** | `_activeSpeedActions` | `private` | `any[]` | `[]` | Runtime state tracking `_activeSpeedActions` in `CollectMultiModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `CollectMultiModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
