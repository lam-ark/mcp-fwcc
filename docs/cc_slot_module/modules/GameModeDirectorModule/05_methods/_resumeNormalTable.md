---
id: "cc_slot_module:GameModeDirectorModule:method:resumeNormalTable"
title: "GameModeDirectorModule._resumeNormalTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resumeNormalTable"]
---

# `GameModeDirectorModule._resumeNormalTable(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_resumeNormalTable(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME)` to reconstruct the normal table matrix.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeNormalTable(data): Promise<void> {
    return this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
}
```
