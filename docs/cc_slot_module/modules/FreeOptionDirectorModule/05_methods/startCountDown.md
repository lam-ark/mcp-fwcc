---
id: "cc_slot_module:FreeOptionDirectorModule:method:startCountDown"
title: "FreeOptionDirectorModule.startCountDown() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "startCountDown", "tween_timer"]
---

# `FreeOptionDirectorModule.startCountDown(): void`

---

## 1. Method Signature
```typescript
startCountDown(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `if (!this.countDownText) return;`.
2. Stops any existing tween via `this.stopCountDown()`.
3. Creates a `repeatForever` tween with 1-second delay:
   * Decrements `this.countdownTime--`.
   * Updates label via `this.updateCountdownText(this.countdownTime)`.
   * When `this.countdownTime <= 0`, halts tween and calls `this._runAutoTrigger()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
startCountDown(): void {
    if (!this.countDownText) {
        return;
    }
    this.stopCountDown();
    this._repeatCountDown = tween(this)
        .delay(1)
        .call(() => {
            this.countdownTime--;
            this.updateCountdownText(this.countdownTime);
            if (this.countdownTime <= 0) {
                this._repeatCountDown.stop();
                this._repeatCountDown = null;
                this._runAutoTrigger();
            }
        })
        .union()
        .repeatForever()
        .start();
}
```
