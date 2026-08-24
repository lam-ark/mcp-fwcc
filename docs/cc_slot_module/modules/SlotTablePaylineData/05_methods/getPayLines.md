---
id: "cc_slot_module:SlotTablePaylineData:method:getPayLines"
title: "SlotTablePaylineData.getPayLines Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getPayLines"]
---

# 🚀 `SlotTablePaylineData.getPayLines(): any[]`

---

## 1. Method Signature

```typescript
public getPayLines(): any[]
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotTablePaylineModule.onSetupPaylines()`.

---

## 3. Algorithmic Steps

1. Selects raw paylines and rightPaylines based on active mode (`RESPIN_GAME`, `isFreeMode()`, or normal game).
2. Converts Left-to-Right and Right-to-Left lines via `convertPayLine()`.
3. Sorts and returns partitioned paylines via `sortPayLines()`.

---

## 4. Full Source Code

```typescript
getPayLines(): any[] {
    let payLines = this["payLines"] || [];
    let rightPayLines = this["rightPayLines"] || [];
    if (!this.isResume && this.state == GAME_MODE_ENUM.RESPIN_GAME) {
        payLines = this["respinGamePayLines"] || payLines;
        rightPayLines = this["rightRespinGamePayLines"] || rightPayLines;
    } else if (this.isFreeMode()) {
        payLines = this["freeGamePayLines"] || payLines;
        rightPayLines = this["rightFreeGamePayLines"] || rightPayLines;
    } else {
        payLines = this["normalGamePayLines"] || payLines;
        rightPayLines = this["rightNormalGamePayLines"] || rightPayLines;
    }

    payLines = [...this.convertPayLine(payLines), ...this.convertPayLine(rightPayLines, true)];
    return this.sortPayLines(payLines);
}
```
