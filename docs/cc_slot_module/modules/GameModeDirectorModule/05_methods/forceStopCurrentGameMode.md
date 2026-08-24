---
id: "cc_slot_module:GameModeDirectorModule:method:forceStopCurrentGameMode"
title: "GameModeDirectorModule.forceStopCurrentGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "forceStopCurrentGameMode"]
---

# `GameModeDirectorModule.forceStopCurrentGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
forceStopCurrentGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StopCurrentGameMode"` (used to halt spins and recover wallets upon network errors).

---

## 3. Un-truncated Source Code Implementation
```typescript
forceStopCurrentGameMode(): Promise<void> {
    return this.runAction("StopCurrentGameMode");
}
```
