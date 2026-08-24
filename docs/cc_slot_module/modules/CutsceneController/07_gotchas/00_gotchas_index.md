---
id: "cc_slot_module:CutsceneController:gotchas:index"
title: "CutsceneController Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ CutsceneController Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unregistered_cutscene_silent_drop`](./01_unregistered_cutscene_silent_drop.md)** | Unregistered `cutsceneType` Silently Resolves Without Display | MEDIUM | If `playCutScene()` receives an unregistered `cutsceneType`, it resolves immediately without warning, skipping the cutscene. |
