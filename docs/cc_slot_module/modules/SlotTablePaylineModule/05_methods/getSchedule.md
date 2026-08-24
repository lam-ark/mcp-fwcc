---
id: "cc_slot_module:SlotTablePaylineModule:method:getSchedule"
title: "SlotTablePaylineModule.getSchedule Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "getSchedule"]
---

# 🚀 `SlotTablePaylineModule.getSchedule(): SlotPaylineSchedule`

---

## 1. Method Signature

```typescript
protected getSchedule(): SlotPaylineSchedule
```

---

## 2. Algorithmic Steps

Retrieves existing `SlotPaylineSchedule` on current node or attaches one dynamically.

---

## 3. Full Source Code

```typescript
protected getSchedule(): SlotPaylineSchedule {
    return this.getComponent(SlotPaylineSchedule) || this.addComponent(SlotPaylineSchedule);
}
```
