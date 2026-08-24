---
id: "cc_slot_module:SlotSymbolResourceManager:events:scoped_module_events"
title: "SlotSymbolResourceManager Scoped Module Events & Interface Contract"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "events", "scoped_events", "interface_contract"]
---

# 📡 SlotSymbolResourceManager Scoped Module Events & Interface Contract

---

## 1. Zero Event Overhead Architecture

Unlike high-level Directors, `SlotSymbolResourceManager` intentionally **does not emit or listen to broadcast event buses**.

Instead, it fulfills the `ISlotSymbolResource` interface contract, providing synchronous, non-blocking method access to avoid event queuing latency during fast reel spinning.
