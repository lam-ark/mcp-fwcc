---
id: "cc_slot_module:SlotButtonModule:methods:onChangeTextPressToStop"
title: "SlotButtonNormal.onChangeTextPressToStop Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeTextPressToStop"]
---

# 📖 `SlotButtonNormal.onChangeTextPressToStop()`

---

## 1. Method Overview & Signature

Swaps the label sprite frame to `textPressToStop`.

```typescript
public onChangeTextPressToStop(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeTextPressToStop(): void {
    if (this.textSpin) {
        this.textSpin.spriteFrame = this.textPressToStop;
    }
}
```
