---
id: "cc_slot_module:SlotTablePaylineModule:method:onLoadExtend"
title: "SlotTablePaylineModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 🚀 `SlotTablePaylineModule.onLoadExtend(): void`

---

## 1. Method Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotBaseModule.onLoad()` during component instantiation.

---

## 3. Algorithmic Steps

1. Fetches `PaylineConfig` via `this.getConfig()`.
2. Fetches `SlotPaylineSchedule` via `this.getSchedule()`.
3. Fetches `SlotTablePaylineData` via `this.getPaylineData()`.
4. Calls `this.init()`.

---

## 4. Full Source Code

```typescript
onLoadExtend(): void {
    this.paylineConfig = this.getConfig();
    this.paylineSchedule = this.getSchedule();
    this.slotTablePaylineData = this.getPaylineData();

    this.init();
}
```
