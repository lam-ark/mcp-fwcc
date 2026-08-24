---
id: "cc_slot_module:GameModeDirectorModule:method:onStartSpinningTable"
title: "GameModeDirectorModule.onStartSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStartSpinningTable"]
---

# `GameModeDirectorModule.onStartSpinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
onStartSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"StartSpinning"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStartSpinningTable(): Promise<void> {
    return this.runAction("StartSpinning");
}
```
