---
id: "cc_slot_module:SlotButtonModule:methods:stopAnimHover"
title: "SlotButtonSpine.stopAnimHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "stopAnimHover", "spine"]
---

# 📖 `SlotButtonSpine.stopAnimHover()`

---

## 1. Method Overview & Signature

Deactivates the `spineHover` overlay node when cursor leaves button area.

```typescript
public stopAnimHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopAnimHover(): void {
    if (this.spineHover) {
        this.spineHover.node.active = false;
    }
    this.isOnHover = false;
}
```
