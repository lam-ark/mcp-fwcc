---
id: "cc_slot_module:GameModeDirectorModule:method:onStopRespinningTable"
title: "GameModeDirectorModule.onStopRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStopRespinningTable"]
---

# `GameModeDirectorModule.onStopRespinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
onStopRespinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StopRespinningTable"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStopRespinningTable(): Promise<void> {
    return this.runAction("StopRespinningTable");
}
```
