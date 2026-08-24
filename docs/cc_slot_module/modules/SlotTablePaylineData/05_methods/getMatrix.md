---
id: "cc_slot_module:SlotTablePaylineData:method:getMatrix"
title: "SlotTablePaylineData.getMatrix Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getMatrix"]
---

# 🚀 `SlotTablePaylineData.getMatrix(): any[]`

---

## 1. Method Signature

```typescript
public getMatrix(): any[]
```

---

## 2. Algorithmic Steps

1. Selects raw matrix source (`respinGameMatrix`, `freeGameMatrix`, or `normalGameMatrix`).
2. Converts raw array to 2D column matrix using `eno.SlotUtils.convertSlotMatrix()`.

---

## 3. Full Source Code

```typescript
getMatrix(): any[] {
    let rawMatrix = this["matrix"] || this["matrix0"];

    if (!this.isResume && this.state == GAME_MODE_ENUM.RESPIN_GAME) {
        rawMatrix = this["respinGameMatrix"] || rawMatrix;
    } else if (this.isFreeMode()) {
        rawMatrix = this["freeGameMatrix"] || rawMatrix;
    } else {
        rawMatrix = this["normalGameMatrix"] || rawMatrix;
    }

    return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_CONFIG.format);
}
```
