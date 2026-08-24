---
id: "cc_slot_module:SlotTablePaylineData:method:sortPayLines"
title: "SlotTablePaylineData.sortPayLines Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "sortPayLines"]
---

# 🚀 `SlotTablePaylineData.sortPayLines(payLines): any[]`

---

## 1. Method Signature

```typescript
protected sortPayLines(payLines: any[]): any[]
```

---

## 2. Algorithmic Steps

Partitions paylines into Left-to-Right lines (`!isRight`) and Right-to-Left lines (`isRight`), concatenating them so Left-to-Right lines display first.

---

## 3. Full Source Code

```typescript
protected sortPayLines(payLines: any[]): any[] {
    const leftPayLines = payLines.filter(payLine => !payLine.isRight) || [];
    const rightPayLines = payLines.filter(payLine => payLine.isRight) || [];
    return [...leftPayLines, ...rightPayLines];
}
```
