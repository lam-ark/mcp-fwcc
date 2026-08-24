---
id: "cc_slot_module:GameModeDirectorModule:method:updateMegaway"
title: "GameModeDirectorModule._updateMegaway() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_updateMegaway"]
---

# `GameModeDirectorModule._updateMegaway(): Promise<void>`

---

## 1. Method Signature
```typescript
_updateMegaway(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("UPDATE_MEGAWAY")` to recalculate and display dynamic Megaways total.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateMegaway(): Promise<void> {
    return this.moduleEvent.emit("UPDATE_MEGAWAY");
}
```
