---
id: "cc_slot_module:SlotGameSettings:events:scoped_module_events"
title: "SlotGameSettings Scoped Events Specification"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotGameSettings Scoped Events Specification

## 1. Event Behavior Overview

`SlotGameSettings` is a pure TypeScript data class and does not directly emit scoped node events. Changes to `SlotGameSettings` properties are typically accompanied by global notifications dispatched by UI components (e.g. `TurboButton` emitting toast messages).
