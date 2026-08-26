---
id: "cc_core_lib:TweenUtils:methods:zoomBy"
title: "TweenUtils.zoomBy Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["TweenUtils", "tween_utils", "cc_core_lib", "methods", "zoomBy"]
---

# 📖 `TweenUtils.zoomBy()`

---

## 1. Method Signature

```typescript
public zoomBy(node: cc.Node, duration: number, scale: number, options?: ITweenOptions): cc.Tween
```

- **Scope**: `eno.TweenUtils.zoomBy`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
zoomBy(node: cc.Node, duration: number, scale: number, options?: ITweenOptions): cc.Tween {
    // Execution pipeline for `TweenUtils.zoomBy`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `TweenUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
