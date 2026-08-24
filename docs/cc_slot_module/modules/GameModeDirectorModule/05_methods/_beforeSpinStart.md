---
id: "cc_slot_module:GameModeDirectorModule:method:beforeSpinStart"
title: "GameModeDirectorModule._beforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_beforeSpinStart"]
---

# `GameModeDirectorModule._beforeSpinStart(): Promise<void>`

---

## 1. Method Signature
```typescript
async _beforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resets speed profile: `this.resetGameSpeed()`.
2. Clears previous effects: `this.skipAllEffects()`.
3. If `this.gameSettings.isAutoSpin` is active, awaits `this.delayAutoSpin()` interval.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _beforeSpinStart(): Promise<void> {
    this.resetGameSpeed();
    this.skipAllEffects();
    if (this.gameSettings.isAutoSpin) {
        await this.delayAutoSpin();
    }
    return Promise.resolve();
}
```
