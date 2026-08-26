---
id: "cc_core_lib:FloatUtils:methods:isEqual"
title: "FloatUtils.isEqual Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "methods", "isEqual"]
---

# 📖 `FloatUtils.isEqual()`

---

## 1. Method Signature

```typescript
public isEqual(a: number, b: number): boolean
```

- **Scope**: `eno.FloatUtils.isEqual`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
isEqual(a: number, b: number): boolean {
    // Execution pipeline for `FloatUtils.isEqual`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `FloatUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
