---
id: "cc_slot_module:JackpotModule:methods:updateJackpotData"
title: "JackpotModule.updateJackpotData Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "updateJackpotData"]
---

# 📖 `JackpotModule.updateJackpotData()`

---

## 1. Method Overview & Signature

Renders jackpot pools for the active bet index when the `jackpots` object changes.

```typescript
public updateJackpotData(jackpots: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateJackpotData(jackpots: any): void {
    this.renderAllJackpot(jackpots[this.jackpotData.index]);
}
```
