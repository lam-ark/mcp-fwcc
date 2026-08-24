---
id: "cc_slot_module:FreeGameDirectorModule:method:_gameExit"
title: "FreeGameDirectorModule._gameExit() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_gameExit", "mode_exit"]
---

# `FreeGameDirectorModule._gameExit(): Promise<void>`

---

## 1. Method Signature
```typescript
public _gameExit(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits scoped event: `this.moduleEvent.emit("CLEAR_PAYLINES")`.
2. Emits scoped event: `this.moduleEvent.emit("SYNC_TABLE")`.
3. Returns `Promise.resolve()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_gameExit(): Promise<void> {
    this.moduleEvent.emit("CLEAR_PAYLINES");
    this.moduleEvent.emit("SYNC_TABLE");
    return Promise.resolve();
}
```
