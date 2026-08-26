---
id: "game-implement:9666:module:SlotSymbolModule9666:variables"
title: "SlotSymbolModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "slot_symbol_module9666", "variables", "fields", "properties"]
---

# 📋 `SlotSymbolModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `multiplierLabel` | `private` | `cc.Label` | `@property` | Runtime state tracking `multiplierLabel` in `SlotSymbolModule9666`. |
| **39** | `_debugLabel` | `private` | `cc.Label` | `null` | Runtime state tracking `_debugLabel` in `SlotSymbolModule9666`. |
| **40** | `_currentAnim` | `private` | `string` | `''` | Runtime state tracking `_currentAnim` in `SlotSymbolModule9666`. |
| **41** | `_currentSkin` | `private` | `string` | `''` | Runtime state tracking `_currentSkin` in `SlotSymbolModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `SlotSymbolModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
