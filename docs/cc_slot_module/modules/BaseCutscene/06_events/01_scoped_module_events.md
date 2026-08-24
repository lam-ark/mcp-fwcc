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
| `PLAY` | `this.play(content, callback)` | Triggers modal entry. |
| `HIDE` | `this.exit(data, callback)` | Triggers modal close. |
| `INIT` | `this.init()` | Binds listeners and hides node. |
| `SKIP` | `this.skip()` | Triggers touch-to-skip fast forward. |
