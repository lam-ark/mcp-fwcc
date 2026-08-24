---
id: "cc_slot_module:CoinsEffect:events:global_event_bus"
title: "CoinsEffect Global Event Bus Specification"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "events", "global_bus"]
---

# 🌐 CoinsEffect Global Event Bus Specification

---

## 1. Zero Global Bus Coupling

`CoinsEffect` does not subscribe directly to `GameEventManager`. It is driven entirely through local node events emitted by parent modal cutscenes (`WinEffectModule`, `TotalWinModule`).
