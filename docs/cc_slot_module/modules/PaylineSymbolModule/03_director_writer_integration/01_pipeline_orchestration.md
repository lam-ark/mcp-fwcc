---
id: "cc_slot_module:PaylineSymbolModule:director_writer:pipeline_orchestration"
title: "PaylineSymbolModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 PaylineSymbolModule Pipeline Orchestration

---

## 1. Interaction Pipeline

Controlled indirectly via `SlotTablePaylineModule` and `SlotPaylineSchedule`:

```mermaid
graph TD
    Writer[GameWriterModule] -->|SETUP_PAYLINES| PM[SlotTablePaylineModule]
    PM -->|PAYLINE_SET_DATA| Emitter[payLineEmitter]
    Schedule[SlotPaylineSchedule] -->|PAYLINE_BLINK_ALL / PAYLINE_SHOW_LINE| Emitter
    Emitter --> PSM[PaylineSymbolModule]
```
