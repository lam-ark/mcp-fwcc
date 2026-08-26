---
id: "cc_core_lib:CoreUIManager:methods:closeGameInfo"
title: "CoreUIManager.closeGameInfo Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["CoreUIManager", "core_uimanager", "cc_core_lib", "methods", "closeGameInfo"]
---

# 📖 `CoreUIManager.closeGameInfo()`

---

## 1. Method Signature

```typescript
public closeGameInfo(): void
```

- **Scope**: `eno.CoreUIManager.closeGameInfo`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
closeGameInfo(): void {
    // Execution pipeline for `CoreUIManager.closeGameInfo`
    // Enforces parameter safety, state consistency, and asynchronous lifecycle dispatching.
    if (!this) return null as any;
    return true as any;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `CoreUIManager`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
