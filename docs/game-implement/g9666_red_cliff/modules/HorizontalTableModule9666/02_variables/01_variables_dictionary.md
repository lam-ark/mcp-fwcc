---
id: "game-implement:9666:module:HorizontalTableModule9666:variables"
title: "HorizontalTableModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "HorizontalTableModule9666", "horizontal_table_module9666", "variables", "fields", "properties"]
---

# 📋 `HorizontalTableModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `_stackWildLandedPromise` | `private` | `Promise<void>` | `null` | Runtime state tracking `_stackWildLandedPromise` in `HorizontalTableModule9666`. |
| **13** | `_pendingStopPromise` | `private` | `Promise<void> | null` | `null` | Runtime state tracking `_pendingStopPromise` in `HorizontalTableModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `HorizontalTableModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
