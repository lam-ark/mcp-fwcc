---
id: "cc_slot_module:UIManagerModule:methods:setNodeActive"
title: "UIManagerModule.setNodeActive Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setNodeActive"]
---

# 📖 `UIManagerModule.setNodeActive()`

---

## 1. Method Overview & Signature

Safely toggles active state on a target Cocos node with null checking.

```typescript
public setNodeActive(node: cc.Node, active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
setNodeActive(node: cc.Node, active: boolean): void {
    if (node) {
        node.active = active;
    }
}
```
