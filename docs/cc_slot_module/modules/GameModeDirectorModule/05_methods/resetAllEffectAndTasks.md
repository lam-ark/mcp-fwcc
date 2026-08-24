---
id: "cc_slot_module:GameModeDirectorModule:method:resetAllEffectAndTasks"
title: "GameModeDirectorModule.resetAllEffectAndTasks() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "resetAllEffectAndTasks"]
---

# `GameModeDirectorModule.resetAllEffectAndTasks(): void`

---

## 1. Method Signature
```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed via `this.resetGameSpeed()`.
2. Cancels active director scripts: `this.onResetAllScripts()`.
3. If this component node is active and is NOT Normal Game, emits `GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE` to restore the base game viewport.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected resetAllEffectAndTasks(): void {
    this.resetGameSpeed();
    this.onResetAllScripts();
    if (this.node.active && this.gameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
        this.eventManager.emit(GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE);
    }
}
```
