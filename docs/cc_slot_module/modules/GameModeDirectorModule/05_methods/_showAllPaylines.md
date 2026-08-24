---
id: "cc_slot_module:GameModeDirectorModule:method:showAllPaylines"
title: "GameModeDirectorModule._showAllPaylines() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showAllPaylines"]
---

# `GameModeDirectorModule._showAllPaylines(): Promise<void>`

---

## 1. Method Signature
```typescript
_showAllPaylines(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SHOW_ALL_PAYLINES")` to start looping through individual winning paylines.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showAllPaylines(): Promise<void> {
    return this.moduleEvent.emit("SHOW_ALL_PAYLINES");
}
```
