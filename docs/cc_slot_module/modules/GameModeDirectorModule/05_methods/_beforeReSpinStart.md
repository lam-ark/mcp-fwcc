---
id: "cc_slot_module:GameModeDirectorModule:method:beforeReSpinStart"
title: "GameModeDirectorModule._beforeReSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_beforeReSpinStart"]
---

# `GameModeDirectorModule._beforeReSpinStart(): Promise<void>`

---

## 1. Method Signature
```typescript
_beforeReSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Resets game speed profile via `this.resetGameSpeed()` prior to starting a respin.

---

## 3. Un-truncated Source Code Implementation
```typescript
_beforeReSpinStart(): Promise<void> {
    this.resetGameSpeed();
    return Promise.resolve();
}
```
