---
id: "cc_slot_module:BaseUIPopup:methods:onLoadExtend"
title: "BaseUIPopup.onLoadExtend Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `BaseUIPopup.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes `popupBehavior`, dynamically attaching `FadePopupBehavior` if no behavior is assigned.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.popupBehavior = this.node.getComponent(PopupBehavior);
    if (!this.popupBehavior) {
        this.popupBehavior = this.node.addComponent(FadePopupBehavior);
    }
}
```
