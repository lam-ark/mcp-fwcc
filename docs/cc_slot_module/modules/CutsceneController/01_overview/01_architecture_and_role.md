---
id: "cc_slot_module:CutsceneController:overview:architecture_and_role"
title: "CutsceneController Architectural Role & Queue Orchestration"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "overview", "architecture", "orchestrator"]
---

# 🏛️ CutsceneController Architectural Role & Queue Orchestration

---

## 1. Architectural Mission

`CutsceneController` is the master manager for all modal cutscenes in the game. Attached directly to `Canvas/Director/CutsceneControl`, it discovers all child `BaseCutscene` instances, maintains a typed registry `cutScenes: Map<number, BaseCutscene>`, and transforms callback-driven modal plays into clean `Promise<void>` steps for the `ScriptExecutor` pipeline.

```mermaid
graph TD
    Writer[Mode Writer / ScriptExecutor] -->|PLAY_CUTSCENE| CC[CutsceneController]
    CC -->|Looks up Map registry| Map[Map cutsceneType, BaseCutscene]
    Map -->|play(data, callback)| Target[Target BaseCutscene]
    Target -->|callback()| CC
    CC -->|Resolves Promise<void>| Writer
```

---

## 2. Key Responsibilities

1. **Automatic Discovery & Hydration (`makeCutSceneList`)**:
   - Iterates through `this.cutsceneList` or calls `getComponentsInChildren(BaseCutscene)` to register all active modals.
2. **Promise-Wrapped Event Handlers**:
   - `playCutScene({ cutsceneType, cutsceneData })`: Returns `Promise<void>` resolved only when the modal finishes.
   - `closeCutScene({ cutsceneType, cutsceneData })`: Returns `Promise<void>` for explicit modal close commands.
3. **Global Control & Querying**:
   - `skipCutScenes()`: Dispatches skip requests to all active modals.
   - `isDisplayCutscene()`: Returns boolean indicating if a blocking fullscreen modal is currently active.
   - `closeAllNotices()`: Broadcasts `CLOSE_NOTICE` to all child modals.
