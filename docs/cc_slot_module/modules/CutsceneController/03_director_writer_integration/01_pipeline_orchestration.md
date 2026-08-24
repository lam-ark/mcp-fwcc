---
id: "cc_slot_module:CutsceneController:director_writer:pipeline_orchestration"
title: "CutsceneController Director & Pipeline Orchestration"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 CutsceneController Director & Pipeline Orchestration

---

## 1. Pipeline Bridge Role

Converts fire-and-forget event broadcasts into sequential async Promise steps:
```text
Director / Writer Step: { command: "SHOW_WIN_EFFECT", data: winPayload }
       │
       ▼
GameUIEvents.CUTSCENES.PLAY_CUTSCENE
       │
       ▼
CutsceneController.playCutScene() ➔ returns Promise<void>
       │
       ▼
[Modal Displays -> Animation Completes -> Resolves Promise]
       │
       ▼
ScriptExecutor proceeds to next step
```
