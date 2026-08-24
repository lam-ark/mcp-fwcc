---
id: "cc_slot_module:GameModeDirectorModule:method:onPreStopSpinningTable"
title: "GameModeDirectorModule.onPreStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onPreStopSpinningTable"]
---

# `GameModeDirectorModule.onPreStopSpinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
onPreStopSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"PreStopSpinningTable"` (used for sure-win animations, mascot reactions, or reel lightning effects before stopping).

---

## 3. Un-truncated Source Code Implementation
```typescript
onPreStopSpinningTable(): Promise<void> {
    return this.runAction("PreStopSpinningTable");
}
```
