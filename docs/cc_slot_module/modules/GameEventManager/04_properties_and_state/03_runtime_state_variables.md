---
id: "cc_slot_module:GameEventManager:properties:runtime_state_variables"
title: "GameEventManager Runtime State Variables"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "properties", "runtime_state", "variables"]
---

# 💾 GameEventManager Runtime State Variables

## 1. Internal Variables Specification

| Variable Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`events`** | `Record<string, EventEntry[]>` | `{}` | Hash table mapping each event name to an array of `{ listener, context }` subscriptions. |
| **`_logger`** | `any` | `{ log, warn, error }` | Logger reference used to print styled dispatch messages (`Trigger event → Context`). |
| **`_logTag`** | `string` | `'[EventManager]'` | Prefix string attached to console log entries. |
