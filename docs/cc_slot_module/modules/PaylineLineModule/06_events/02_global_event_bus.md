---
id: "cc_slot_module:PaylineLineModule:events:global_event_bus"
title: "PaylineLineModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PaylineLineModule Global Event Bus Integration

---

## 1. Global Decoupling

`PaylineLineModule` relies strictly on the isolated `this.payLineEmitter` event target. It does not subscribe directly to `eventManager` to avoid global event bus pollution.
