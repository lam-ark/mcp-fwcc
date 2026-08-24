---
id: "cc_slot_module:SlotPaylineSchedule:methods:index"
title: "SlotPaylineSchedule Methods Catalog Index"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "index"]
---

# 📚 SlotPaylineSchedule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`setConfig`](./setConfig.md)** | `protected` | `void` | Caches `TIMELINE_CONFIG` duration. |
| **[`registerPaylineEvents`](./registerPaylineEvents.md)** | `protected` | `void` | Subscribes to `moduleEvent` and `payLineEmitter`. |
| **[`setData`](./setData.md)** | `protected` | `void` | Ingests `payLines` and `jackpotPayline`. |
| **[`cleanUp`](./cleanUp.md)** | `protected` | `void` | Stops schedule and emits `PAYLINE_CLEAR`. |
| **[`stopPaylines`](./stopPaylines.md)** | `protected` | `void` | Stops schedule and emits `PAYLINE_STOP_ALL`. |
| **[`showAllPaylines`](./showAllPaylines.md)** | `protected` | `void` | Builds and launches infinite looping `cc.tween` sequence. |
| **[`blinkAllPaylines`](./blinkAllPaylines.md)** | `protected` | `Promise<void>` | Stage 1 async handler firing `PAYLINE_BLINK_ALL`. |
| **[`stopSchedule`](./stopSchedule.md)** | `protected` | `void` | Halts `tweenSchedule` and hides HUD payline info. |
| **[`onShowScatter`](./onShowScatter.md)** | `protected` | `Promise<void>` | Dedicated async presentation for Scatter wins. |
| **[`onShowBonus`](./onShowBonus.md)** | `protected` | `Promise<void>` | Dedicated async presentation for Bonus wins. |
| **[`onShowJackpot`](./onShowJackpot.md)** | `protected` | `Promise<void>` | Routes to jackpot line or win symbols presentation. |
| **[`showJackpotLine`](./showJackpotLine.md)** | `protected` | `Promise<void>` | Displays fixed jackpot line track. |
| **[`showJackpotWinSymbols`](./showJackpotWinSymbols.md)**| `protected` | `Promise<void>` | Displays jackpot symbol highlights. |
| **[`showPayline`](./showPayline.md)** | `protected` | `void` | Dispatches `ON_SHOW_PAYLINE_INFO` and `PAYLINE_SHOW_LINE`. |
