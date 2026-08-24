---
id: "cc_slot_module:CutsceneController:methods:makeCutSceneList"
title: "CutsceneController.makeCutSceneList Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "makeCutSceneList"]
---

# 📖 `CutsceneController.makeCutSceneList()`

---

## 1. Method Overview & Signature

Discovers all child `BaseCutscene` components and hydrates the `this.cutScenes` map.

```typescript
public makeCutSceneList(): void
```

---

## 2. Complete Source Code Implementation

```typescript
makeCutSceneList(): void {
    this.cutScenes.clear();
    if (this.cutsceneList.length > 0) {
        this.cutsceneList.forEach(cutsceneMode => {
            cutsceneMode.init();
            this.cutScenes.set(cutsceneMode.cutsceneType, cutsceneMode);
        });
    } else {
        const cutSceneModes = this.node.getComponentsInChildren(BaseCutscene);
        cutSceneModes.forEach(cutSceneMode => {
            if (cutSceneMode) {
                cutSceneMode.init();
                this.cutScenes.set(cutSceneMode.cutsceneType, cutSceneMode);
            }
        });
    }
}
```
