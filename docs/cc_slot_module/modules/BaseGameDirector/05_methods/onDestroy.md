---
id: "cc_slot_module:BaseGameDirector:method:onDestroy"
title: "BaseGameDirector.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "onDestroy", "teardown", "lifecycle"]
---

# `BaseGameDirector.onDestroy(): void`

---

## 1. Method Signature
```typescript
protected onDestroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.executor.destroy()`, which executes `this.onResetAllScripts()`.
2. Clears in-flight action promises and prevents memory leaks during scene changes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onDestroy(): void {
    this.executor.destroy();
}
```
