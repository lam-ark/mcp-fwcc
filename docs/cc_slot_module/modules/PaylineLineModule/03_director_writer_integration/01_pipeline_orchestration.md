---
id: "cc_slot_module:PaylineLineModule:director_writer:pipeline_orchestration"
title: "PaylineLineModule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineLineModule 3-Tier Pipeline Orchestration

---

## 1. 3-Tier Hierarchy Interaction

```text
GameModeDirectorModule / Writer
       │
       ▼ (moduleEvent: SETUP_PAYLINES)
SlotTablePaylineModule
       │
       ▼ (payLineEmitter: PAYLINE_SET_DATA, PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
PaylineLineModule
       │
       ▼ (emit: "INIT", "SHOW", "HIDE", "RESET")
Line Instance Prefab / cc.Graphics Component
```

1. **Director Layer**: Dispatches `SETUP_PAYLINES` command into the `ScriptExecutor` queue.
2. **Module Orchestrator (`SlotTablePaylineModule`)**: Translates director steps and signals its internal `payLineEmitter`.
3. **Line Module (`PaylineLineModule`)**: Spawns and toggles visual line entities.
