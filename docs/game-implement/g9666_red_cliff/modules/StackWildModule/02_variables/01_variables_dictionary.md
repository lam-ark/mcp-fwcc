---
id: "game-implement:9666:module:StackWildModule:variables"
title: "StackWildModule Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "stack_wild_module", "variables", "fields", "properties"]
---

# 📋 `StackWildModule` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **16** | `data` | `protected` | `StackWildModuleData` | `undefined` | Runtime state tracking `data` in `StackWildModule`. |
| **17** | `config` | `protected` | `StackWildModuleConfig` | `undefined` | Runtime state tracking `config` in `StackWildModule`. |
| **19** | `_columnEffectInstances` | `private` | `Map<number, sp.Skeleton>` | `new Map()` | Runtime state tracking `_columnEffectInstances` in `StackWildModule`. |
| **20** | `_stackWildReels` | `private` | `Map<number, cc.Node[]>` | `new Map()` | Runtime state tracking `_stackWildReels` in `StackWildModule`. |
| **21** | `_isActive` | `private` | `boolean` | `false` | Runtime state tracking `_isActive` in `StackWildModule`. |
| **22** | `_isSkipped` | `private` | `boolean` | `false` | Runtime state tracking `_isSkipped` in `StackWildModule`. |
| **23** | `_sleepResolve` | `private` | `Function` | `null` | Runtime state tracking `_sleepResolve` in `StackWildModule`. |
| **24** | `_landedPromise` | `private` | `Promise<void>` | `null` | Runtime state tracking `_landedPromise` in `StackWildModule`. |
| **25** | `_pendingInResolvers` | `private` | `Function[]` | `[]` | Runtime state tracking `_pendingInResolvers` in `StackWildModule`. |
| **27** | `gameSettings` | `injected` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Runtime state tracking `gameSettings` in `StackWildModule`. |

---

## 2. State Mutation Guardrails

All variables in `StackWildModule` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
