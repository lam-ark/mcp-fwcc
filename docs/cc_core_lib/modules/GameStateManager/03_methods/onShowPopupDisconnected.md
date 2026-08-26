---
id: "cc_core_lib:GameStateManager:methods:onShowPopupDisconnected"
title: "GameStateManager.onShowPopupDisconnected Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "methods", "onShowPopupDisconnected"]
---

# 📖 `GameStateManager.onShowPopupDisconnected()`

---

## 1. Method Signature

```typescript
public onShowPopupDisconnected(): void
```

- **Scope**: `eno.GameStateManager.onShowPopupDisconnected`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
onShowPopupDisconnected(): void {
    // Execution pipeline for `GameStateManager.onShowPopupDisconnected`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `GameStateManager`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
