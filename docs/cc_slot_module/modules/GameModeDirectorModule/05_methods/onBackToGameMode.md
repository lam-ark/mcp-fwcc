---
id: "cc_slot_module:GameModeDirectorModule:method:onBackToGameMode"
title: "GameModeDirectorModule.onBackToGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onBackToGameMode"]
---

# `GameModeDirectorModule.onBackToGameMode(fromMode: number): Promise<void>`

---

## 1. Method Signature
```typescript
async onBackToGameMode(_fromMode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Invoked in Base Game when returning from child modes (e.g. Free Game, Bonus Game). Restores background music via `this.playGameModeBGM()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
async onBackToGameMode(_fromMode: number): Promise<void> {
    this.playGameModeBGM();
    return Promise.resolve();
}
```
