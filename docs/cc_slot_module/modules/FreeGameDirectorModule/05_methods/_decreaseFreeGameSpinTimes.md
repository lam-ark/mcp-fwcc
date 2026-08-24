---
id: "cc_slot_module:FreeGameDirectorModule:method:_decreaseFreeGameSpinTimes"
title: "FreeGameDirectorModule._decreaseFreeGameSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_decreaseFreeGameSpinTimes", "spin_counter"]
---

# `FreeGameDirectorModule._decreaseFreeGameSpinTimes(): Promise<void>`

---

## 1. Method Signature
```typescript
public _decreaseFreeGameSpinTimes(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Decrements local state: `this.dataStore.freeSpinTimes--`.
2. Emits updated counter to HUD: `this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes)`.
3. Returns `Promise.resolve()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_decreaseFreeGameSpinTimes(): Promise<void> {
    this.dataStore.freeSpinTimes--;
    this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
    return Promise.resolve();
}
```
