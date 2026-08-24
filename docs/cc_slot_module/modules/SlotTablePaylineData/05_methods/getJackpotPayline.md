---
id: "cc_slot_module:SlotTablePaylineData:method:getJackpotPayline"
title: "SlotTablePaylineData.getJackpotPayline Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getJackpotPayline"]
---

# 🚀 `SlotTablePaylineData.getJackpotPayline(): Object`

---

## 1. Method Signature

```typescript
public getJackpotPayline(): Object
```

---

## 2. Algorithmic Steps

Delegates to `convertJackpotPayline()`.

---

## 3. Full Source Code

```typescript
getJackpotPayline(): Object {
    const convertedPayLine = this.convertJackpotPayline();
    return convertedPayLine;
}
```
