---
id: "cc_slot_module:CutsceneController:methods:onLoadExtend"
title: "CutsceneController.onLoadExtend Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `CutsceneController.onLoadExtend()`

---

## 1. Method Overview & Signature

Activates child nodes to force their `onLoad` lifecycle, builds cutscene map, and binds global event listeners.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    // Turn it on for entering onLoad
    this.node.children.forEach(child => {
        child.active = true;
    });
    this.makeCutSceneList();

    this.eventManager.on(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, this.playCutScene, this);
    this.eventManager.on(GameUIEvents.CUTSCENES.CLOSE_CUTSCENE, this.closeCutScene, this);
    this.eventManager.on(GameUIEvents.CUTSCENES.SKIP_CUTSCENES, this.skipCutScenes, this);
    this.eventManager.on(GameUIEvents.CUTSCENES.CLOSE_ALL_NOTICES, this.closeAllNotices, this);
}
```
