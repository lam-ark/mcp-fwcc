---
id: "game-implement:9666:module:NetworkPrewarm9666:variables"
title: "NetworkPrewarm9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NetworkPrewarm9666", "network_prewarm9666", "variables", "fields", "properties"]
---

# 📋 `NetworkPrewarm9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **17** | `authFailedPanel` | `public` | `cc.Node` | `@property` | Runtime state tracking `authFailedPanel` in `NetworkPrewarm9666`. |

---

## 2. State Mutation Guardrails

All variables in `NetworkPrewarm9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
