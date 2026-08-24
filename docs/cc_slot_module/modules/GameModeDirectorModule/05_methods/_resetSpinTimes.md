---
id: "cc_slot_module:GameModeDirectorModule:method:resetSpinTimes"
title: "GameModeDirectorModule._resetSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetSpinTimes"]
---

# `GameModeDirectorModule._resetSpinTimes(): Promise<void>`

---

## 1. Method Signature
```typescript
_resetSpinTimes(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `"RESET_SPINTIMES"` on the `this.spinTimes` HUD node.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetSpinTimes(): Promise<void> {
    this.spinTimes && this.spinTimes.emit("RESET_SPINTIMES");
    return Promise.resolve();
}
```
