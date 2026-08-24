---
id: "cc_slot_module:SlotButtonModule:methods:onChangeTextHoldToAuto"
title: "SlotButtonNormal.onChangeTextHoldToAuto Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "onChangeTextHoldToAuto"]
---

# 📖 `SlotButtonNormal.onChangeTextHoldToAuto()`

---

## 1. Method Overview & Signature

Swaps the label sprite frame to `textHoldToAuto`.

```typescript
public onChangeTextHoldToAuto(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeTextHoldToAuto(): void {
    if (this.textSpin) {
        this.textSpin.spriteFrame = this.textHoldToAuto;
    }
}
```
