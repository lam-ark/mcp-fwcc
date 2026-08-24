---
id: "cc_slot_module:ScriptExecutor:gotchas:index"
title: "ScriptExecutor Gotchas Index"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ ScriptExecutor Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_unhandled_action_rejection_halts_spin_loop`](./01_unhandled_action_rejection_halts_spin_loop.md)** | Spin button locks forever when an individual command method throws an unhandled error. | Director method throws error before returning Promise, causing `.then()` chain to never advance `executeNextScript`. | 🔴 Critical (Perpetual UI Freeze) |
