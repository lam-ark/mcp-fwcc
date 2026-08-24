---
id: "cc_slot_module:JackpotModule:methods:renderAllJackpot"
title: "JackpotModule.renderAllJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "renderAllJackpot"]
---

# 📖 `JackpotModule.renderAllJackpot()`

---

## 1. Method Overview & Signature

Emits `ON_UPDATE_VALUE` to all configured jackpot tier labels with progressive interpolation duration.

```typescript
public renderAllJackpot(data: any, time: number = JACKPOT_PROGRESSIVE_TIME.INIT): void
```

---

## 2. Complete Source Code Implementation

```typescript
renderAllJackpot(data: any, time: number = JACKPOT_PROGRESSIVE_TIME.INIT): void {
    if (!data || this.jackpotData.pauseUpdateJackpot) {
        return;
    }

    this.jackpotItems.forEach((item) => {
        let jpType = getEnumKeyByValue(JACKPOT_TYPE_ENUM, item.jackpotType);
        item.label.node.emit("ON_UPDATE_VALUE", data[jpType], time);
    });
}
```
