---
id: "cc_slot_module:FreeGameDirectorModule:method:syncNormalTable"
title: "FreeGameDirectorModule.syncNormalTable() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "syncNormalTable"]
---

# `FreeGameDirectorModule.syncNormalTable(data?: any): void`

---

## 1. Method Signature
```typescript
syncNormalTable(data?: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME)` to render the base game matrix when transitioning into Free Spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
syncNormalTable(data?): void {
    this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
}
```
