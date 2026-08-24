---
id: "cc_slot_module:ScriptExecutor:gotchas:index"
title: "ScriptExecutor Gotchas & Engine Pitfalls Index"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ ScriptExecutor Gotchas & Pitfalls Index

---

## 1. Known Gotchas & Engine Pitfalls Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_unhandled_action_rejection_halts_spin_loop.md`](./01_unhandled_action_rejection_halts_spin_loop.md)** | Spin queue freezes on single step failure. | `ScriptExecutor.runCommand()` `.catch()` does not call `executeNextScript()`. | Catch internal errors inside director methods and resolve safely. |
| **[`02_director_method_must_return_promise.md`](./02_director_method_must_return_promise.md)** | `TypeError: Cannot read property 'then' of undefined` crash. | Director command method returned `void` instead of `Promise<void>`. | Always declare methods as `async` or return `Promise.resolve()`. |
