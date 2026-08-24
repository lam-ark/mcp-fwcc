---
id: "cc_slot_module:FreeOptionDirectorModule:method:updateCountdownText"
title: "FreeOptionDirectorModule.updateCountdownText() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "updateCountdownText"]
---

# `FreeOptionDirectorModule.updateCountdownText(timerCount: number): void`

---

## 1. Method Signature
```typescript
updateCountdownText(timerCount: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `timerCount > 0`, formats label string as `${this.autoSelectText} ${timerCount}s`; otherwise displays `"0s"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
updateCountdownText(timerCount: number): void {
    if (timerCount > 0) {
        this.countDownText.string = `${this.autoSelectText} ${timerCount}s`;
    } else {
        this.countDownText.string = "0s";
    }
}
```
