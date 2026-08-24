---
id: "cc_slot_module:FreeGameDirectorModule:method:updateSpinTimes"
title: "FreeGameDirectorModule._updateSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_updateSpinTimes"]
---

# `FreeGameDirectorModule._updateSpinTimes(spinTimes: number): Promise<void>`

---

## 1. Method Signature
```typescript
_updateSpinTimes(spinTimes: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assigns `this.dataStore.freeSpinTimes = spinTimes`.
2. Emits `"UPDATE_SPINTIMES"` on `this.spinTimes` node.
3. Returns resolved Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateSpinTimes(spinTimes): Promise<void> {
    this.dataStore.freeSpinTimes = spinTimes;
    this.spinTimes.emit("UPDATE_SPINTIMES", spinTimes);
    return Promise.resolve();
}
```
