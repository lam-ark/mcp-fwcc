---
id: "cc_slot_module:GameModeDirectorModule:method:blinkAllPaylines"
title: "GameModeDirectorModule._blinkAllPaylines() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_blinkAllPaylines"]
---

# `GameModeDirectorModule._blinkAllPaylines(): Promise<void>`

---

## 1. Method Signature
```typescript
_blinkAllPaylines(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("BLINK_ALL_PAYLINES")` to flash all winning payline symbols simultaneously.

---

## 3. Un-truncated Source Code Implementation
```typescript
_blinkAllPaylines(): Promise<void> {
    return this.moduleEvent.emit("BLINK_ALL_PAYLINES");
}
```
