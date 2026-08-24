---
id: "cc_slot_module:GameEventManager:method:destroy"
title: "GameEventManager.destroy() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "destroy", "cleanup"]
---

# `GameEventManager.destroy(): void`

---

## 1. Method Signature
```typescript
public destroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Clears all entries by resetting `this.events = {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
destroy(): void {
    this.events = {};
}
```
