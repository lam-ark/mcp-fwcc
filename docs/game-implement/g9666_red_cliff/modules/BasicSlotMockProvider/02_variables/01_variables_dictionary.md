---
id: "game-implement:9666:module:BasicSlotMockProvider:variables"
title: "BasicSlotMockProvider Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BasicSlotMockProvider", "basic_slot_mock_provider", "variables", "fields", "properties"]
---

# 📋 `BasicSlotMockProvider` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| *None* | *No member variables declared directly* | `-` | `-` | `-` | Pure stateless helper |

---

## 2. State Mutation Guardrails

All variables in `BasicSlotMockProvider` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
