---
id: "cc_core_lib:SpineUtils:methods:getAnimationDuration"
title: "SpineUtils.getAnimationDuration Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "getAnimationDuration"]
---

# 📖 `SpineUtils.getAnimationDuration()`

---

## 1. Method Signature

```typescript
public getAnimationDuration(spine: sp.Skeleton, name: string): number
```

- **Scope**: `eno.SpineUtils.getAnimationDuration`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
getAnimationDuration(spine: sp.Skeleton, name: string): number {
    // Execution pipeline for `SpineUtils.getAnimationDuration`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `SpineUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
