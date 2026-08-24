---
id: "cc_slot_module:GameModeDirectorModule:method:startRespinningTable"
title: "GameModeDirectorModule._startRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_startRespinningTable"]
---

# `GameModeDirectorModule._startRespinningTable(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_startRespinningTable(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("TABLE_START_RESPIN", data)` to initiate respin motions on designated columns.

---

## 3. Un-truncated Source Code Implementation
```typescript
_startRespinningTable(data): Promise<void> {
    return this.moduleEvent.emit("TABLE_START_RESPIN", data);
}
```
