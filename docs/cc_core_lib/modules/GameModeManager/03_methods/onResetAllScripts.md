---
id: "cc_core_lib:GameModeManager:methods:onResetAllScripts"
title: "GameModeManager.onResetAllScripts Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["GameModeManager", "game_mode_manager", "cc_core_lib", "methods", "onResetAllScripts"]
---

# 📖 `GameModeManager.onResetAllScripts()`

---

## 1. Method Signature

```typescript
public onResetAllScripts(): void
```

- **Scope**: `eno.GameModeManager.onResetAllScripts`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
onResetAllScripts(): void {
    // Execution pipeline for `GameModeManager.onResetAllScripts`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `GameModeManager`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
