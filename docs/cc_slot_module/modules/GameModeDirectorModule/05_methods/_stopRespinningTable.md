---
id: "cc_slot_module:GameModeDirectorModule:method:stopRespinningTable"
title: "GameModeDirectorModule._stopRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_stopRespinningTable"]
---

# `GameModeDirectorModule._stopRespinningTable(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_stopRespinningTable(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("TABLE_STOP_RESPIN", data)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_stopRespinningTable(data): Promise<void> {
    return this.moduleEvent.emit("TABLE_STOP_RESPIN", data);
}
```
