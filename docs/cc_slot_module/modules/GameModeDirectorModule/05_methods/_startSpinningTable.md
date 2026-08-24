---
id: "cc_slot_module:GameModeDirectorModule:method:startSpinningTable"
title: "GameModeDirectorModule._startSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_startSpinningTable"]
---

# `GameModeDirectorModule._startSpinningTable(): Promise<void>`

---

## 1. Method Signature
```typescript
_startSpinningTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("TABLE_START_SPIN")` to start reel column motion.

---

## 3. Un-truncated Source Code Implementation
```typescript
_startSpinningTable(): Promise<void> {
    return this.moduleEvent.emit("TABLE_START_SPIN");
}
```
