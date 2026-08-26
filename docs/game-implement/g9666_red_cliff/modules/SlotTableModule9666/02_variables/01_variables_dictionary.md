---
id: "game-implement:9666:module:SlotTableModule9666:variables"
title: "SlotTableModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableModule9666", "slot_table_module9666", "variables", "fields", "properties"]
---

# 📋 `SlotTableModule9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **13** | `_pendingStopPromise` | `private` | `Promise<void> | null` | `null` | Runtime state tracking `_pendingStopPromise` in `SlotTableModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `SlotTableModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
