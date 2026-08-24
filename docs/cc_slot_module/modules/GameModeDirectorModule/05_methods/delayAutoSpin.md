---
id: "cc_slot_module:GameModeDirectorModule:method:delayAutoSpin"
title: "GameModeDirectorModule.delayAutoSpin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "delayAutoSpin"]
---

# `GameModeDirectorModule.delayAutoSpin(): Promise<void>`

---

## 1. Method Signature
```typescript
delayAutoSpin(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Defaults to `this.delayAction(0.5)`. Subclasses override this method to adjust pacing intervals between consecutive auto spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
delayAutoSpin(): Promise<void> {
    return this.delayAction(0.5);
};
```
