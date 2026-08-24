---
id: "cc_slot_module:GameDirector:gotchas:index"
title: "GameDirector Gotchas Index"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameDirector Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_mode_stack_underflow_crash`](./01_mode_stack_underflow_crash.md)** | `EXIT_GAME_MODE` throws null exception when exiting feature mode. | `currentModes` stack was empty or missing the prior base game mode. | 🔴 Critical (Game Mode Hang) |
