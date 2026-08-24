---
id: "cc_slot_module:GameInit:gotchas:index"
title: "GameInit Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ GameInit Gotchas & Engine Defects Index

## 1. Known Gotchas Reference Table

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_early_inject_access_before_provide`](./01_early_inject_access_before_provide.md)** | Child components reading `@inject` properties during constructor or early `onLoad` before `GameInit` executes `provide()`. | In Cocos 2.4, sibling/child component execution order in `onLoad` is dependent on scene tree order. | 🔴 Critical (Null Pointer Exception) |
| **[`02_singleton_dependency_leak_scene_reload`](./02_singleton_dependency_leak_scene_reload.md)** | Stale service singletons retained in global container causing memory leaks when switching scenes. | Failing to invoke `clearGameDependencies(gameId)` on `onDestroy()`. | 🟠 High (Memory Leak & Zombie Callbacks) |
