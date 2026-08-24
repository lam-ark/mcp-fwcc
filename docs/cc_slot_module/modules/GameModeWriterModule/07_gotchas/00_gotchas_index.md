---
id: "cc_slot_module:GameModeWriterModule:gotchas:index"
title: "GameModeWriterModule Gotchas Index"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameModeWriterModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_asynchronous_writer_method_mutation`](./01_asynchronous_writer_method_mutation.md)** | `runAction` executes steps out of order or locks execution. | Declaring `async makeScript...()` returning a Promise instead of a synchronous Array. | 🔴 Critical (Pipeline Lock) |
