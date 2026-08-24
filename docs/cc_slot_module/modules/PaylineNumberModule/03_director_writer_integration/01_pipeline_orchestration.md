---
id: "cc_slot_module:PaylineNumberModule:director_writer:pipeline_orchestration"
title: "PaylineNumberModule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineNumberModule 3-Tier Pipeline Orchestration

---

## 1. 3-Tier Flow

```text
GameModeDirectorModule / Writer
       │
       ▼ (moduleEvent: SETUP_PAYLINES)
SlotTablePaylineModule
       │
       ▼ (payLineEmitter: PAYLINE_SET_DATA, PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
PaylineNumberModule
       │
       ▼ (item.show() / hide())
PaylineNumberItem Component instances
```
