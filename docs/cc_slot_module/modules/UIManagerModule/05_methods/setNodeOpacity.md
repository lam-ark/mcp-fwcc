---
id: "cc_slot_module:UIManagerModule:methods:setNodeOpacity"
title: "UIManagerModule.setNodeOpacity Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setNodeOpacity"]
---

# 📖 `UIManagerModule.setNodeOpacity()`

---

## 1. Method Overview & Signature

Safely updates opacity on a target Cocos node using `eno.setOpacity` with null checking.

```typescript
public setNodeOpacity(node: cc.Node, opacity: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
setNodeOpacity(node: cc.Node, opacity: number): void {
    if (node) {
        eno.setOpacity(node, opacity);
    }
}
```
