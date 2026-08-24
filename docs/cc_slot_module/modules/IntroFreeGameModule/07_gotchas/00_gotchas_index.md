---
id: "cc_slot_module:IntroFreeGameModule:gotchas:index"
title: "IntroFreeGameModule Gotchas Index"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ IntroFreeGameModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unbound_exit_scope_on_schedule_once`](./01_unbound_exit_scope_on_schedule_once.md)** | Method Scope Binding in `scheduleOnce` | LOW | Passing unbound method references to timers risks losing execution context in older Cocos versions. |
