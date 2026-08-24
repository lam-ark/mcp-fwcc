---
id: "cc_slot_module:CutsceneController:methods:getDisplayCutscene"
title: "CutsceneController.getDisplayCutscene Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "getDisplayCutscene"]
---

# 📖 `CutsceneController.getDisplayCutscene()`

---

## 1. Method Overview & Signature

Returns the name string of the currently active cutscene node.

```typescript
public getDisplayCutscene(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getDisplayCutscene(): string {
    this.cutScenes.forEach(cutScene => {
        if (cutScene.node.active) {
            return cutScene.name;
        }
    });

    return '';
}
```
