---
id: "cc_slot_module:GameDataStore:gotchas:index"
title: "GameDataStore Gotchas & State Mutation Pitfalls"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ GameDataStore Gotchas & State Mutation Pitfalls

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_deep_clone_mutation_leak`](./01_deep_clone_mutation_leak.md)** | Directly modifying `this.playSession.matrix` inside a visual module corrupts raw server session state for subsequent re-spins or cascade evaluations. | JavaScript object reference sharing without cloning before mutation. | 🔴 Critical (State Corruption) |
