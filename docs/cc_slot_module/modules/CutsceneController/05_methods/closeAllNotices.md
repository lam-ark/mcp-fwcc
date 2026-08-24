---
id: "cc_slot_module:CutsceneController:methods:closeAllNotices"
title: "CutsceneController.closeAllNotices Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "closeAllNotices"]
---

# 📖 `CutsceneController.closeAllNotices()`

---

## 1. Method Overview & Signature

Emits `CLOSE_NOTICE` on all registered cutscene nodes.

```typescript
public closeAllNotices(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closeAllNotices(): void {
    this.cutScenes.forEach(cutScene => {
        cutScene.node.emit("CLOSE_NOTICE");
    });
}
```
