---
id: "cc_slot_module:SlotButtonModule:methods:onTouchCancel"
title: "SlotButtonNormal.onTouchCancel Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onTouchCancel"]
---

# 📖 `SlotButtonNormal.onTouchCancel()`

---

## 1. Method Overview & Signature

Cancels active `holdAction` countdown timer when finger is lifted or gesture is interrupted.

```typescript
public onTouchCancel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTouchCancel(): void {
    if (this.holdAction) {
        this.unschedule(this.holdAction);
    }
}
```
