---
id: "cc_slot_module:GameModeDirectorModule:method:resetGameState"
title: "GameModeDirectorModule.resetGameState() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "resetGameState"]
---

# `GameModeDirectorModule.resetGameState(): void`

---

## 1. Method Signature
```typescript
resetGameState(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetGameState(): void {
    this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE;
}
```
