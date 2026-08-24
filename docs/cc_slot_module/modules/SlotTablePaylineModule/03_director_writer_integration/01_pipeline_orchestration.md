---
id: "cc_slot_module:SlotTablePaylineModule:director_writer:pipeline_orchestration"
title: "SlotTablePaylineModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTablePaylineModule Pipeline Orchestration

---

## 1. 3-Tier Execution Pipeline

```mermaid
graph TD
    Writer[NormalGameWriterModule / FreeGameWriterModule] -->|makeScriptShowPayline| Director[GameModeDirectorModule]
    Director -->|Script Step: SETUP_PAYLINES| PM[SlotTablePaylineModule]
    PM -->|Emits PAYLINE_SET_DATA| Emitter[payLineEmitter]
    Emitter -->|PAYLINE_SHOW_ALL| Visuals[Payline Visual Components]
    Director -->|Awaits stage 1 delay| ScriptExecutor[ScriptExecutor Queue]
```

---

## 2. Writer Command Synthesis

1. **`makeScriptShowPayline`**:
   - Synthesizes the step queue triggering `SETUP_PAYLINES`.
   - Binds delay corresponding to `paylineTime` config.
2. **`makeScriptClearPayline`**:
   - Dispatches reset command before next spin begins, ensuring all winning highlights and line vectors vanish cleanly.
