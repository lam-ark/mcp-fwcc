---
id: "cc_slot_module:GameModeDirectorModule:method:showTransformSymbol"
title: "GameModeDirectorModule._showTransformSymbol() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showTransformSymbol"]
---

# `GameModeDirectorModule._showTransformSymbol(): Promise<void>`

---

## 1. Method Signature
```typescript
_showTransformSymbol(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SHOW_TRANSFORM_SYMBOL")` to execute mystery symbol transformation sequences.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showTransformSymbol(): Promise<void> {
    return this.moduleEvent.emit("SHOW_TRANSFORM_SYMBOL");
}
```
