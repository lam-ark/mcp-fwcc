---
id: "cc_slot_module:CoinsEffect:events:scoped_module_events"
title: "CoinsEffect Scoped Node Events"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "events", "scoped_events"]
---

# 📡 CoinsEffect Scoped Node Events

---

## 1. Local Node Event Listeners

| Event Name | Handler Method | Action |
| :--- | :--- | :--- |
| `SHOW_COINS_EFFECT` | `this.showCoinsEffect()` | Activates particles, resets systems, and fades opacity from 1 to 255. |
| `HIDE_COINS_EFFECT` | `this.hideCoinsEffect()` | Halts particle emissions via `stopSystem()`. |
