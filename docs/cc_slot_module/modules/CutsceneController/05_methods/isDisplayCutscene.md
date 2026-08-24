---
id: "cc_slot_module:CutsceneController:methods:isDisplayCutscene"
title: "CutsceneController.isDisplayCutscene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "isDisplayCutscene"]
---

# 📖 `CutsceneController.isDisplayCutscene()`

---

## 1. Method Overview & Signature

Returns true if any registered cutscene with `fullDisplay = true` is currently active.

```typescript
public isDisplayCutscene(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
isDisplayCutscene(): boolean {
    let isDisplay = false;
    this.cutScenes.forEach(cutScene => {
        if (cutScene.node.active && cutScene.fullDisplay) {
            isDisplay = true;
        }
    });

    return isDisplay;
}
```
