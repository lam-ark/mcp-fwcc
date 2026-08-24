---
id: "cc_slot_module:BonusGameWriterModule:director_writer:pipeline_orchestration"
title: "BonusGameWriterModule Director-Writer Triad Orchestration"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameWriterModule Director-Writer Triad Orchestration

## 1. Triad Collaboration Pattern

1. **State Inspection**: `BonusGameWriterModule` reads `this.dataStore.playSession.nextMode` directly from `GameDataStore`.
2. **Deterministic Script Assembly**: Constructs plain JSON array of `{ command: string, data?: any }` steps.
3. **Execution Dispatch**: `BonusGameDirectorModule` passes the script to `ScriptExecutor.run()` to sequentially call internal underscore methods (`_openItem`, `_openAllItems`, etc.).
