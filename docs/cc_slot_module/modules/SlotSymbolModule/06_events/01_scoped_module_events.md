---
id: "cc_slot_module:SlotSymbolModule:events:scoped_module_events"
title: "SlotSymbolModule Scoped Module Events & Callbacks"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotSymbolModule Scoped Module Events & Callbacks

---

## 1. Direct Method & Delegate Interface

Because hundreds of symbol instances can exist in memory simultaneously across reels and paylines, `SlotSymbolModule` minimizes event overhead by accepting direct method calls from `SlotReelModule` and `PaylineSymbolModule` rather than subscribing to broadcast event buses.
