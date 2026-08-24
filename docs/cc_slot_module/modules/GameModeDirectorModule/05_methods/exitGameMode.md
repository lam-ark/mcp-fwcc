---
id: "cc_slot_module:GameModeDirectorModule:method:exitGameMode"
title: "GameModeDirectorModule.exitGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "exitGameMode"]
---

# `GameModeDirectorModule.exitGameMode(mode: number): Promise<void>`

---

## 1. Method Signature
```typescript
exitGameMode(_mode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed profile: `this.resetGameSpeed()`.
2. Emits global exit mode event: `this.eventManager.emit(GameUIEvents.GAME_MODE.EXIT_GAME_MODE)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
exitGameMode(_mode: number): Promise<void> {
    this.resetGameSpeed();
    return this.eventManager.emit(GameUIEvents.GAME_MODE.EXIT_GAME_MODE);
}
```
