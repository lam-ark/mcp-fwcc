---
id: "cc_slot_module:GameModeDirectorModule:method:setUpPaylines"
title: "GameModeDirectorModule._setUpPaylines() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_setUpPaylines"]
---

# `GameModeDirectorModule._setUpPaylines(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_setUpPaylines(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped event `this.moduleEvent.emit("SETUP_PAYLINES", data)` to initialize payline coordinate paths and win frames.

---

## 3. Un-truncated Source Code Implementation
```typescript
_setUpPaylines(data): Promise<void> {
    return this.moduleEvent.emit("SETUP_PAYLINES", data);
}
```
