---
id: "cc_slot_module:BaseDataModule:events:scoped_module_events"
title: "BaseDataModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BaseDataModule Scoped Module Events

## 1. Scoped Events Summary

`BaseDataModule` relies on direct method dispatching (`dataStore.updateDataModules() ➔ module.onDataUpdate()`) rather than emitting scoped event bus notifications, ensuring near-instant zero-event overhead.
