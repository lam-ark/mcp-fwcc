---
id: "cc_core_lib:NodeUtils:methods:changeParent"
title: "NodeUtils.changeParent Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "changeParent"]
---

# 📖 `NodeUtils.changeParent()`

---

## 1. Method Signature

```typescript
public changeParent(node: cc.Node, newParent: cc.Node): void
```

- **Scope**: `eno.NodeUtils.changeParent`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
changeParent(node: cc.Node, newParent: cc.Node): void {
    if (!cc.isValid(node) || !cc.isValid(newParent) || node.parent === newParent) return;
    const worldPos = node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    node.setParent(newParent);
    const localPos = newParent.convertToNodeSpaceAR(worldPos);
    node.setPosition(localPos);
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `NodeUtils`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
