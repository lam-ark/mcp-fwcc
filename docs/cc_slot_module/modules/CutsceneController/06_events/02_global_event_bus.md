---
id: "cc_slot_module:CutsceneController:events:global_event_bus"
title: "CutsceneController Global Event Bus Specification"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "events", "global_bus"]
---

# 🌐 CutsceneController Global Event Bus Specification

---

## 1. Subscribed Global Events

| Event Constant | Handler | Payload | Action |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.CUTSCENES.PLAY_CUTSCENE` | `playCutScene` | `{ cutsceneType, cutsceneData }` | Plays modal and awaits Promise completion. |
| `GameUIEvents.CUTSCENES.CLOSE_CUTSCENE` | `closeCutScene` | `{ cutsceneType, cutsceneData }` | Closes modal and awaits Promise completion. |
| `GameUIEvents.CUTSCENES.SKIP_CUTSCENES` | `skipCutScenes` | `void` | Calls `skip()` on all modals. |
| `GameUIEvents.CUTSCENES.CLOSE_ALL_NOTICES` | `closeAllNotices` | `void` | Emits `CLOSE_NOTICE` on all modals. |
