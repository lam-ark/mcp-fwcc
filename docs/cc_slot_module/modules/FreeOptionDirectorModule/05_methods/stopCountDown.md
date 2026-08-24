---
id: "cc_slot_module:FreeOptionDirectorModule:method:stopCountDown"
title: "FreeOptionDirectorModule.stopCountDown() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "stopCountDown"]
---

# `FreeOptionDirectorModule.stopCountDown(): void`

---

## 1. Method Signature
```typescript
stopCountDown(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `_repeatCountDown` tween is active and `countdownTime > 0`, stops the tween and sets `this._repeatCountDown = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
stopCountDown(): void {
    if (this._repeatCountDown && this.countdownTime > 0) {
        this._repeatCountDown.stop();
        this._repeatCountDown = null;
    }
}
```
