---
id: "game-implement:9666:module:MockRuntime:variables"
title: "MockRuntime Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockRuntime", "mock_runtime", "variables", "fields", "properties"]
---

# 📋 `MockRuntime` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **3** | `listeners` | `private` | `Map<string, Set<OfflineListener>>` | `new Map()` | Runtime state tracking `listeners` in `MockRuntime`. |
| **38** | `store` | `private` | `Record<string, any>` | `{}` | Runtime state tracking `store` in `MockRuntime`. |

---

## 2. State Mutation Guardrails

All variables in `MockRuntime` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
