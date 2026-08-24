---
id: "cc_slot_module:SlotTablePaylineModule:method:getPaylineData"
title: "SlotTablePaylineModule.getPaylineData Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "getPaylineData"]
---

# 🚀 `SlotTablePaylineModule.getPaylineData(): SlotTablePaylineData`

---

## 1. Method Signature

```typescript
protected getPaylineData(): SlotTablePaylineData
```

---

## 2. Algorithmic Steps

Retrieves existing `SlotTablePaylineData` component on current node, or adds one dynamically if missing.

---

## 3. Full Source Code

```typescript
protected getPaylineData(): SlotTablePaylineData {
    return this.getComponent(SlotTablePaylineData) || this.addComponent(SlotTablePaylineData);
}
```
