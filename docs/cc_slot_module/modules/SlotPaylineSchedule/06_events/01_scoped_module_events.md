---
id: "cc_slot_module:SlotPaylineSchedule:events:scoped_module_events"
title: "SlotPaylineSchedule Scoped & Emitter Events Specification"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "events", "scoped_events", "payLineEmitter"]
---

# 📡 SlotPaylineSchedule Scoped & Emitter Events Specification

---

## 1. Subscribed Scoped `moduleEvent` Steps (From Director/Writer)

| Event Name | Handler | Async Pipeline Blocking |
| :--- | :--- | :--- |
| `BLINK_ALL_PAYLINES` | `blinkAllPaylines` | YES (Blocks for `timelineConfig`) |
| `SHOW_ALL_PAYLINES` | `showAllPaylines` | NO (Starts background loop) |
| `SHOW_SCATTER_PAYLINE` | `onShowScatter` | YES (Blocks for `timelineConfig`) |
| `SHOW_BONUS_PAYLINE` | `onShowBonus` | YES (Blocks for `duration`) |
| `SHOW_JACKPOT_PAYLINE` | `onShowJackpot` | YES (Blocks for `duration`) |
| `CLEAR_PAYLINES` | `cleanUp` | NO |
| `STOP_PAYLINES` | `stopPaylines` | NO |

---

## 2. Emitted `payLineEmitter` Events (To Visual Followers)

| Event Name | Payload | Target |
| :--- | :--- | :--- |
| `PAYLINE_BLINK_ALL` | `{ blinkDuration }` | `PaylineSymbolModule`, `PaylineWinFrameModule`, `PaylineLineModule`, `PaylineNumberModule` |
| `PAYLINE_SHOW_LINE` | `(payline, duration)` | `PaylineSymbolModule`, `PaylineWinFrameModule`, `PaylineLineModule`, `PaylineNumberModule` |
| `PAYLINE_SHOW_SPECIAL_SYMBOL` | `(symbolId, duration)` | `PaylineSymbolModule` |
| `PAYLINE_STOP_ALL` | None | All payline followers |
| `PAYLINE_CLEAR` | None | All payline followers |
