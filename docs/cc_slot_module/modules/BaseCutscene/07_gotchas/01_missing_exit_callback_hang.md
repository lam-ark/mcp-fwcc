---
id: "cc_slot_module:BaseCutscene:gotchas:missing_exit_callback_hang"
title: "Gotcha: Missing this.exit() Call Freezes Script Pipeline"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "gotchas", "pipeline_hang", "callback"]
---

# ⚠️ Gotcha: Missing `this.exit()` Call Freezes Script Pipeline

---

## 1. Problem Description

When `CutsceneController.playCutScene()` executes, it wraps the call in a `Promise`:
```typescript
playCutScene({ cutsceneType, cutsceneData }): Promise<void> {
    return new Promise((resolve) => {
        this.cutScenes.get(cutsceneType).play(cutsceneData, () => {
            resolve();
        });
    });
}
```
If a subclass author forgets to invoke `this.exit()` at the end of custom animations or error branches, `this.callback()` is never executed. The Promise never resolves, causing the entire slot spin loop to hang indefinitely.

---

## 2. Solution

Always ensure all animation tween callbacks, user tap handlers, and safety timer fallbacks invoke `this.exit()`.
