---
id: "cc_slot_module:BaseCutscene:events:scoped_module_events"
title: "BaseCutscene Scoped Node Events Specification"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BaseCutscene Scoped Node Events Specification

---

## 1. Local Node Event Listeners

| Event Name | Handler | Purpose |
| :--- | :--- | :--- |
| `PLAY` | `this.play(content, callback)` | Direct node trigger to start the cutscene modal. |
| `HIDE` | `this.exit(data, callback)` | Direct node trigger to close the cutscene modal. |
| `INIT` | `this.init()` | Binds lifecycle listeners, resets node state, and sets `active = false`. |
| `SKIP` | `this.skip()` | Triggers touch-to-skip fast forward logic on active modal. |
| `CLOSE_NOTICE` | (Virtual listener) | Triggered when `CutsceneController.closeAllNotices()` broadcasts emergency closure. |

---

## 2. Local Node Event Emitters

| Event Name | Target | Purpose |
| :--- | :--- | :--- |
| `STOP` | `this.node` | Emitted immediately before deactivation in `exit()` to allow child particles, spine animations, or sound listeners to halt. |
