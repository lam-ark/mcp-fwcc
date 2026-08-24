---
id: "cc_slot_module:BaseGameDirector:gotchas:index"
title: "BaseGameDirector Gotchas Index"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BaseGameDirector Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_writer_makeScript_crash`](./01_missing_writer_makeScript_crash.md)** | `runAction("CustomStep")` crashes with `makeScriptCustomStep is not a valid action`. | The companion Writer module did not implement the corresponding `makeScript[ActionName]` generator method. | 🔴 Critical (Game Loop Freezes) |
| **[`02_unhandled_action_rejection_halts_spin_loop`](./02_unhandled_action_rejection_halts_spin_loop.md)** | Spin button stays locked forever after an error inside a director command step. | Uncaught Promise rejection inside a step method preventing `onFinish` resolution. | 🔴 Critical (Perpetual UI Lock) |
