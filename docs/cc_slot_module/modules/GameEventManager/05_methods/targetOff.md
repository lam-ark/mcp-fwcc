---
id: "cc_slot_module:GameEventManager:method:targetOff"
title: "GameEventManager.targetOff() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "targetOff", "cleanup", "memory_leak"]
---

# `GameEventManager.targetOff(context: any): void`

---

## 1. Method Signature
```typescript
public targetOff(context: any): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `SlotBaseModule.onDestroy()`, `PopupControllerModule.onDestroy()`, or modal teardown routines.

---

## 3. Detailed Algorithmic Execution Logic
1. Iterates over all registered event topics in `this.events`.
2. Filters out any `{ listener, context }` entry whose `context` matches the target object reference.

---

## 4. Un-truncated Source Code Implementation
```typescript
targetOff(context: any): void {
    for (const event in this.events) {
        this.events[event] = this.events[event].filter(entry => entry.context !== context);
    }
}
```
