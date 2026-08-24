---
id: "cc_slot_module:PopupControllerModule:methods:onLoad"
title: "PopupControllerModule.onLoad Method"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PopupControllerModule.onLoad()`

---

## 1. Method Overview & Signature

Activates all child popup nodes during engine boot so their components run `onLoad()`.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    // Turn it on for entering onLoad
    this.node.children.forEach(child => {
        child.active = true;
    });
}
```
