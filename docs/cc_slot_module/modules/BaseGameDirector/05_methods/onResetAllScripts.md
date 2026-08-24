---
id: "cc_slot_module:BaseGameDirector:method:onResetAllScripts"
title: "BaseGameDirector.onResetAllScripts() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "onResetAllScripts", "abort"]
---

# `BaseGameDirector.onResetAllScripts(): void`

---

## 1. Method Signature
```typescript
public onResetAllScripts(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Forwards teardown call to `this.executor.onResetAllScripts()`.
2. Iterates over all active action queues in memory, triggers their `onSkip()` callbacks, and cleans up references.

---

## 3. Un-truncated Source Code Implementation
```typescript
onResetAllScripts(): void {
    return this.executor.onResetAllScripts();
}
```
