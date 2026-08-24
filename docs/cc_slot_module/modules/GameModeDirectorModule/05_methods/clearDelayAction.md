---
id: "cc_slot_module:GameModeDirectorModule:method:clearDelayAction"
title: "GameModeDirectorModule.clearDelayAction() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "clearDelayAction"]
---

# `GameModeDirectorModule.clearDelayAction(): void`

---

## 1. Method Signature
```typescript
clearDelayAction(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Cancels scheduled `_delayActionCB` callback on the component to prevent timers firing across spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearDelayAction(): void {
    if (this._delayActionCB) {
        this.unschedule(this._delayActionCB);
        this._delayActionCB = null;
    }
}
```
