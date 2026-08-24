---
id: "cc_slot_module:BaseCutscene:methods:play"
title: "BaseCutscene.play Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "play"]
---

# 📖 `BaseCutscene.play()`

---

## 1. Method Overview & Signature

Entry point for starting a cutscene. Emits full display signal, displays node, and calls `enter()`.

```typescript
public play(content?: any, callback?: Function): void
```

---

## 2. Complete Source Code Implementation

```typescript
play(content?: any, callback?: Function): void {
    if (this.fullDisplay) {
        // delay a frame to ensure the game logic flow is finished
        this.scheduleOnce(() => {
            this.eventManager.emit(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, content);
        });
    }
    this.content = content;
    this.callback = callback;
    this.show();
    this.enter();
}
```
