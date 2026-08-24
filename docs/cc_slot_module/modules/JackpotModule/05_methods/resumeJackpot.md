---
id: "cc_slot_module:JackpotModule:methods:resumeJackpot"
title: "JackpotModule.resumeJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "resumeJackpot"]
---

# 📖 `JackpotModule.resumeJackpot()`

---

## 1. Method Overview & Signature

Sets `pauseUpdateJackpot = false` on `JackpotData` and re-renders pools with progressive or instant time.

```typescript
public resumeJackpot(isForce: boolean = false): void
```

---

## 2. Complete Source Code Implementation

```typescript
resumeJackpot(isForce: boolean = false): void {
    this.jackpotData.setPauseJackpot(false);
    this.renderAllJackpot(this.currentData[this.jackpotData.index], isForce ? 0 : JACKPOT_PROGRESSIVE_TIME.PROGRESS);
}
```
