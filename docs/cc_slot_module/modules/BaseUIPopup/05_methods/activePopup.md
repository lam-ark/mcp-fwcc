---
id: "cc_slot_module:BaseUIPopup:methods:activePopup"
title: "BaseUIPopup.activePopup Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "activePopup"]
---

# 📖 `BaseUIPopup.activePopup()`

---

## 1. Method Overview & Signature

Activates or deactivates the popup instantly without playing animation tweens.

```typescript
public activePopup(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
activePopup(isActive: boolean): void {
    this.popupBehavior.activePopup(isActive);
}
```
