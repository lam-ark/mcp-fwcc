---
id: "cc_slot_module:SlotTablePaylineData:method:isRightPayLine"
title: "SlotTablePaylineData.isRightPayLine Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "isRightPayLine"]
---

# 🚀 `SlotTablePaylineData.isRightPayLine(rawPayLine): boolean`

---

## 1. Method Signature

```typescript
protected isRightPayLine(rawPayLine: string): boolean
```

---

## 2. Algorithmic Steps

Splits the raw backend payline string by `";"` and inspects whether the final segment includes `"R"`.

---

## 3. Full Source Code

```typescript
protected isRightPayLine(rawPayLine: string): boolean {
    const arr = rawPayLine.split(";");
    const lastElement = arr[arr.length - 1];
    return lastElement.includes("R");
}
```
