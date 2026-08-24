---
id: "cc_slot_module:CutsceneController:methods:closeCutScene"
title: "CutsceneController.closeCutScene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "closeCutScene"]
---

# 📖 `CutsceneController.closeCutScene()`

---

## 1. Method Overview & Signature

Explicitly forces closure of a specified cutscene and returns a `Promise<void>`.

```typescript
public closeCutScene({ cutsceneType, cutsceneData }): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
closeCutScene({ cutsceneType, cutsceneData }): Promise<void> {
    return new Promise((resolve) => {
        if (this.cutScenes.has(cutsceneType)) {
            this.cutScenes.get(cutsceneType).exit(cutsceneData, () => {
                resolve();
            });
        } else {
            resolve();
        }
    });
}
```
