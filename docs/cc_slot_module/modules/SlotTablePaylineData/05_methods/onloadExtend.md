---
id: "cc_slot_module:SlotTablePaylineData:method:onloadExtend"
title: "SlotTablePaylineData.onloadExtend Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "onloadExtend"]
---

# 🚀 `SlotTablePaylineData.onloadExtend(): void`

---

## 1. Method Signature

```typescript
public onloadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `BaseDataModule.onLoad()` during component instantiation.

---

## 3. Algorithmic Steps

Queries and caches `this.config = this.getComponent(PaylineConfig)`.

---

## 4. Full Source Code

```typescript
onloadExtend(): void {
    this.config = this.getComponent(PaylineConfig);
}
```
