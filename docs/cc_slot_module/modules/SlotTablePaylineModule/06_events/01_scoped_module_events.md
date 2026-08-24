---
id: "cc_slot_module:SlotTablePaylineModule:events:scoped_module_events"
title: "SlotTablePaylineModule Scoped Module & Internal Bus Events"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "events", "scoped_events", "payLineEmitter"]
---

# 📡 SlotTablePaylineModule Scoped Module & Internal Bus Events

---

## 1. Scoped `moduleEvent` Subscriptions

| Event Topic | Direction | Source / Target | Purpose |
| :--- | :--- | :--- | :--- |
| **`SETUP_PAYLINES`** | Listens To | Mode Director / Writer | Triggers `onSetupPaylines()`, reading data and broadcasting `PAYLINE_SET_DATA`. |
| **`TABLE_FORMAT_CHANGED`** | Listens To | Expanding Reel Modules | Triggers `onTableFormatChanged()` to update grid dimensions in `PaylineConfig`. |

---

## 2. Internal `payLineEmitter` Broadcast Events

The `payLineEmitter` (`cc.EventTarget`) isolates communication with child payline visualization components:

| Event Topic | Payload | Emitted To | Purpose |
| :--- | :--- | :--- | :--- |
| **`PAYLINE_SET_DATA`** | `{ matrix, payLines, winSymbols, jackpotPayline }` | `BasePaylineComponent[]` | Updates child components with parsed winning data and triggers Stage 1 presentation. |
| **`PAYLINE_SHOW_ALL`** | None | `PaylineSymbolModule`, `PaylineLineModule` | Renders all winning highlights simultaneously. |
| **`PAYLINE_SHOW_ITEM`**| `{ payLine, index }` | `PaylineSymbolModule`, `PaylineWinFrameModule` | Isolates a single payline during cyclic schedule playback. |
