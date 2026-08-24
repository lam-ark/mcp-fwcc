---
id: "cc_slot_module:GameModeDirectorModule:method:resetTable"
title: "GameModeDirectorModule._resetTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetTable"]
---

# `GameModeDirectorModule._resetTable(): Promise<void>`

---

## 1. Method Signature
```typescript
_resetTable(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits scoped event `this.moduleEvent.emit("BEFORE_RESET_TABLE")`.
2. Emits scoped event `this.moduleEvent.emit("CLEAR_PAYLINES")`.
3. Emits scoped event `this.moduleEvent.emit("SYNC_TABLE")`.
4. Returns resolved Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetTable(): Promise<void> {
    this.moduleEvent.emit("BEFORE_RESET_TABLE");
    this.moduleEvent.emit("CLEAR_PAYLINES");
    this.moduleEvent.emit("SYNC_TABLE");
    return Promise.resolve();
}
```
