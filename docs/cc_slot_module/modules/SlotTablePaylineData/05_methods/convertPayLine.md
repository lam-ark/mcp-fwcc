---
id: "cc_slot_module:SlotTablePaylineData:method:convertPayLine"
title: "SlotTablePaylineData.convertPayLine Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "convertPayLine"]
---

# 🚀 `SlotTablePaylineData.convertPayLine(payLines, isRight): any[]`

---

## 1. Method Signature

```typescript
protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[]
```

---

## 2. Algorithmic Steps

1. Switches based on `this.config.PAYLINE_TYPE`:
   - `Lines` ➔ `eno.SlotUtils.convertPayLine()`
   - `AllWays` ➔ `eno.SlotUtils.convertPayLineAllWays()`
   - `Cluster` ➔ `eno.SlotUtils.convertPayLineCluster()`
   - `ScatterPay` ➔ `eno.SlotUtils.convertPayLineScatterPay()`
2. Flags `payLine.isRight = true` if applicable.
3. Attaches `payLine.winSymbols = PaylineUtils.getWinIndexesInPayLine(matrix, payLine)`.

---

## 3. Full Source Code

```typescript
protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[] {
    let convertedPayLines = [];
    const matrix = this.getMatrix();

    switch (this.config.PAYLINE_TYPE) {
        case PAYLINE_TYPE.Lines:
            convertedPayLines = eno.SlotUtils.convertPayLine(payLines);
            break;
        case PAYLINE_TYPE.AllWays:
            convertedPayLines = eno.SlotUtils.convertPayLineAllWays(payLines);
            break;
        case PAYLINE_TYPE.Cluster:
            convertedPayLines = eno.SlotUtils.convertPayLineCluster(payLines);
            break;
        case PAYLINE_TYPE.ScatterPay:
            convertedPayLines = eno.SlotUtils.convertPayLineScatterPay(payLines);
            break;
    }

    convertedPayLines.forEach((payLine, index) => {
        if (isRight || this.isRightPayLine(payLines[index])) {
            payLine.isRight = true;
        }
        payLine.winSymbols = PaylineUtils.getWinIndexesInPayLine(matrix, payLine);
    });

    return convertedPayLines;
}
```
