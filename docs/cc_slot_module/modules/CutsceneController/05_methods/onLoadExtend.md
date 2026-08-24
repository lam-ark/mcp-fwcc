---
id: "cc_slot_module:CutsceneController:methods:onLoadExtend"
title: "CutsceneController.onLoadExtend Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "onLoadExtend", "child_activation"]
---

# 📖 `CutsceneController.onLoadExtend()`

---

## 1. Method Overview & Signature

Activates all child cutscene nodes to guarantee their Cocos Creator `onLoad` lifecycle hook executes, builds the internal lookup map, and binds global cutscene management events.

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

---

## 3. Deep Architectural Insight: The Child `onLoad` Activation Trick

In Cocos Creator 2.4.x:
- If a child node is saved in a `.fire` scene or `.prefab` with `active = false`, its component `onLoad()` and `start()` lifecycle methods are **not executed** at scene launch.
- Subclasses of `BaseCutscene` depend on `onLoadExtend()` to resolve node component references (e.g. `_lbWinAmount = this.winAmount.getComponent(Label)`).
- By iterating through `this.node.children.forEach(child => child.active = true)` in `onLoadExtend()`, `CutsceneController` forces the engine to trigger `onLoad()` on all child modals immediately.
- Subsequently, `makeCutSceneList()` calls each cutscene's `init()` method, which immediately sets `this.node.active = false`, cleanly priming every modal in memory while keeping the screen uncluttered.
