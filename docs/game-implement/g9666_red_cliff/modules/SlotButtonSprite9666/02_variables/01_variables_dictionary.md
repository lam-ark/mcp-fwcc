---
id: "game-implement:9666:module:SlotButtonSprite9666:variables"
title: "SlotButtonSprite9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotButtonSprite9666", "slot_button_sprite9666", "variables", "fields", "properties"]
---

# 📋 `SlotButtonSprite9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **10** | `spinning` | `public` | `cc.SpriteFrame` | `@property` | Runtime state tracking `spinning` in `SlotButtonSprite9666`. |
| **13** | `spinningDisable` | `public` | `cc.SpriteFrame` | `@property` | Runtime state tracking `spinningDisable` in `SlotButtonSprite9666`. |
| **16** | `maxSpeed` | `public` | `number` | `@property` | Runtime state tracking `maxSpeed` in `SlotButtonSprite9666`. |
| **19** | `acceleration` | `public` | `number` | `@property` | Runtime state tracking `acceleration` in `SlotButtonSprite9666`. |
| **22** | `clockwise` | `public` | `boolean` | `@property` | Runtime state tracking `clockwise` in `SlotButtonSprite9666`. |
| **25** | `totalReels` | `public` | `number` | `@property` | Runtime state tracking `totalReels` in `SlotButtonSprite9666`. |
| **27** | `_currentSpeed` | `private` | `number` | `0` | Runtime state tracking `_currentSpeed` in `SlotButtonSprite9666`. |
| **28** | `_targetSpeed` | `private` | `number` | `0` | Runtime state tracking `_targetSpeed` in `SlotButtonSprite9666`. |
| **29** | `_remainingReels` | `private` | `number` | `0` | Runtime state tracking `_remainingReels` in `SlotButtonSprite9666`. |
| **30** | `_spinActive` | `private` | `boolean` | `false` | Runtime state tracking `_spinActive` in `SlotButtonSprite9666`. |
| **31** | `_reelListenerBound` | `private` | `boolean` | `false` | Runtime state tracking `_reelListenerBound` in `SlotButtonSprite9666`. |

---

## 2. State Mutation Guardrails

All variables in `SlotButtonSprite9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
