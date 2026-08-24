---
id: "cc_slot_module:PopupControllerModule:methods:isDisplayPopup"
title: "PopupControllerModule.isDisplayPopup Method"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "methods", "isDisplayPopup"]
---

# 📖 `PopupControllerModule.isDisplayPopup()`

---

## 1. Method Overview & Signature

Returns true if any child modal dialog is active in the hierarchy.

```typescript
public isDisplayPopup(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
isDisplayPopup(): boolean {
    return this.node.children.some(child => child.active);
}
```
