---
id: "cc_slot_module:GameModeDirectorModule:method:stopSpinningTableWithRandomMatrix"
title: "GameModeDirectorModule._stopSpinningTableWithRandomMatrix() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_stopSpinningTableWithRandomMatrix"]
---

# `GameModeDirectorModule._stopSpinningTableWithRandomMatrix(): Promise<void>`

---

## 1. Method Signature
```typescript
_stopSpinningTableWithRandomMatrix(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("TABLE_STOP_SPIN_WITH_RANDOM_MATRIX")` to cleanly bring spinning reels to rest on a fallback matrix without calculating line wins.

---

## 3. Un-truncated Source Code Implementation
```typescript
_stopSpinningTableWithRandomMatrix(): Promise<void> {
    return this.moduleEvent.emit("TABLE_STOP_SPIN_WITH_RANDOM_MATRIX");
}
```
