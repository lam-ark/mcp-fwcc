---
id: "cc_core_lib:SpineUtils:methods:hasAnimation"
title: "SpineUtils.hasAnimation Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "methods", "hasAnimation"]
---

# 📖 `SpineUtils.hasAnimation()`

---

## 1. Method Signature

```typescript
public hasAnimation(spine: sp.Skeleton, name: string): boolean
```

- **Scope**: `eno.SpineUtils.hasAnimation`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
hasAnimation(spine: sp.Skeleton, animName: string): boolean {
    if (!cc.isValid(spine) || !spine.skeletonData) return false;
    const runtimeData = spine.skeletonData.getRuntimeData();
    if (!runtimeData || !runtimeData.animations) return false;
    return runtimeData.animations.some((a: any) => a.name === animName);
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `SpineUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
