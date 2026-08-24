---
id: "cc_slot_module:GameModeDirectorModule:method:onStopSpinningTable"
title: "GameModeDirectorModule.onStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStopSpinningTable"]
---

# `GameModeDirectorModule.onStopSpinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
onStopSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StopSpinningTable"` (stopping reels and evaluating near-wins).

---

## 3. Un-truncated Source Code Implementation
```typescript
onStopSpinningTable(): Promise<void> {
    return this.runAction("StopSpinningTable");
}
```
