---
id: "game-implement:9666:module:SlotTableNearWinRefillModule:variables"
title: "SlotTableNearWinRefillModule Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableNearWinRefillModule", "slot_table_near_win_refill_module", "variables", "fields", "properties"]
---

# 📋 `SlotTableNearWinRefillModule` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `useSpine` | `public` | `boolean` | `@property` | Runtime state tracking `useSpine` in `SlotTableNearWinRefillModule`. |
| **11** | `animationName` | `public` | `string` | `@property` | Runtime state tracking `animationName` in `SlotTableNearWinRefillModule`. |
| **12** | `startAtScatterCount` | `public` | `number` | `@property` | Runtime state tracking `startAtScatterCount` in `SlotTableNearWinRefillModule`. |
| **13** | `stopAtScatterCount` | `public` | `number` | `@property` | Runtime state tracking `stopAtScatterCount` in `SlotTableNearWinRefillModule`. |
| **14** | `startAtBonusCount` | `public` | `number` | `@property` | Runtime state tracking `startAtBonusCount` in `SlotTableNearWinRefillModule`. |
| **15** | `stopAtBonusCount` | `public` | `number` | `@property` | Runtime state tracking `stopAtBonusCount` in `SlotTableNearWinRefillModule`. |
| **16** | `startAtJackpotCount` | `public` | `number` | `@property` | Runtime state tracking `startAtJackpotCount` in `SlotTableNearWinRefillModule`. |
| **17** | `stopAtJackpotCount` | `public` | `number` | `@property` | Runtime state tracking `stopAtJackpotCount` in `SlotTableNearWinRefillModule`. |
| **18** | `isSkipNearWinTurbo` | `public` | `boolean` | `@property` | Runtime state tracking `isSkipNearWinTurbo` in `SlotTableNearWinRefillModule`. |
| **19** | `soundNearWinId` | `public` | `string` | `@property` | Runtime state tracking `soundNearWinId` in `SlotTableNearWinRefillModule`. |
| **21** | `scatterSymbol` | `public` | `string` | `@property` | Runtime state tracking `scatterSymbol` in `SlotTableNearWinRefillModule`. |
| **22** | `bonusSymbol` | `public` | `string` | `@property` | Runtime state tracking `bonusSymbol` in `SlotTableNearWinRefillModule`. |
| **23** | `jackpotSymbol` | `public` | `string` | `@property` | Runtime state tracking `jackpotSymbol` in `SlotTableNearWinRefillModule`. |
| **25** | `nearWinDelayTime` | `public` | `number` | `@property` | Runtime state tracking `nearWinDelayTime` in `SlotTableNearWinRefillModule`. |
| **26** | `nearWinDelayTimeLastCol` | `public` | `number` | `@property` | Runtime state tracking `nearWinDelayTimeLastCol` in `SlotTableNearWinRefillModule`. |
| **28** | `gameSettings` | `injected` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Runtime state tracking `gameSettings` in `SlotTableNearWinRefillModule`. |
| **31** | `_isSkipEffect` | `protected` | `boolean` | `false` | Runtime state tracking `_isSkipEffect` in `SlotTableNearWinRefillModule`. |
| **32** | `_countScatter` | `protected` | `number` | `0` | Runtime state tracking `_countScatter` in `SlotTableNearWinRefillModule`. |
| **33** | `lastScatterCount` | `protected` | `number` | `0` | Runtime state tracking `lastScatterCount` in `SlotTableNearWinRefillModule`. |
| **34** | `_countBonus` | `protected` | `number` | `0` | Runtime state tracking `_countBonus` in `SlotTableNearWinRefillModule`. |
| **35** | `_countJp` | `protected` | `number` | `0` | Runtime state tracking `_countJp` in `SlotTableNearWinRefillModule`. |
| **36** | `_nearWinData` | `protected` | `any[]` | `[]` | Runtime state tracking `_nearWinData` in `SlotTableNearWinRefillModule`. |
| **37** | `_effectInstances` | `protected` | `cc.Node[]` | `[]` | Runtime state tracking `_effectInstances` in `SlotTableNearWinRefillModule`. |
| **38** | `_nearWinAnim` | `protected` | `any[]` | `[]` | Runtime state tracking `_nearWinAnim` in `SlotTableNearWinRefillModule`. |
| **39** | `_columnDelays` | `protected` | `number[]` | `[]` | Runtime state tracking `_columnDelays` in `SlotTableNearWinRefillModule`. |
| **40** | `_activeNearWinCols` | `protected` | `Set<number>` | `new Set()` | Runtime state tracking `_activeNearWinCols` in `SlotTableNearWinRefillModule`. |
| **41** | `_instancesCreated` | `protected` | `boolean` | `false` | Runtime state tracking `_instancesCreated` in `SlotTableNearWinRefillModule`. |

---

## 2. State Mutation Guardrails

All variables in `SlotTableNearWinRefillModule` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
