---
id: "cc_slot_module:SlotGameSettings:events:global_event_bus"
title: "SlotGameSettings Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "events", "global_event_bus", "UI_TOAST_ENUM"]
---

# 🌐 SlotGameSettings Global Event Bus Integration

## 1. Associated Global Event Topics

When `SlotGameSettings` properties are updated by interactive UI elements, companion events are broadcast over the `eventManager` bus:

| Trigger Action | Global Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`isTurboActive = true`** | `GameUIEvents.SHOW_TOAST` | `UI_TOAST_ENUM.TURBO_ON` | Triggers "Turbo Mode Enabled" popup HUD toast banner. |
| **`isTurboActive = false`**| `GameUIEvents.SHOW_TOAST` | `UI_TOAST_ENUM.TURBO_OFF` | Triggers "Turbo Mode Disabled" popup HUD toast banner. |
| **`isAutoSpin` changed** | `GameUIEvents.UPDATE_AUTO_SPIN_STATE` | `{ isAutoSpin: boolean }` | Updates spin button visual states. |
