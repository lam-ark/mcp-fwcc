---
id: "cc_slot_module:CutsceneController:gotchas:unregistered_cutscene_silent_drop"
title: "Gotcha: Unregistered cutsceneType Silently Resolves Without Display"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "gotchas", "unregistered_type", "silent_fail"]
---

# ⚠️ Gotcha: Unregistered `cutsceneType` Silently Resolves Without Display

---

## 1. Problem Description

In `CutsceneController.playCutScene()`:
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
If a custom cutscene was not added as a child or has its `cutsceneType` misconfigured, `this.cutScenes.has(cutsceneType)` returns `false`. Instead of logging an error, it silently executes `resolve()`, causing the cutscene to be skipped without developer feedback.

---

## 2. Solution

Add defensive warnings during development or override `playCutScene()` to throw a warning in debug builds.
