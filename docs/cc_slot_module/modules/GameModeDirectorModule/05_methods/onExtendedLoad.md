---
id: "cc_slot_module:GameModeDirectorModule:method:onExtendedLoad"
title: "GameModeDirectorModule.onExtendedLoad() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onExtendedLoad", "lifecycle"]
---

# `GameModeDirectorModule.onExtendedLoad(): void`

---

## 1. Method Signature
```typescript
onExtendedLoad(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Attaches a backward-compatible reference on the node: `this.node["director"] = this;`.
2. Listens to node-level lifecycle events:
   * `"GAME_INIT"` ➔ `this.init`
   * `"GAME_ENTER"` ➔ `this.enter`
3. Subscribes to global UI setup events on `this.eventManager`:
   * `GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON` ➔ `this.setUpSlotButton`
   * `GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES` ➔ `this.setUpSpinTimes`
4. Invokes `this.setupModules()` to bind scoped event buses to all child modules in `this.moduleList`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onExtendedLoad(): void {
    this.node["director"] = this;
    this.node.on("GAME_INIT", this.init, this);
    this.node.on("GAME_ENTER", this.enter, this);
    this.eventManager.on(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, this.setUpSlotButton, this);
    this.eventManager.on(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, this.setUpSpinTimes, this);

    this.setupModules();
}
```
