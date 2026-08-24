---
id: "cc_slot_module:SlotButtonModule:methods:playAnimIdle"
title: "SlotButtonSpine.playAnimIdle Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "playAnimIdle", "spine"]
---

# 📖 `SlotButtonSpine.playAnimIdle()`

---

## 1. Method Overview & Signature

Plays looping idle Spine animation (`animIdle` / `"Spin"`) on `spineBtnSpin`.

```typescript
public playAnimIdle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playAnimIdle(): void {
    if (this.spineBtnSpin && this.spineBtnSpin.findAnimation(this.animIdle)) {
        if (this.spineBtnSpin.animation !== this.animIdle) {
            this.spineBtnSpin.setAnimation(0, this.animIdle, true);
        }
    } else { 
        log("[SlotButton] Not Found Animation: " + this.animIdle);
    }
}
```
