---
id: "cc_slot_module:GameModeDirectorModule:method:updateSpinTimes"
title: "GameModeDirectorModule._updateSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_updateSpinTimes"]
---

# `GameModeDirectorModule._updateSpinTimes(spineTimes: number): Promise<void>`

---

## 1. Method Signature
```typescript
_updateSpinTimes(spineTimes: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `"UPDATE_SPINTIMES"` on the `this.spinTimes` HUD node.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateSpinTimes(spineTimes): Promise<void> {
    this.spinTimes && this.spinTimes.emit("UPDATE_SPINTIMES", spineTimes);
    return Promise.resolve();
}
```
