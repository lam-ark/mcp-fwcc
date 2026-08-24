---
id: "cc_slot_module:CutsceneController:methods:playCutScene"
title: "CutsceneController.playCutScene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "playCutScene", "promise"]
---

# 📖 `CutsceneController.playCutScene()`

---

## 1. Method Overview & Signature

Looks up target cutscene by enum and returns a `Promise<void>` that resolves when the cutscene exits.

```typescript
public playCutScene({ cutsceneType, cutsceneData }): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
playCutScene({ cutsceneType, cutsceneData }): Promise<void> {
    return new Promise((resolve) => {
        if (this.cutScenes.has(cutsceneType)) {
            this.cutScenes.get(cutsceneType).play(cutsceneData, () => {
                resolve();
            });
        } else {
            resolve();
        }
    });
}
```
