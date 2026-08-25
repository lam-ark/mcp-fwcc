---
id: "cc_slot_module:SlotBaseModule:methods:resetAllEffectAndTasks"
title: "SlotBaseModule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `SlotBaseModule.resetAllEffectAndTasks()`

---

## 1. Method Overview & Signature

Protected handler automatically bound to `gameLogic` event `"RESET_ALL_EFFECT_AND_TASKS"`. Subclasses override this method to stop ongoing animations, kill tweens, clear particle bursts, and hide celebratory popups before a new spin starts.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    // Override in subclass
}
```
