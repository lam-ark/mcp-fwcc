---
id: "cc_slot_module:CutsceneController:overview:lifecycle_flowchart"
title: "CutsceneController Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 CutsceneController Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Scene as Scene Bootstrap
    participant CC as CutsceneController
    participant Child as BaseCutscene Children
    participant EventMgr as GameEventManager

    Scene->>CC: onLoadExtend()
    CC->>Child: child.active = true (forces child onLoad)
    CC->>CC: makeCutSceneList()
    Child->>Child: init() -> registers into cutScenes Map
    CC->>EventMgr: on(PLAY_CUTSCENE, playCutScene)
    CC->>EventMgr: on(CLOSE_CUTSCENE, closeCutScene)
    CC->>EventMgr: on(SKIP_CUTSCENES, skipCutScenes)
    CC->>EventMgr: on(CLOSE_ALL_NOTICES, closeAllNotices)
```
