---
id: "cc_slot_module:SlotBaseModule:director_writer:subsystem_impacts"
title: "SlotBaseModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotBaseModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **All Modules & Systems** | Every subsystem inherits `SlotBaseModule` to receive DI services. |
| **GameModeDirectorModule** | Calls `setupModule(moduleEvent, gameMode)` on all registered table & UI modules. |
| **GameLogic** | Dispatches reset signals and provides reactive data models. |
