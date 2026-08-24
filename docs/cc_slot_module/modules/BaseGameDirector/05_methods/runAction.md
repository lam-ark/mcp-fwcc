---
id: "cc_slot_module:BaseGameDirector:method:runAction"
title: "BaseGameDirector.runAction() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "runAction", "ScriptExecutor", "async"]
---

# `BaseGameDirector.runAction(actionName: string, data?: any): Promise<void>`

---

## 1. Method Signature
```typescript
public runAction(actionName: string, data?: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Delegates execution to internal `this.executor.runAction(actionName, data)`.
2. Inside `ScriptExecutor`, invokes `this.writer["makeScript" + actionName](data)` to build command list.
3. Sequentially executes command steps, awaiting each step's completion.
4. Returns a `Promise<void>` that resolves when all command steps in the action finish.

---

## 3. Un-truncated Source Code Implementation
```typescript
runAction(actionName: string, data?: any): Promise<void> {
    return this.executor.runAction(actionName, data);
}
```
