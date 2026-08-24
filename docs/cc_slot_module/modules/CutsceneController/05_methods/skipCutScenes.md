---
id: "cc_slot_module:CutsceneController:methods:skipCutScenes"
title: "CutsceneController.skipCutScenes Method"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "skipCutScenes"]
---

# 📖 `CutsceneController.skipCutScenes()`

---

## 1. Method Overview & Signature

Iterates through all registered cutscenes and invokes `skip()` on each.

```typescript
public skipCutScenes(): void
```

---

## 2. Complete Source Code Implementation

```typescript
skipCutScenes(): void {
    this.cutScenes.forEach(cutScene => cutScene.skip());
}
```
