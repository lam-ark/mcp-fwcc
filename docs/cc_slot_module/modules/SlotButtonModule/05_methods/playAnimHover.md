---
id: "cc_slot_module:SlotButtonModule:methods:playAnimHover"
title: "SlotButtonSpine.playAnimHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "playAnimHover", "spine"]
---

# 📖 `SlotButtonSpine.playAnimHover()`

---

## 1. Method Overview & Signature

Activates the `spineHover` overlay node and plays the looping hover animation (`animHover` / `"Hover"`).

```typescript
public playAnimHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playAnimHover(): void {
    if (this.spineHover) {
        this.spineHover.node.active = true;
        this.spineHover.setAnimation(0, this.animHover, true);
    }
    this.isOnHover = true;
}
```
