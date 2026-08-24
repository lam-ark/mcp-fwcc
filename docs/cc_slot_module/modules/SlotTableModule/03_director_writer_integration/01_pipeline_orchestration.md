---
id: "cc_slot_module:SlotTableModule:director_writer:pipeline_orchestration"
title: "SlotTableModule Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTableModule Director & Writer Pipeline Orchestration

## 1. Triad Collaboration Pattern

1. **Spin Command Dispatch**: `NormalGameWriterModule` outputs `{ command: "_startSpinningTable" }`, prompting `NormalGameDirectorModule` to emit `TABLE_START_SPIN` to `SlotTableModule`.
2. **Result Command Dispatch**: `_stopSpinningTable` outputs `{ command: "_stopSpinningTable" }`. The director awaits `this.tableModule.stopSpin(matrix)` Promise before moving to win evaluation.
3. **Reconnection Recovery**: `_resumeNormalTable` emits `SYNC_TABLE` to rebuild column symbols without running spin animations.
