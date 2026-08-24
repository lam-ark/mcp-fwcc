---
id: "cc_slot_module:FreeGameDirectorModule:method:syncSpinTimes"
title: "FreeGameDirectorModule.syncSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "syncSpinTimes", "SpinTimesModule"]
---

# `FreeGameDirectorModule.syncSpinTimes(): void`

---

## 1. Method Signature
```typescript
public syncSpinTimes(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `const { freeGameRemain, freeGame } = this.dataStore.playSession`.
2. Stores count: `this.dataStore.freeSpinTimes = freeGameRemain || freeGame`.
3. Emits event directly to the HUD node: `this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
syncSpinTimes(): void {
    const { freeGameRemain, freeGame } = this.dataStore.playSession;
    this.dataStore.freeSpinTimes = freeGameRemain || freeGame;
    this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
}
```
