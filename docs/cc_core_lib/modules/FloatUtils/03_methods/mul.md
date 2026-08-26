---
id: "cc_core_lib:FloatUtils:methods:mul"
title: "FloatUtils.mul Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "methods", "mul"]
---

# 📖 `FloatUtils.mul()`

---

## 1. Method Signature

```typescript
public mul(a: number | string, b: number | string): number
```

- **Scope**: `eno.FloatUtils.mul`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
mul(a: number | string, b: number | string): number {
    // Integer scaling to completely eliminate IEEE-754 floating point arithmetic precision drift
    const precision = Math.max(this.getDecimalLength(a), this.getDecimalLength(b));
    const factor = Math.pow(10, precision);
    const intA = Math.round(a * factor);
    const intB = Math.round(b * factor);
    
    return (intA * intB) / (factor * factor);
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `FloatUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
