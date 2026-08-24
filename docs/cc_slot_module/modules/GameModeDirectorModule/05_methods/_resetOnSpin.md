---
id: "cc_slot_module:GameModeDirectorModule:method:resetOnSpin"
title: "GameModeDirectorModule._resetOnSpin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resetOnSpin"]
---

# `GameModeDirectorModule._resetOnSpin(): Promise<void>`

---

## 1. Method Signature
```typescript
_resetOnSpin(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for custom feature resets when spin begins. Default resolves immediately.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resetOnSpin(): Promise<void> {
    return Promise.resolve();
}
```
