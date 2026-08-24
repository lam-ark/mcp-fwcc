---
id: "cc_slot_module:FreeGameDirectorModule:method:beforeSpinStart"
title: "FreeGameDirectorModule._beforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_beforeSpinStart"]
---

# `FreeGameDirectorModule._beforeSpinStart(): Promise<void>`

---

## 1. Method Signature
```typescript
async _beforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed profile: `this.resetGameSpeed()`.
2. Clears previous effects: `this.skipAllEffects()`.
3. Sets `this.isFirstAutoSpin = false`.
4. Awaits pacing interval: `await this.delayAutoSpin()`.
5. Resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _beforeSpinStart(): Promise<void> {
    this.resetGameSpeed();
    this.skipAllEffects();
    this.isFirstAutoSpin = false;
    await this.delayAutoSpin();
    return Promise.resolve();
}
```
