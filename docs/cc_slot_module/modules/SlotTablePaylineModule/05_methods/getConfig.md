---
id: "cc_slot_module:SlotTablePaylineModule:method:getConfig"
title: "SlotTablePaylineModule.getConfig Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "getConfig"]
---

# 🚀 `SlotTablePaylineModule.getConfig(): PaylineConfig`

---

## 1. Method Signature

```typescript
protected getConfig(): PaylineConfig
```

---

## 2. Algorithmic Steps

Retrieves existing `PaylineConfig` on current node or attaches one dynamically.

---

## 3. Full Source Code

```typescript
protected getConfig(): PaylineConfig {
    return this.getComponent(PaylineConfig) || this.addComponent(PaylineConfig);
}
```
