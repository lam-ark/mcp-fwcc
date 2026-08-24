---
id: "cc_slot_module:SlotButtonModule:methods:playAnimSpinToStop"
title: "SlotButtonSpine.playAnimSpinToStop Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "playAnimSpinToStop", "spine"]
---

# 📖 `SlotButtonSpine.playAnimSpinToStop()`

---

## 1. Method Overview & Signature

Plays transitional Spine animation from spin to stop state, accounting for reconnect hydration (`isResume`).

```typescript
public playAnimSpinToStop(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playAnimSpinToStop(): void {
    const { isResume } = this.dataStore.playSession;
    if (this.isAutoSpin || !this.spineBtnSpin) {
        return;
    }
    const hasStopAnim = this.spineBtnSpin.findAnimation(this.animStop);
    const hasSpinToStopAnim = this.spineBtnSpin.findAnimation(this.animSpinToStop);
    
    if (hasStopAnim && isResume) {
        this.spineBtnSpin.setAnimation(0, this.animStop, true);
    } else if (hasSpinToStopAnim && hasStopAnim) {
        this.spineBtnSpin.setAnimation(0, this.animSpinToStop, false);
        this.spineBtnSpin.addAnimation(0, this.animStop, true);
    } else {
        log("[SlotButton] Not Found Animation: " + this.animSpinToStop);
    }
}
```
