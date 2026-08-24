---
id: "cc_slot_module:SlotTablePaylineData:method:convertJackpotPayline"
title: "SlotTablePaylineData.convertJackpotPayline Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "convertJackpotPayline"]
---

# 🚀 `SlotTablePaylineData.convertJackpotPayline(): Object`

---

## 1. Method Signature

```typescript
protected convertJackpotPayline(): Object
```

---

## 2. Algorithmic Steps

1. Validates `this["jackpotPayline"]`.
2. Splits payload string on `";"`.
3. Returns `{ payLineID: dataSplit[0], payLineWinNumbers: parseInt(dataSplit[1]), payLineWinAmount: Number(dataSplit[2]) }`.

---

## 3. Full Source Code

```typescript
protected convertJackpotPayline(): Object {
    if (!this["jackpotPayline"]) {
        return null;
    }
    const dataSplit = this["jackpotPayline"].split(';');
    if (!dataSplit || !dataSplit.length) {
        return null;
    }
    const payLine = {
        payLineID: dataSplit[0],
        payLineWinNumbers: Number(parseInt(dataSplit[1])),
        payLineWinAmount: Number(dataSplit[2]),
    };
    return payLine;
}
```
