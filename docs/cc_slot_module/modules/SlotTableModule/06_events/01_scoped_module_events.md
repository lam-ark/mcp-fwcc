---
id: "cc_slot_module:SlotTableModule:events:scoped_module_events"
title: "SlotTableModule Scoped Module Events"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotTableModule Scoped Module Events

## 1. Scoped Events (`this.moduleEvent` & `this.node.on`)

| Event Name | Bus / Source | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`TABLE_INIT`** | `moduleEvent` | Listens To | None | Triggers `initTable()`. |
| **`TABLE_START_SPIN`** | `moduleEvent` | Listens To | None | Triggers `startSpin()`. |
| **`TABLE_STOP_SPIN`** | `moduleEvent` | Listens To | `matrix?: string[][]` | Triggers `stopSpin()`. |
| **`TABLE_FAST_STOP`** | `moduleEvent` | Listens To | None | Triggers `fastStop()`. |
| **`SYNC_TABLE`** | `moduleEvent` | Listens To | `matrix, gameMode` | Triggers `syncTable()`. |
| **`SHOW_BEAUTY_MATRIX`**| `moduleEvent` | Listens To | None | Triggers `showBeautyMatrix()`. |
| **`REEL_STOPPED`** | `moduleEvent` | Emitted | `reelIndex: number, symbols: cc.Node[]` | Notifies payline & win systems. |
| **`START_SPIN`** | `this.node` | Emitted | None | Signals child audio/VFX to start. |
| **`RESET_NEARWIN`** | `this.node` | Emitted | None | Resets anticipation borders. |
| **`SETUP_NEARWIN`** | `this.node` | Emitted | `{ matrix, isTurboActive, context }` | Evaluates Scatter anticipation. |
| **`REEL_STOP_SOUND`** | `this.node` | Emitted | `{ reelIndex, context, matrix }` | Triggers column stop SFX. |
