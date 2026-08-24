---
id: "cc_slot_module:TotalWinModule:methods:index"
title: "TotalWinModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "index"]
---

# 📚 TotalWinModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Resolves label and particle component references. |
| **[`enter`](./enter.md)** | `public` | `void` | Initiates values, particle system, and begins money count-up. |
| **[`initValue`](./initValue.md)** | `public` | `void` | Resets counters, fetches total win, and arms quick-show lock timer. |
| **[`startUpdateWinAmount`](./startUpdateWinAmount.md)**| `public` | `void` | Drives 10s count-up tween via `moneyTween.runNumber`. |
| **[`getTotalWinAmount`](./getTotalWinAmount.md)**| `public` | `number` | Ingests win from payload or `dataStore.getWinAmountPS()`. |
| **[`startParticle`](./startParticle.md)** | `public` | `void` | Resets and triggers coin particle emissions. |
| **[`stopParticle`](./stopParticle.md)** | `public` | `void` | Stops coin particle emissions. |
| **[`onClick`](./onClick.md)** | `public` | `void` | Fast-forwards money count-up to an accelerated 1s finish on tap. |
| **[`finish`](./finish.md)** | `public` | `void` | Formats final string and schedules modal exit. |
| **[`bindQuickShow`](./bindQuickShow.md)** | `public` | `void` | Unlocks `_skippable` after `delayShowTime`. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Aborts active tweens and stops node actions. |
