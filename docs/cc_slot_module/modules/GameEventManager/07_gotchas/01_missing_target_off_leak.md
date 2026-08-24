---
id: "cc_slot_module:GameEventManager:gotcha:missing_target_off_leak"
title: "Gotcha: Memory Leak & Zombie Callbacks via Missing targetOff()"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "gotchas", "targetOff", "memory_leak", "zombie_callbacks"]
---

# 🛑 Gotcha: Memory Leak & Zombie Callbacks via Missing `targetOff()`

## 1. Symptom & Visual Defect
After closing and reopening modal dialogs (such as `InfoPanel` or `BetHistory`), clicking a spin triggers duplicate event executions and memory steadily climbs.

---

## 2. Root Cause & Cocos 2.4 Engine Quirk
`GameEventManager` is a singleton living across the scene lifetime. When a dynamically created component attaches a listener using `this.eventManager.on("EVENT", this.callback, this)`, `GameEventManager` holds a strong reference to `this` (the component context). When the node is destroyed, garbage collection cannot free the node hierarchy unless `targetOff(this)` is invoked.

---

## 3. Standard Code Solution & Fix

```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
}
```
