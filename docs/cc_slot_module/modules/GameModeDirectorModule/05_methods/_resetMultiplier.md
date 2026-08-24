---
id: "cc_slot_module:GameModeDirectorModule:method:resetMultiplier"
title: "GameModeDirectorModule._resetMultiplier() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetMultiplier"]
---

# `GameModeDirectorModule._resetMultiplier(): Promise<void>`

---

## 1. Method Signature
```typescript
_resetMultiplier(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit("RESET_MULTIPLIER")`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetMultiplier(): Promise<void> {
    return this.eventManager.emit("RESET_MULTIPLIER");
}
```
