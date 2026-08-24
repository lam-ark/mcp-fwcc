---
id: "cc_slot_module:GameModeWriterModule:director_writer:pipeline_orchestration"
title: "GameModeWriterModule Pipeline Orchestration & Script Assembly"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 GameModeWriterModule Pipeline Orchestration & Script Assembly

## 1. Declarative Script Assembly Principles

`GameModeWriterModule` acts as the screenplay author:
1. It inspects parameters passed into `makeScript[ActionName](data)`.
2. It queries `this.dataStore` to inspect server session flags (`nextMode`, `jackpot`).
3. It pushes `{ command: string, data?: any }` objects into an array in strict sequential order.
4. It hands the array back to `ScriptExecutor`, which handles execution, speed suffixes, and cancellations.
