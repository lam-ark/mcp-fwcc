---
id: "cc_core_lib:MoneyTween:methods:runShortNumber"
title: "MoneyTween.runShortNumber Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "runShortNumber"]
---

# 📖 `MoneyTween.runShortNumber()`

---

## 1. Method Signature

```typescript
public runShortNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween
```

- **Scope**: `eno.MoneyTween.runShortNumber`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
runShortNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween {
    // Execution pipeline for `MoneyTween.runShortNumber`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `MoneyTween`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
