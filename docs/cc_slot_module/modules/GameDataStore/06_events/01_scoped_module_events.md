---
id: "cc_slot_module:GameDataStore:events:scoped_module_events"
title: "GameDataStore Scoped Module Events"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "events", "scoped_events"]
---

# 📡 GameDataStore Scoped Module Events

## 1. Scoped Events Summary

`GameDataStore` communicates with data layers via the direct invocation of `module.onDataUpdate(key, value)` rather than emitting event strings, ensuring near-instant zero-event overhead.
