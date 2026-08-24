---
id: "cc_slot_module:BaseCutscene:methods:fireCutsceneClose"
title: "BaseCutscene.fireCutsceneClose Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "fireCutsceneClose"]
---

# 📖 `BaseCutscene.fireCutsceneClose()`

---

## 1. Method Overview & Signature

Dispatches close signals to `GameEventManager` and `GameLogic`.

```typescript
public fireCutsceneClose(): void
```

---

## 2. Complete Source Code Implementation

```typescript
fireCutsceneClose(): void {
    if (this.fullDisplay) {
        this.eventManager.emit(GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE);
    }
    this.gameLogic.emit(GameLogicUIEvents.ON_CUTSCENE_CLOSE, this.cutsceneType);
}
```
