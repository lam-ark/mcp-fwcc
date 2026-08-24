---
id: "cc_slot_module:systems:script_pipeline:index"
title: "Script Execution Pipeline Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "script_executor", "writer_module", "index", "flow", "module_linkage"]
---

# 📜 Script Execution Pipeline Architecture Index

Welcome to the technical guide on the **Script Execution & Command Pipeline** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_scripting_triad_director_writer_executor.md`](./01_scripting_triad_director_writer_executor.md)**
   * The 3-Tier Scripting Triad: `Director` (Scene & Visual Owner) ➔ `Writer` (Script Planner) ➔ `ScriptExecutor` (Queue Runner).
   * Decoupling business logic from rendering code.

2. **[`02_command_synthesis_and_payload_dispatch.md`](./02_command_synthesis_and_payload_dispatch.md)**
   * Structured command array format: string actions `["_command"]` vs. parametrized objects `[{ command: "_step", data: payload }]`.
   * Dynamic script synthesis based on game state.

3. **[`03_async_promise_chaining_mechanism.md`](./03_async_promise_chaining_mechanism.md)**
   * Sequential asynchronous Promise chaining in `ScriptExecutor.executeNextScript()`.
   * Non-blocking queue management and race-condition prevention.

4. **[`04_turbo_mode_and_skip_all_effects.md`](./04_turbo_mode_and_skip_all_effects.md)**
   * Fast Stop and Turbo mode mechanics: how `skipAllEffects()` aborts active tweens, accelerates delays, and resolves Promises immediately.

5. **[`05_diagnostic_logging_and_devtools.md`](./05_diagnostic_logging_and_devtools.md)**
   * Diagnostic Logging with `eno.Logger`, CSS-styled console badges (`[Action]`, `[Running]`, `[Skipping]`, `[Finish]`), and collapsible `console.group` execution tracing.
