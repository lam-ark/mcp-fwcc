---
id: "cc_slot_module:NormalGameWriterModule:director_writer:pipeline_orchestration"
title: "NormalGameWriterModule Pipeline Orchestration & Engine Integration"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "director_writer", "pipeline", "orchestration"]
---

# 🎼 NormalGameWriterModule Pipeline Orchestration & Engine Integration

## 1. Why Pure Synchronous Script Generation is Required

`NormalGameWriterModule` must remain **100% pure and synchronous**:

1. **Deterministic Action Lists**: When `ScriptExecutor.runAction()` is called, it requires the entire list of steps upfront so it can compute total durations, register skip hooks (`onResetScript`), and track execution indices.
2. **Zero Visual Side-Effects**: The writer does not directly manipulate nodes or mutate state variables. It simply builds command objects like `{ command: "_stopSpinningTable", data }`.
3. **Effortless Extensibility**: To insert a custom feature step (like Red Cliff's `_syncStackWild` or `_collectWildMultiplier`), you simply `.push({ command: "MY_STEP", data })` into the writer's return array!
