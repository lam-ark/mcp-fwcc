---
id: "cc_slot_module:SlotSymbolManager:events:scoped_module_events"
title: "SlotSymbolManager Scoped Module Events"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotSymbolManager Scoped Module Events

## 1. Scoped Events Summary

`SlotSymbolManager` functions primarily as an in-memory service invoked via direct method calls (`getSymbol`, `removeSymbol`, `updateSymbolSiblingIndex`). In development builds (`CC_DEV`), it listens to `cc.director` debug logging events (`show-log-using-symbols`, `show-log-using-symbols-owner`).
