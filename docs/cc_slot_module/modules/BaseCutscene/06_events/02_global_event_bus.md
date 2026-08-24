---
id: "cc_slot_module:BaseCutscene:events:global_event_bus"
title: "BaseCutscene Global Event Bus Specification"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "events", "global_bus"]
---

# 🌐 BaseCutscene Global Event Bus Specification

---

## 1. Emitted Global Events

| Event Constant | Bus | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE` | `eventManager` | Notifies HUD and buttons to disable touches. |
| `GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE` | `eventManager` | Notifies HUD and buttons to re-enable touches. |
| `GameLogicUIEvents.ON_CUTSCENE_CLOSE` | `gameLogic` | Informs network logic that cutscene closed. |
