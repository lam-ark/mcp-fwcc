---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:cutscene_queue_and_orchestration"
title: "Cutscene Queue, Registration & Promise Chaining Orchestration"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "cutscene_controller", "promise_chaining", "orchestration"]
---

# 🎬 Cutscene Queue, Registration & Promise Chaining Orchestration

---

## 1. Registration & Map Hydration (`makeCutSceneList`)

During `onLoadExtend()`, `CutsceneController` activates all child nodes and discovers all attached `BaseCutscene` components:

```typescript
makeCutSceneList(): void {
    this.cutScenes.clear();
    const cutSceneModes = this.node.getComponentsInChildren(BaseCutscene);
    cutSceneModes.forEach(cutSceneMode => {
        if (cutSceneMode) {
            cutSceneMode.init();
            this.cutScenes.set(cutSceneMode.cutsceneType, cutSceneMode);
        }
    });
}
```

---

## 2. Asynchronous Promise Chaining Pipeline

When a writer command executes `PLAY_CUTSCENE`:

```mermaid
sequenceDiagram
    autonumber
    participant Writer as ScriptExecutor / Mode Writer
    participant CC as CutsceneController
    participant Cutscene as BaseCutscene (e.g. WinEffectModule)
    participant UI as UIManagerModule

    Writer->>CC: eventManager.emit("PLAY_CUTSCENE", { cutsceneType, cutsceneData })
    CC->>Cutscene: play(cutsceneData, callback)
    Cutscene->>Cutscene: show() & enter()
    Cutscene->>UI: emit("SHOW_FULL_DISPLAY_CUTSCENE")
    
    Note over Cutscene: Animation / Coin Roll / User Interaction
    
    Cutscene->>Cutscene: exit()
    Cutscene->>UI: emit("HIDE_FULL_DISPLAY_CUTSCENE")
    Cutscene->>CC: callback()
    CC-->>Writer: Promise<void> resolves -> Pipeline advances to next command
```
