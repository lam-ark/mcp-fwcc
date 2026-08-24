---
id: "cc_slot_module:GameModeDirectorModule:method:onStartRespinningTable"
title: "GameModeDirectorModule.onStartRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStartRespinningTable"]
---

# `GameModeDirectorModule.onStartRespinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
onStartRespinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StartRespinning"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStartRespinningTable(): Promise<void> {
    return this.runAction("StartRespinning");
}
```
