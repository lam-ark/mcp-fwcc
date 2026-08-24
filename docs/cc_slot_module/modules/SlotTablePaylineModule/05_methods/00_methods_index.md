---
id: "cc_slot_module:SlotTablePaylineModule:methods:index"
title: "SlotTablePaylineModule Methods Index"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTablePaylineModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `public` | Resolves companion components and initializes the subsystem. |
| **[`init(): void`](./init.md)** | `protected` | Creates `payLineEmitter`, discovers child components, and calls `component.init()`. |
| **[`initExtend(): void`](./initExtend.md)** | `protected` | Virtual extension hook for subclasses. |
| **[`registerEvents(): void`](./registerEvents.md)** | `protected` | Subscribes to `SETUP_PAYLINES` and `TABLE_FORMAT_CHANGED` on `moduleEvent`. |
| **[`unregisterEvents(): void`](./unregisterEvents.md)** | `protected` | Unsubscribes event listeners from `moduleEvent`. |
| **[`onTableFormatChanged(data): void`](./onTableFormatChanged.md)** | `protected` | Updates table grid format inside `PaylineConfig`. |
| **[`onSetupPaylines(): void`](./onSetupPaylines.md)** | `protected` | Ingests data from `SlotTablePaylineData` and emits `PAYLINE_SET_DATA`. |
| **[`getPaylineData(): SlotTablePaylineData`](./getPaylineData.md)** | `protected` | Resolves or creates `SlotTablePaylineData`. |
| **[`getConfig(): PaylineConfig`](./getConfig.md)** | `protected` | Resolves or creates `PaylineConfig`. |
| **[`getSchedule(): SlotPaylineSchedule`](./getSchedule.md)** | `protected` | Resolves or creates `SlotPaylineSchedule`. |
| **[`onDestroy(): void`](./onDestroy.md)** | `public` | Cleans up event listeners. |
